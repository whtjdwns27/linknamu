import { MongoClient, type Db } from "mongodb";

// 개발 모드에서는 파일이 바뀔 때마다 모듈이 다시 실행되므로,
// 연결을 global에 보관해 매번 새 연결이 생기지 않게 합니다.
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

function getClient(): Promise<MongoClient> {
  if (!globalForMongo._mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
    }
    globalForMongo._mongoClientPromise = new MongoClient(uri)
      .connect()
      .catch((error) => {
        // 연결에 실패하면 다음 요청에서 다시 시도할 수 있게 비웁니다.
        globalForMongo._mongoClientPromise = undefined;
        throw error;
      });
  }
  return globalForMongo._mongoClientPromise;
}

// DB 이름은 MONGODB_URI 경로(/linknamu)에 적힌 것을 사용합니다.
export async function getDb(): Promise<Db> {
  const client = await getClient();
  return client.db();
}

import { links } from "@/data/profile";
import { getDb } from "@/lib/mongodb";

// clicks 컬렉션 문서 형태: { _id: 링크 id, count: 누적 클릭 수 }
type ClickDoc = {
  _id: string;
  count: number;
};

export type ClickCounts = Record<string, number>;

const linkIds = links.map((link) => link.id);

async function getCollection() {
  const db = await getDb();
  return db.collection<ClickDoc>("clicks");
}

export function isKnownLinkId(id: string): boolean {
  return linkIds.includes(id);
}

export async function getClickCounts(): Promise<ClickCounts> {
  const collection = await getCollection();
  const docs = await collection.find({ _id: { $in: linkIds } }).toArray();

  // 아직 한 번도 클릭되지 않은 링크는 문서가 없으므로 0으로 채웁니다.
  const counts: ClickCounts = Object.fromEntries(linkIds.map((id) => [id, 0]));
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }
  return counts;
}

export async function incrementClickCount(id: string): Promise<number> {
  const collection = await getCollection();
  const doc = await collection.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  return doc?.count ?? 1;
}

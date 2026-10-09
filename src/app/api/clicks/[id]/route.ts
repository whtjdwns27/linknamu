import { incrementClickCount, isKnownLinkId } from "@/lib/clicks";

// 해당 링크의 클릭 수를 1 늘리고, 늘어난 값을 돌려줍니다.
export async function POST(
  _request: Request,
  ctx: RouteContext<"/api/clicks/[id]">,
) {
  const { id } = await ctx.params;

  // 아무 id나 넣어 DB에 문서가 쌓이지 않도록 등록된 링크만 받습니다.
  if (!isKnownLinkId(id)) {
    return Response.json({ error: "존재하지 않는 링크입니다." }, { status: 404 });
  }

  try {
    const count = await incrementClickCount(id);
    return Response.json({ id, count });
  } catch (error) {
    console.error("클릭 수 증가 실패:", error);
    return Response.json(
      { error: "클릭 수를 저장하지 못했습니다." },
      { status: 500 },
    );
  }
}

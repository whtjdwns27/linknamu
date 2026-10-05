// 보여 주기용 더미 데이터입니다. 실제 내용으로 교체하세요.

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  emoji: string;
};

export const profile = {
  name: "조성준",
  bio: "풀스택 개발자, 요즘에는 AI 개발에 관심이 많아요",
  imageUrl: "/profile.jpg",
};

export const links: LinkItem[] = [
  {
    id: "github",
    title: "깃허브",
    url: "https://github.com/whtjdwns27",
    emoji: "🐙",
  },
  {
    id: "blog",
    title: "블로그",
    url: "https://blog.naver.com/whtjdwns27",
    emoji: "✏️",
  },
  {
    id: "email",
    title: "이메일",
    url: "mailto:whtjdwns27@naver.com",
    emoji: "💌",
  },
];

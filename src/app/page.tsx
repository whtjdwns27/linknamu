import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="relative flex flex-1 justify-center overflow-hidden bg-gradient-to-b from-[#fdf8f1] via-[#fbeee2] to-[#f6d9c4] dark:from-[#1c1714] dark:via-[#241b16] dark:to-[#2e1f17]">
      {/* 글래스 카드 뒤로 은은하게 비치는 배경 빛 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#ffd9b8]/60 blur-3xl dark:bg-[#7a4a2e]/30"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-28 h-80 w-80 rounded-full bg-[#ffc7a8]/50 blur-3xl dark:bg-[#8a4f35]/25"
      />

      <main className="relative flex w-full max-w-md flex-col items-center px-6 pt-20 pb-16 sm:px-8 sm:pt-24">
        <Profile
          name={profile.name}
          bio={profile.bio}
          imageUrl={profile.imageUrl}
        />
        <LinkList links={links} />
      </main>
    </div>
  );
}

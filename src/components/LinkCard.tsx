type LinkCardProps = {
  title: string;
  url: string;
  emoji: string;
};

export default function LinkCard({ title, url, emoji }: LinkCardProps) {
  // mailto: 링크를 새 탭으로 열면 빈 탭이 남으므로 웹 주소만 새 탭으로 엽니다.
  const isWebLink = url.startsWith("http");

  return (
    <a
      href={url}
      target={isWebLink ? "_blank" : undefined}
      rel={isWebLink ? "noopener noreferrer" : undefined}
      className="flex h-[60px] w-full items-center justify-center gap-2.5 rounded-2xl border border-white/70 bg-white/45 px-6 text-[15px] font-semibold text-[#3b2f2a] shadow-[0_4px_20px_-6px_rgba(160,90,50,0.18)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_8px_24px_-8px_rgba(160,90,50,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c98b65] active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:text-[#f3e9df] dark:shadow-[0_4px_20px_-6px_rgba(0,0,0,0.5)] dark:hover:bg-white/10"
    >
      <span aria-hidden="true" className="text-lg leading-none">
        {emoji}
      </span>
      {title}
    </a>
  );
}

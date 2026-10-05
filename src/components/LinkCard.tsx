type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-14 w-full items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 text-base font-medium text-zinc-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
    >
      {title}
    </a>
  );
}

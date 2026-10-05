import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-md flex-col items-center px-5 py-16">
        <Profile
          name={profile.name}
          bio={profile.bio}
          imageUrl={profile.imageUrl}
        />
        <ul className="mt-10 flex w-full flex-col gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <LinkCard title={link.title} url={link.url} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

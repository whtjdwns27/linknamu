import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={160}
        height={160}
        preload
        className="h-40 w-40 rounded-full object-cover ring-4 ring-white shadow-md dark:ring-zinc-800"
      />
      <h1 className="mt-5 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
        {name}
      </h1>
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">{bio}</p>
    </section>
  );
}

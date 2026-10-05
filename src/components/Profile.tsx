import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="rounded-full bg-gradient-to-b from-white to-[#f3dccb] p-1.5 shadow-[0_12px_32px_-8px_rgba(160,90,50,0.35)] dark:from-[#4a382d] dark:to-[#2a1f19] dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)]">
        <Image
          src={imageUrl}
          alt={`${name} 프로필 사진`}
          width={128}
          height={128}
          preload
          className="h-32 w-32 rounded-full object-cover"
        />
      </div>
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-[#3b2f2a] dark:text-[#f3e9df]">
        {name}
      </h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-[#7a675c] dark:text-[#bfaea1]">
        {bio}
      </p>
    </section>
  );
}

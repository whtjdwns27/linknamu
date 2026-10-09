"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type LinkListProps = {
  links: LinkItem[];
};

export default function LinkList({ links }: LinkListProps) {
  // 데이터를 받기 전에는 모든 링크를 0회로 보여 줍니다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/clicks", { cache: "no-store", signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Record<string, number>) => setCounts(data))
      .catch((error) => {
        if (controller.signal.aborted) return;
        console.error("클릭 수를 불러오지 못했습니다:", error);
      });

    return () => controller.abort();
  }, []);

  function handleClick(id: string) {
    // 화면은 바로 1 올리고, 저장 요청은 페이지를 떠나도 끝까지 가도록 keepalive로 보냅니다.
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${encodeURIComponent(id)}`, {
      method: "POST",
      keepalive: true,
    }).catch((error) => {
      console.error("클릭 수를 저장하지 못했습니다:", error);
    });
  }

  return (
    <ul className="mt-12 flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            emoji={link.emoji}
            clickCount={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}

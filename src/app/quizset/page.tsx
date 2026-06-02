"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type QuizSet = {
  id: string;
  title: string;
};

export default function QuizSetHome() {
  const [quizsets, setQuizsets] = useState<QuizSet[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/quizset")
      .then((res) => res.json())
      .then(setQuizsets);
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4">
        クイズセット一覧
      </h1>

      <button
        className="border p-2 mb-4"
        onClick={() => router.push("/quizset/new")}
      >
        ＋ 新規作成
      </button>

      <div className="flex flex-col gap-3">
        {quizsets.map((q) => (
          <div
            key={q.id}
            className="border p-3 rounded cursor-pointer hover:bg-gray-100"
            onClick={() => router.push(`/quizset/${q.id}`)}
          >
            {q.title}
          </div>
        ))}
      </div>
    </div>
  );
}
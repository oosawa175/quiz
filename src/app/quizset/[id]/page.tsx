"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Question = {
  id: number;
  text: string;
};

type QuizSet = {
  id: string;
  title: string;
  questions: Question[];
};

export default function QuizSetDetail() {
  const { id } = useParams();

  const [quizset, setQuizset] = useState<QuizSet | null>(null);
  const [text, setText] = useState("");
  const [choices, setChoices] = useState("");
  const [answer, setAnswer] = useState(0);
  async function fetchData(){
    const res = await fetch(`/api/quizset/${id}`);
    const data = await res.json();
    setQuizset(data);
  }
  async function handleAdd() {
    await fetch("/api/question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        choices,
        answer,
        quizSetId: id,
      }),
    });

    setText("");
    setChoices("");
    setAnswer(0);

    fetchData();
  }

  useEffect(() => {
    if (!id) return;

    (async () => {
      const res = await fetch(`/api/quizset/${id}`);
      const data = await res.json();
      setQuizset(data);
    })();
  }, [id]);

  if (!quizset) return <div>読み込み中...</div>;

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold">
        {quizset.title}
      </h1>
      <div className="mt-6">
        <h2 className="mt-6 font-bold">問題一覧</h2>
        {quizset.questions.map((q) => (
          <div key={q.id} className="border p-2 rounded">
            {q.text}
          </div>
        ))}
      </div>
      <div className="mt-8 border-t pt-4">
        <h2 className="font-bold">問題追加</h2>
        <input value={text} onChange={(e) => setText(e.target.value)} />

        <input
            value={choices}
            onChange={(e) => setChoices(e.target.value)}
            placeholder="カンマ区切り"
        />

        <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(Number(e.target.value))}
        />

        <button onClick={handleAdd}>
            追加
        </button>        
      </div>
    </div>
  );
}
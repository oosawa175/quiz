"use client";

import { useState } from "react";

export default function SubmitPage() {
  const [text, setText] = useState("");
  const [choices, setChoices] = useState("");
  const [answer, setAnswer] = useState(0);

  async function handleSubmit() {
    await fetch("/api/question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        choices,
        answer,
      }),
    });

    setText("");
    setChoices("");
    setAnswer(0);
    alert("追加したよ");
  }

  return (
    <main className="max-w-xl mx-auto mt-10 flex flex-col gap-4">
      <h1 className="text-xl font-bold">問題追加</h1>

      <input
        className="border p-2"
        placeholder="問題文"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        className="border p-2"
        placeholder="選択肢（東京,大阪,京都,福岡）"
        value={choices}
        onChange={(e) => setChoices(e.target.value)}
      />

      <input
        className="border p-2"
        type="number"
        placeholder="正解番号（0〜3）"
        value={answer}
        onChange={(e) => setAnswer(Number(e.target.value))}
      />

      <button
        className="border p-2 bg-black text-white"
        onClick={handleSubmit}
      >
        追加
      </button>
    </main>
  );
}
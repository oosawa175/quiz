"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function AddQuestion() {
  const { id } = useParams();

  const [text, setText] = useState("");
  const [choices, setChoices] = useState("");
  const [answer, setAnswer] = useState(0);

  async function handleSubmit() {
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
  }

  return (
    <div>
      <h1>問題追加</h1>

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

      <button onClick={handleSubmit}>
        追加
      </button>
    </div>
  );
}
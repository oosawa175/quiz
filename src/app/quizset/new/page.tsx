"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SubmitPage() {
  const[title,setTitle] = useState("");
  const router = useRouter();

  async function handleCreate() {
    const res = await fetch("/api/quizset",{
      method:"post",
      headers:{"content-type":"application/json"},
      body:JSON.stringify({title}),
  });

  const data = await res.json();
  router.push(`/quizset/${data.id}/add`);
  }
  return (
    <div>
      <h1>クイズセット作成</h1>
      <input 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder="クイズセットのタイトル"
        />
      <button onClick={handleCreate}>作成</button>
    </div>
  )
}
 
"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";


export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex gap-4 p-4 border-b">
      <Link href="/">ホーム</Link>
      <Link href="/quiz">クイズ</Link>
      <Link href="/submit">問題追加</Link>
      {session ? (
        <div>
            <span>{session.user?.name}</span>
            <button onClick={() => signOut()}>ログアウト</button>
        </div>
      ) :(
        <button onClick={() => signIn("google")}>ログイン</button>
      )}
    </nav>
  );
}
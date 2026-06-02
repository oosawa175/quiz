import Link from "next/link";

export default function Home() {
    return(
        <main className="max-w-xl mx-auto mt-20 text-center">
            <h1 className="text-3xl font-bold mb-10">
                quiz app
            </h1>
            <div className="flex flex-col gap-4">
                <Link href="/quiz"
                    className="border p-4 rounded bg-white hover:bg-gray-100">
                    Start Quiz
                </Link>
                
                <Link href="/quizset/new"
                    className="border p-4 rounded bg-white hover:bg-gray-100">
                    Submit Question
                </Link>
                <Link href="/quizset"
                    className="border p-4 rounded bg-white hover:bg-gray-100">
                    View Quiz Sets
                </Link>
            </div>
        </main>
    )
}
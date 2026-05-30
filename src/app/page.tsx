import { prisma } from "@/lib/prisma";
import QuizClient from "./QuizClient";

export default async function Home() {
  const questions = await prisma.question.findMany();

  return <QuizClient questions={questions} />;
}



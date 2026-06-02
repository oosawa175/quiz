export const runtime = "nodejs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const question = await prisma.question.create({
    data: {
      text: body.text,
      choices: body.choices,
      answer: body.answer,
      quizSetId: body.quizSetId,
    },
  });

  return Response.json(question);
}
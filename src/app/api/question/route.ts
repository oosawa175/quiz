export const runtime = "nodejs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const { text, choices, answer } = body;

  const question = await prisma.question.create({
    data: {
      text,
      choices,
      answer,
    },
  });

  return Response.json(question);
}
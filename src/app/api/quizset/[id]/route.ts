import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const quizset = await prisma.quizSet.findUnique({
    where: { id },
    include: { questions: true },
  });

  return Response.json(quizset);
}
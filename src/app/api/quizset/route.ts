export const runtime = "nodejs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();

  const quizSet = await prisma.quizSet.create({
    data: {
      title: body.title,
      userId: "temp-user", // 後でNextAuth
    },
  });

  return Response.json(quizSet);
}
export async function GET() {
  const quizsets = await prisma.quizSet.findMany();
  return Response.json(quizsets);
}
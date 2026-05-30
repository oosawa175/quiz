import { prisma } from "@/lib/prisma";

(async () => {
  const question = await prisma.question.create({
    data: {
      text: "日本の首都は？",
      choices: "東京,大阪,京都,福岡",
      answer: 0,
    },
  });

  console.log("Inserted question:", question);
})();
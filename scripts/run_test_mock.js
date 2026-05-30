const prisma = {
  question: {
    create: async ({ data }) => {
      console.log('Mock prisma.question.create called with:');
      console.log(JSON.stringify(data, null, 2));
      return { id: 1, ...data };
    },
  },
};

(async () => {
  await prisma.question.create({
    data: {
      text: '日本の首都は？',
      choices: '東京,大阪,京都,福岡',
      answer: 0,
    },
  });
})();

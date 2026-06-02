"use client";
import { useState } from "react";
import QuestionCard from "@/components/QuestionCard";
import ChoiceButton from "@/components/ChoiceButton";
import ResultScreen from "@/components/ResultScreen";
type Question = {
  text: string;
  choices: string;
  answer: number;
}
export default function QuizClient({ 
  questions,
 }:{
  questions: Question[];
}) {
  
  const [currentQuestionIndex, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selected, setSelected] = useState(-1);

  const currentQuestion = questions[currentQuestionIndex];
  const choices = currentQuestion?.choices.split(",").map((choice) => choice.trim()) ?? [];

  function hundleAnswer(index:number){
    setSelected(index);
    setIsAnswered(true);
    if (index === currentQuestion.answer){
      setResult("正解！");
      setScore(prev => prev + 1);
    }else{
      setResult("不正解！");
    }
  }
  function nextQuestion(){
    setCurrentQuestion(currentQuestionIndex + 1);
    setResult("");
    setIsAnswered(false);
    setSelected(-1);
  }
  if (!currentQuestion){
    return(
      <ResultScreen
        score={score}
        total={questions.length}
      />
    )
  }
  return(
    <main className="max-w-xl mx-auto mt-10">
      <QuestionCard
        questionNumber={currentQuestionIndex+1}
        text={currentQuestion.text}
      />
      <div className="mt-6 flex flex-col gap-3">
        {choices.map((choice, index) => (
          <ChoiceButton
            text={choice}
            key={index}
            disabled={isAnswered}
            onClick={() => {
              hundleAnswer(index);
            }}
            className= {isAnswered && index === currentQuestion.answer 
              ? "bg-green-500 text-white" 
              : isAnswered && selected === index 
              ? "bg-red-500 text-white" 
              : "bg-white"}
          />
          ))}
      </div>
      <p>
        {result}
      </p>
      <button
        className="mt-6 border p-3 rounded"
        disabled={!isAnswered}
        onClick={nextQuestion}
      >
        次の問題へ
      </button>

    </main>
  )
}
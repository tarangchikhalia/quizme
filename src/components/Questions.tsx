import { QuestionCard } from './QuestionCard'
import { Progress } from './ui/progress'
import questionsData from '../questions.json'
import { useState } from 'react'

interface Question {
  question: string
  options: string[]
  correct: number
}

export function Questions() {
  const questions: Question[] = questionsData
  const [answeredCount, setAnsweredCount] = useState(0)

  const handleAnswer = () => {
    setAnsweredCount(prev => prev + 1)
  }

  const progressPercentage = (answeredCount / questions.length) * 100

  return (
    <>
      <div className="container mx-auto px-4 py-8 pb-24">
        <div className="max-w-3xl mx-auto space-y-6">
          {questions.map((q, index) => (
            <QuestionCard
              key={index}
              question={q.question}
              options={q.options}
              correctAnswer={q.correct}
              onAnswer={handleAnswer}
            />
          ))}
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary-background border-t-4 border-border p-4 shadow-shadow">
        <div className="container mx-auto max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="font-heading text-sm whitespace-nowrap">
              {answeredCount} / {questions.length}
            </span>
            <Progress value={progressPercentage} className="flex-1" />
          </div>
        </div>
      </div>
    </>
  )
}

import { QuestionCard } from './QuestionCard'
import questionsData from '../questions.json'

interface Question {
  question: string
  options: string[]
  correct: number
}

export function Questions() {
  const questions: Question[] = questionsData

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto space-y-6">
        {questions.map((q, index) => (
          <QuestionCard
            key={index}
            question={q.question}
            options={q.options}
            correctAnswer={q.correct}
          />
        ))}
      </div>
    </div>
  )
}

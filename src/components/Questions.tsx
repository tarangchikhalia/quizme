import { QuestionCard } from './QuestionCard'
import { ScoreCard } from './ScoreCard'
import { QuestionsFooter } from './QuestionsFooter'
import questionsData from '../questions.json'
import { useState } from 'react'
import type { Question } from '../types/Questions'

export function Questions() {
  const questions: Question[] = questionsData
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(questions.length).fill(null)
  )
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const passingScore = 8

  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[questionIndex] = optionIndex
    setSelectedAnswers(newAnswers)
  }

  const handleSubmitAll = () => {
    if (!submitted) {
      setSubmitted(true)
      let correctCount = 0
      selectedAnswers.forEach((answer, index) => {
        if (answer === questions[index].correct) {
          correctCount++
        }
      })
      setScore(correctCount)
    }
  }

  const answeredCount = selectedAnswers.filter(answer => answer !== null).length
  const progressPercentage = (answeredCount / questions.length) * 100

  return (
    <>
      {questions.length > 0 && (
        <ScoreCard score={score} totalQuestions={questions.length} passingScore={passingScore} />
      )}
      
      <div className="container mx-auto px-4 py-8 pb-24">
        <div className="max-w-3xl mx-auto space-y-6">
          {questions.map((q, index) => (
            <QuestionCard
              key={index}
              question={q.question}
              options={q.options}
              correctAnswer={q.correct}
              selectedOption={selectedAnswers[index]}
              onSelectOption={(optionIndex) => handleSelectOption(index, optionIndex)}
              submitted={submitted}
            />
          ))}
        </div>
      </div>
      
      {questions.length > 0 && (
        <QuestionsFooter
          answeredCount={answeredCount}
          totalQuestions={questions.length}
          progressPercentage={progressPercentage}
          onSubmitAll={handleSubmitAll}
          submitted={submitted}
        />
      )}
    </>
  )
}

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useState } from 'react'

interface QuestionCardProps {
  question: string
  options: string[]
  correctAnswer: number
}

export function QuestionCard({ question, options, correctAnswer }: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setSubmitted(true)
    }
  }

  const getCardColor = () => {
    if (!submitted) return 'bg-secondary-background'
    return selectedOption === correctAnswer ? 'bg-green-400' : 'bg-red-400'
  }

  return (
    <Card className={`${getCardColor()} transition-colors border-4`}>
      <CardHeader>
        <CardTitle className="text-xl">{question}</CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col gap-3">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => !submitted && setSelectedOption(index)}
              disabled={submitted}
              className={`flex items-center gap-3 cursor-pointer p-3 rounded-base border-2 border-border hover:translate-x-1 hover:translate-y-1 transition-transform ${
                selectedOption === index ? 'bg-main text-main-foreground' : 'bg-secondary-background'
              }`}
            >
              <span className="text-base font-base">{option}</span>
            </button>
          ))}
        </div>
      </CardContent>

      <CardFooter className="justify-end">
        <Button 
          onClick={handleSubmit}
          disabled={selectedOption === null || submitted}
          className="min-w-32"
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}

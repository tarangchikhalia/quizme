import { Progress } from './ui/progress'
import { Button } from './ui/button'

interface QuestionsFooterProps {
  answeredCount: number
  totalQuestions: number
  progressPercentage: number
  onSubmitAll: () => void
  submitted: boolean
}

export function QuestionsFooter({ 
  answeredCount, 
  totalQuestions, 
  progressPercentage, 
  onSubmitAll, 
  submitted 
}: QuestionsFooterProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary-background border-t-4 border-border p-4 shadow-shadow">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center gap-4">
          <span className="font-heading text-sm whitespace-nowrap">
            {answeredCount} / {totalQuestions}
          </span>
          <Progress value={progressPercentage} className="flex-1" />
          <Button 
            onClick={onSubmitAll}
            disabled={answeredCount === 0 || submitted}
            className="min-w-32"
          >
            Submit All
          </Button>
        </div>
      </div>
    </div>
  )
}

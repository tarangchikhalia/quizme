import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ScoreCardProps {
  score: number
  totalQuestions: number
  passingScore: number
}

export function ScoreCard({ score, totalQuestions, passingScore }: ScoreCardProps) {
  const isPassing = score >= passingScore
  const scoreColor = isPassing ? 'bg-green-400' : 'bg-secondary-background'

  return (
    <div className="fixed left-4 top-24 z-40 hidden lg:block">
      <Card className={`${scoreColor} transition-colors border-4 w-48`}>
        <CardHeader>
          <CardTitle className="text-lg text-center">Score</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-5xl font-heading">{score}</div>
            <div className="text-sm font-base text-foreground/70">
              out of {totalQuestions}
            </div>
          </div>
          
          <div className="border-t-2 border-border pt-4">
            <div className="text-sm font-base text-center">
              <div className="font-heading">Passing Score</div>
              <div className="text-lg font-heading mt-1">{passingScore}</div>
            </div>
          </div>
          
          {score >= passingScore && (
            <div className="text-center font-heading text-sm">
              ✓ Passed!
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

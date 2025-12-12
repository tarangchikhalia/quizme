interface SelectorProps {
  onSelect: (difficulty: string) => void
  selectedDifficulty: string
}

export function Selector({ onSelect, selectedDifficulty }: SelectorProps) {
  const difficulties = ['Beginner', 'Intermediate', 'Advanced']

  const getButtonColor = (difficulty: string) => {
    if (selectedDifficulty === difficulty) {
      if (difficulty === 'Intermediate') return 'bg-orange-400 text-main-foreground'
      if (difficulty === 'Advanced') return 'bg-red-500 text-main-foreground'
      return 'bg-main text-main-foreground'
    }
    return 'bg-secondary-background text-foreground'
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex gap-4">
        {difficulties.map((difficulty) => (
          <button
            key={difficulty}
            onClick={() => onSelect(difficulty)}
            className={`flex-1 h-12 px-6 rounded-base border-4 border-border font-heading text-lg transition-all ${getButtonColor(difficulty)} ${
              selectedDifficulty === difficulty
                ? 'shadow-shadow translate-x-boxShadowX translate-y-boxShadowY'
                : 'shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none'
            }`}
          >
            {difficulty}
          </button>
        ))}
      </div>
    </div>
  )
}

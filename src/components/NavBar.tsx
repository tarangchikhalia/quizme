export function NavBar() {
  return (
    <nav className="w-full border-b-4 border-border bg-secondary-background shadow-shadow mb-4">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <img 
            src="/quizme-logo.png" 
            alt="QuizMe"
            className="h-12 w-12"
          />
          <span className="ml-2 text-xl">QuizMe</span>
        </div>
      </div>
    </nav>
  );
}

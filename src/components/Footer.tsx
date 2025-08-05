export function Footer() {
  return (
    <footer className="py-6 mt-12 border-t">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}
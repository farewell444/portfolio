export default function HomePage() {
  return (
    <div className="text-center flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
        This is a showcase of my work, thoughts, and journey in software development. Explore my blog and projects.
      </p>
    </div>
  );
}
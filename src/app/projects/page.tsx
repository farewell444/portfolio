import { client } from '@/lib/sanity.client'
import { PROJECTS_QUERY } from '@/lib/queries'
import { ProjectCard } from '@/components/ProjectCard'
import type { Metadata } from 'next'
import { Project } from '@/lib/types' // <-- ИМПОРТ

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of my work and projects.',
}

export const revalidate = 30;

export default async function ProjectsPage() {
  const projects = await client.fetch<Project[]>(PROJECTS_QUERY) // <-- ТИП

  return (
    <div className="px-4">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      {projects && projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      ) : (
        <p>No projects found yet. Stay tuned!</p>
      )}
    </div>
  )
}
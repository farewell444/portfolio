import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { urlForImage } from '@/sanity/lib/image'
import { ExternalLink } from 'lucide-react'
import { Project } from '@/lib/types' // <-- ИМПОРТ

// Удаляем старый interface

export function ProjectCard({ project }: { project: Project }) { // <-- ИСПОЛЬЗУЕМ ТИП
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          {project.coverImage ? (
            <Image
              src={urlForImage(project.coverImage).width(500).height(281).url()}
              alt={project.title}
              fill
              className="object-cover rounded-t-lg"
            />
          ) : (
            <div className="w-full h-full bg-muted rounded-t-lg" />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow">
        <CardTitle className="mb-2 text-lg">{project.title}</CardTitle>
        <p className="text-muted-foreground leading-relaxed flex-grow">{project.excerpt}</p>
        <div className="flex gap-2 mt-6">
          {project.projectUrl && (
            <Button asChild>
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                View Project <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
          {project.repositoryUrl && (
            <Button variant="secondary" asChild>
              <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
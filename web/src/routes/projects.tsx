import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <div className="flex flex-col items-start max-w-3xl w-full break-words p-4">
      projects
    </div>
  )
}
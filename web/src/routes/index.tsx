import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex flex-col items-start max-w-3xl w-full break-words p-4">
      index
    </div>
  )
}
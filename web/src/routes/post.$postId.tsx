import { createFileRoute } from '@tanstack/react-router'
import DOMPurify from 'dompurify'
import { BACKEND_URI } from '../config'

export const Route = createFileRoute('/post/$postId')({
  component: Post,
  loader: ({ params: { postId } }) => postLoader(postId),
})

async function postLoader(postId: string) {
  console.log(postId)
  const res = await fetch(`${BACKEND_URI}/api/blog/${postId}`)
  if (!res.ok) throw new Error('failed to fetch')

  return await res.text()
}

function Post() {
  const data = Route.useLoaderData()
  const sanitized = DOMPurify.sanitize(data)

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitized }}
      className="flex flex-col items-start max-w-3xl w-full break-words p-4"
    ></div>
  )
}

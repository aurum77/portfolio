import { createFileRoute } from '@tanstack/react-router'
import { BACKEND_URI } from '../config'

export const Route = createFileRoute('/post')({
  component: Post,
})

export const postLoader = async () => {
  const post = await fetch(`${BACKEND_URI}/api/blog/{params.postId}`).then(
    (response) => response,
  )

  return post
}

function Post() {
  // const data = useLoaderData()
  // const sanitized = DOMPurify.sanitize(data);

  return (
    <div
    // dangerouslySetInnerHTML={{ __html: sanitized }}
    // className="flex flex-col items-start max-w-3xl w-full break-words p-4"
    >
      post
    </div>
  )
}
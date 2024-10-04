import DOMPurify from "dompurify"
import { LoaderFunction, useLoaderData } from "react-router-dom"

export const postLoader: LoaderFunction = async ({ params }) => {
  const data = fetch(`http://127.0.0.1:7567/api/blog/${params}`)
    .then(response => response)
  return data
}

const Post = () => {
  const data = useLoaderData() as string;
  const sanitized = DOMPurify.sanitize(data)

  return (
    <div className="flex flex-col items-start max-w-3xl w-full break-words p-4">
      data from the backend {sanitized}
    </div>
  )
}

export default Post
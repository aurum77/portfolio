import { Link } from "react-router-dom"

const Blog = () => {
  return (
    <ul className="flex flex-col items-start max-w-3xl w-full break-words p-4 gap-2">
      <li><Link to="/blog/1">25/09 - we do a little blogging</Link></li>
      <li><Link to="/blog/2">25/09 - we do a little blogging</Link></li>
      <li><Link to="/blog/3">25/09 - we do a little blogging</Link></li>
      <li><Link to="/blog/4">25/09 - we do a little blogging</Link></li>
      <li><Link to="/blog/5">25/09 - we do a little blogging</Link></li>
    </ul>
  )
}

export default Blog

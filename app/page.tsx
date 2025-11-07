import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div>
      <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>最新の記事</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug} className="post-item">
            <div className="post-date">{post.date}</div>
            <h2>
              <Link href={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <p className="post-excerpt">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

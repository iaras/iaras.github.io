import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import Calendar from '@/components/Calendar'
import RecentPosts from '@/components/RecentPosts'

export default function Home() {
  const posts = getAllPosts()

  return (
    <div className="home-layout">
      <div className="main-content">
        <h1>最新の記事</h1>
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

      <aside className="sidebar">
        <div className="sidebar-section">
          <Calendar posts={posts} />
        </div>
        <div className="sidebar-section">
          <RecentPosts posts={posts} limit={5} />
        </div>
      </aside>
    </div>
  )
}

import Link from 'next/link'
import { PostMeta } from '@/lib/posts'

interface RecentPostsProps {
  posts: PostMeta[]
  limit?: number
}

export default function RecentPosts({ posts, limit = 5 }: RecentPostsProps) {
  // 最新の記事を制限数だけ取得（既にソート済み）
  const recentPosts = posts.slice(0, limit)

  return (
    <div className="recent-posts">
      <h2 className="recent-posts-title">最近の記事</h2>
      <ul className="recent-posts-list">
        {recentPosts.map((post) => (
          <li key={post.slug} className="recent-post-item">
            <Link href={`/posts/${post.slug}`} className="recent-post-link">
              <div className="recent-post-content">
                <h3 className="recent-post-title">{post.title}</h3>
                <time className="recent-post-date">{post.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

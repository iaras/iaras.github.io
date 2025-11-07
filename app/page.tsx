import Link from 'next/link'

interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
}

// サンプルのブログ投稿データ
const posts: Post[] = [
  {
    slug: 'welcome-to-my-blog',
    title: 'ブログを始めました',
    date: '2025-01-15',
    excerpt: 'Next.jsを使って静的ブログサイトを作成しました。GitHub Pagesでホスティングしています。'
  },
  {
    slug: 'about-nextjs',
    title: 'Next.jsについて',
    date: '2025-01-10',
    excerpt: 'Next.jsは、Reactベースのフルスタックフレームワークです。静的サイト生成にも対応しています。'
  },
  {
    slug: 'github-pages-deploy',
    title: 'GitHub Pagesへのデプロイ',
    date: '2025-01-05',
    excerpt: 'GitHub Pagesを使って静的サイトを無料でホスティングする方法について説明します。'
  }
]

export default function Home() {
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

import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts'

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return <div>記事が見つかりません</div>
  }

  return (
    <div>
      <Link href="/" className="back-link">← 記事一覧に戻る</Link>
      <article className="post-content">
        <header>
          <div className="post-date">{post.date}</div>
          <h1>{post.title}</h1>
        </header>
        <ReactMarkdown
          components={{
            h1: () => null, // Markdown内のH1はタイトルと重複するため表示しない
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  )
}

import Link from 'next/link'

interface Post {
  slug: string
  title: string
  date: string
  content: string
}

// サンプルのブログ投稿データ
const posts: Record<string, Post> = {
  'welcome-to-my-blog': {
    slug: 'welcome-to-my-blog',
    title: 'ブログを始めました',
    date: '2025-01-15',
    content: `
# ブログを始めました

Next.jsを使って静的ブログサイトを作成しました。このサイトはGitHub Pagesでホスティングされています。

## なぜNext.jsを選んだのか

Next.jsを選んだ理由は以下の通りです：

- **静的サイト生成（SSG）に対応** - GitHub Pagesで簡単にホスティングできます
- **Reactベース** - モダンなUIを構築できます
- **TypeScript対応** - 型安全なコードが書けます
- **開発体験が良い** - Hot Reloadなど開発に便利な機能が豊富です

## これからの予定

今後は、以下のような記事を投稿していく予定です：

- プログラミング関連の技術記事
- 学習した内容のまとめ
- 個人的なプロジェクトの紹介

よろしくお願いします！
    `
  },
  'about-nextjs': {
    slug: 'about-nextjs',
    title: 'Next.jsについて',
    date: '2025-01-10',
    content: `
# Next.jsについて

Next.jsは、Vercelが開発しているReactベースのフルスタックフレームワークです。

## 主な特徴

### 1. 複数のレンダリング方法

Next.jsは以下のレンダリング方法をサポートしています：

- **SSG (Static Site Generation)** - ビルド時に静的HTMLを生成
- **SSR (Server-Side Rendering)** - リクエストごとにサーバーでレンダリング
- **ISR (Incremental Static Regeneration)** - 静的ページの部分的な再生成
- **CSR (Client-Side Rendering)** - クライアント側でレンダリング

### 2. ファイルベースルーティング

\`app\`ディレクトリ（または\`pages\`ディレクトリ）の構造がそのままルーティングになります。

### 3. 画像最適化

\`next/image\`コンポーネントを使うと、画像を自動的に最適化してくれます。

## まとめ

Next.jsは、モダンなWebアプリケーションを構築するための強力なツールです。
    `
  },
  'github-pages-deploy': {
    slug: 'github-pages-deploy',
    title: 'GitHub Pagesへのデプロイ',
    date: '2025-01-05',
    content: `
# GitHub Pagesへのデプロイ

GitHub Pagesを使うと、静的サイトを無料でホスティングできます。

## 必要な設定

Next.jsアプリをGitHub Pagesにデプロイするには、以下の設定が必要です：

### 1. next.config.jsの設定

\`\`\`javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
\`\`\`

### 2. GitHub Actionsの設定

\`.github/workflows/deploy.yml\`を作成して、自動デプロイを設定します。

### 3. リポジトリの設定

GitHub Pagesの設定で、ソースを「GitHub Actions」に変更します。

## デプロイの流れ

1. コードをpush
2. GitHub Actionsが自動的にビルド
3. 生成された静的ファイルがGitHub Pagesにデプロイ
4. サイトが公開される

とても簡単です！
    `
  }
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({
    slug,
  }))
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]

  if (!post) {
    return <div>記事が見つかりません</div>
  }

  // シンプルなマークダウン風のコンテンツを表示
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      // 見出し
      if (line.startsWith('# ')) {
        return <h1 key={index}>{line.substring(2)}</h1>
      }
      if (line.startsWith('## ')) {
        return <h2 key={index}>{line.substring(3)}</h2>
      }
      if (line.startsWith('### ')) {
        return <h3 key={index}>{line.substring(4)}</h3>
      }
      // コードブロック
      if (line.startsWith('```')) {
        return null // 簡易実装のため省略
      }
      // リスト
      if (line.startsWith('- ')) {
        return <li key={index}>{line.substring(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/<strong>(.*?)<\/strong>/g, (_, text) => text)}</li>
      }
      // 空行
      if (line.trim() === '') {
        return <br key={index} />
      }
      // 通常のテキスト
      return <p key={index}>{line}</p>
    })
  }

  return (
    <div>
      <Link href="/" className="back-link">← 記事一覧に戻る</Link>
      <article className="post-content">
        <div className="post-date">{post.date}</div>
        <div>{renderContent(post.content)}</div>
      </article>
    </div>
  )
}

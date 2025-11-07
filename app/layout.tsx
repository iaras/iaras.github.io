import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'iaras Blog',
  description: 'Next.jsで作成した静的ブログサイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <div className="container">
          <header className="header">
            <h1><a href="/">iaras Blog</a></h1>
            <nav>
              <a href="/">Home</a>
              <a href="/about">About</a>
            </nav>
          </header>
          <main className="main">
            {children}
          </main>
          <footer className="footer">
            <p>&copy; 2025 iaras Blog. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}

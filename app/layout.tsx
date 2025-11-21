import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R5WSGCHRJJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R5WSGCHRJJ');
          `}
        </Script>

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

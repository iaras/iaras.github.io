---
title: "GitHub Pagesへのデプロイ"
date: "2025-01-05"
excerpt: "GitHub Pagesを使って静的サイトを無料でホスティングする方法について説明します。"
---

# GitHub Pagesへのデプロイ

GitHub Pagesを使うと、静的サイトを無料でホスティングできます。

## 必要な設定

Next.jsアプリをGitHub Pagesにデプロイするには、以下の設定が必要です：

### 1. next.config.jsの設定

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

### 2. GitHub Actionsの設定

`.github/workflows/deploy.yml`を作成して、自動デプロイを設定します。

### 3. リポジトリの設定

GitHub Pagesの設定で、ソースを「GitHub Actions」に変更します。

## デプロイの流れ

1. コードをpush
2. GitHub Actionsが自動的にビルド
3. 生成された静的ファイルがGitHub Pagesにデプロイ
4. サイトが公開される

とても簡単です！

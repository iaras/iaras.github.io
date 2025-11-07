---
title: "Next.jsについて"
date: "2025-01-10"
excerpt: "Next.jsは、Reactベースのフルスタックフレームワークです。静的サイト生成にも対応しています。"
---

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

`app`ディレクトリ（または`pages`ディレクトリ）の構造がそのままルーティングになります。

### 3. 画像最適化

`next/image`コンポーネントを使うと、画像を自動的に最適化してくれます。

## まとめ

Next.jsは、モダンなWebアプリケーションを構築するための強力なツールです。

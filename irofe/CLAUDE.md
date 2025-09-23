# CLAUDE.md

## ユーザーとの対話
ユーザーとの対話には日本語を使用してください。

## 開発コマンド

```bash
# Turbopackを使用した開発サーバー起動（ビルド速度向上）
npm run dev

# Turbopackによる本番環境向けビルド
npm run build

# 本番環境用サーバーの起動
npm start

# ESLintの実行
npm run lint
```

## プロジェクト構成

これは**Next.js 15.5.3**アプリケーションであり、**App Router**アーキテクチャを採用しています。スタイリングには**Tailwind CSS v4**を使用しています。

### 主要技術スタック
- **Next.js 15.5.3** with App Router
- **React 19.1.0**
- **TypeScript 5**
- **Tailwind CSS v4** with PostCSS統合
- **Turbopack**による高速な開発・ビルド環境

### スタイリングシステム

**Tailwind CSS v4の設定概要:**
- 新構文の`@import "tailwindcss"`を採用
- テーマ設定用のカスタムプロパティを`globals.css`で定義
- カラーとフォントのマッピングに`@theme inline`構成を使用
- `prefers-color-scheme`による自動ダークモード対応
- CSS変数: `--background`, `--foreground`, `--font-geist-sans`, `--font-geist-mono`

**フォントシステム:**
- メインフォント: Geist Sans（`next/font/google`経由で読み込み）
- モノスペースフォント: Geist Mono（`next/font/google`経由で読み込み）
- フォント変数は自動的に注入され、Tailwindのユーティリティクラスにマッピングされます

### 開発時の注意事項

**スタイリング方針:**
- Tailwindのユーティリティクラスのみを使用
- 手動CSSスタイリングは避け、ユーティリティクラスを優先
- カスタムカラーはCSS変数で利用可能: `bg-background`, `text-foreground`
- ダークモードはCSSカスタムプロパティによる自動対応

**TypeScript設定:**
- 厳格モードを有効化
- パスエイリアス: `@/*`は`./src/*`にマッピング
- ESModuleInteropとバンドルモジュールの解決設定

**ESLint設定:**
- `next/core-web-vitals`と`next/typescript`の拡張ルールを採用
- 無視対象ディレクトリ: `node_modules`, `.next`, `out`, `build`, `next-env.d.ts`

**ビルド最適化:**
- Turbopackを有効にすることで開発時と本番ビルド時の速度を向上
- Next.jsの組み込み最適化機能（フォント、画像、コード分割など）を活用

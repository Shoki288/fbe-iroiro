import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle, Info } from "lucide-react"

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* タイトル */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">デザインシステム + shadcn/ui デモ</h1>
          <p className="text-lg text-muted-foreground">Android風のテーマシステム + shadcn/uiコンポーネント</p>
        </header>

        {/* カラーパレット */}
        <section className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">カラーパレット</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-primary text-primary-foreground p-4 rounded">Primary</div>
            <div className="bg-secondary text-secondary-foreground p-4 rounded">Secondary</div>
            <div className="bg-accent text-accent-foreground p-4 rounded">Accent</div>
            <div className="bg-muted text-muted-foreground p-4 rounded">Muted</div>
          </div>
        </section>

        {/* ボタン */}
        <section className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">ボタン</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-2 rounded font-medium transition-colors">
              Primary Button
            </button>
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary-hover px-6 py-2 rounded font-medium transition-colors">
              Secondary Button
            </button>
            <button className="bg-accent text-accent-foreground hover:bg-accent-hover px-6 py-2 rounded font-medium transition-colors">
              Accent Button
            </button>
            <button className="border border-border text-foreground hover:bg-muted px-6 py-2 rounded font-medium transition-colors">
              Outline Button
            </button>
          </div>
        </section>

        {/* カード */}
        <section className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">カード</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-surface border border-border rounded-lg p-4">
              <h3 className="text-lg font-semibold text-primary mb-2">普通のカード</h3>
              <p className="text-surface-foreground">これは通常のカードです。テキストの色は自動的にサーフェスに適応します。</p>
            </div>
            <div className="bg-primary text-primary-foreground rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">プライマリカード</h3>
              <p>重要な情報を強調したい時に使用します。</p>
            </div>
          </div>
        </section>

        {/* ステータス表示 */}
        <section className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">ステータス表示</h2>
          <div className="space-y-4">
            <div className="bg-success text-success-foreground p-4 rounded">
              ✓ 成功: 操作が正常に完了しました
            </div>
            <div className="bg-warning text-warning-foreground p-4 rounded">
              ⚠ 警告: 注意が必要です
            </div>
            <div className="bg-error text-error-foreground p-4 rounded">
              ✗ エラー: 処理に失敗しました
            </div>
          </div>
        </section>

        {/* タイポグラフィ */}
        <section className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">タイポグラフィ</h2>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">見出し1 (text-4xl font-bold)</h1>
            <h2 className="text-3xl font-semibold">見出し2 (text-3xl font-semibold)</h2>
            <h3 className="text-2xl font-medium">見出し3 (text-2xl font-medium)</h3>
            <p className="text-base font-normal">本文テキスト (text-base font-normal)</p>
            <p className="text-sm text-muted-foreground">小さなテキスト (text-sm text-muted-foreground)</p>
            <code className="text-sm font-mono bg-muted text-muted-foreground px-2 py-1 rounded">
              コードテキスト (font-mono)
            </code>
          </div>
        </section>

        {/* 入力フォーム */}
        <section className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">フォーム要素</h2>
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium mb-2">名前</label>
              <input
                type="text"
                className="w-full px-3 py-2 bg-input border border-input-border rounded focus:outline-none focus:border-primary"
                placeholder="お名前を入力してください"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">メッセージ</label>
              <textarea
                className="w-full px-3 py-2 bg-input border border-input-border rounded focus:outline-none focus:border-primary h-24"
                placeholder="メッセージを入力してください"
              />
            </div>
          </div>
        </section>

        {/* TODO(human): shadcn/uiコンポーネントのデモセクション */}

        <Button>button</Button>
        <Card>card</Card>
      </div>
    </div>
  );
}

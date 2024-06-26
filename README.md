# tailwind-practice
tailwindのキャッチアップ用リポジトリ

## メリット
- ユーティリティファースト
	- クラス指定するだけでレイアウトできるので、新規開発がめちゃ早くできる
	- レスポンシブもclassの前に画面サイズを指定するだけで良い
	- チートシートもあるのでclassを探すのも簡単
- カスタマイズ性
	- ユーティリティを活かしつつ、サービスごとにアレンジしやすい
	- 大規模なチームでもスケールしやすい
- パフォーマンス
	- 未使用のCSSを自動で削除し、CSSのバンドルサイズを小さくする(多くのサービスでは10kB未満)

## デメリット
- クラス名でHTMLの可読性が損なわれるかも

### Tailwindの全ユーティリティがまとまっているチートシート
https://nerdcave.com/tailwind-cheat-sheet

### TailwindによるレイアウトTips
- input
  - https://flowbite.com/docs/forms/input-field/

## 参考
- https://zenn.dev/chris_d_k/articles/25d8618ade9c09

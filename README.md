# フロントエンド

https://rdrsjfm4u3.us-east-1.awsapprunner.com

## 実行方法

### サーバー立ち上げ

```shell
# レポジトリclone

git clone https://github.com/sansan-event-fusion/spark-2023-teamP
cd spark-2023-teamP

# 環境設定

npm install
# localhost:3000以外のバックエンドに接続したいとき
#echo "NEXT_PUBLIC_API_ENDPOINT=${your backend}" >> .env

# 実行

npm run dev
```

### サーバーへの接続

```
http://localhost:8080
```

### テスト実行

```shell
npm install -D
npm test
```

## サイト構造

- `/` 募集一覧ページ
  - `/recruitments/:id` 募集詳細ページ
  - `/create` 募集作成ページ
  - `/auth`
    - `/auth/signin` sign-inページ
    - `/auth/signup` sign-upページ

## ログイン管理

一般公開ページ以外のページを表示するためには、sign-inページからサインインする必要があります。

### 一般公開ページ

- `/` 募集一覧ページ
- `/auth/signin` sign-inページ
- `/auth/signup` sign-upページ

### 無効化

`src/app/providers.tsx`の`AuthProvider`に`disabled=true`を設定してください。

```typescript
  <AuthProvider disabled={true}>
    ...
  </AuthProvider>
```

## APIモック

フロントエンド開発用に、バックエンドAPI呼び出しのモック機能を実装しています。

モックを有効にするには、`src/app/providers.tsx`の`APIClientProvider`に`mocked={true}`を設定してください。

```typescript
  <APIClientProvider mocked={true}>
    ...
  </APIClientProvider>
```

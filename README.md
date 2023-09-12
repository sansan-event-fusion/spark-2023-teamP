# フロントエンド

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
  - `/recruitments` 募集作成ページ
  - `/auth`
    - `/auth/signin` sign-inページ
    - `/auth/signup` sign-upページ

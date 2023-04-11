// envファイルはここで読み込む。型定義は"@/src/env.d.ts"で行う。
require("dotenv").config()

export default {
  // Express
  port: parseInt(process.env.EXPRESS_PORT ?? "", 10),

  // DB
  db: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? "", 10),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  }
}
// envファイルの型定義用ファイル(envファイルを直接読み込むのは":root/src/config/index.ts"のみ)

declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        // Express
        readonly EXPRESS_PORT: string,

        // DB
        readonly DB_HOST: string,
        readonly DB_PORT: string,
        readonly DB_USER: string,
        readonly DB_PASSWORD: string,
        readonly DB_DATABASE: string,
      }
    }
  }
}
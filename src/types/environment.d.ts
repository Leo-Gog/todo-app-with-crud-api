declare global {
  namespace NodeJS {
    interface ProcessEnv {
        HOST: string
        NODE_ENV: 'Development' | 'Production'
    }
  }
}
export {};
// TypeScript 类型提示都为 string： https://github.com/vitejs/vite/issues/6930
interface ImportMetaEnv {
  /** 应用端口 */
  VITE_APP_PORT: number;
  /** API 基础路径(代理前缀) */
  VITE_APP_BASE_API: string;
  /** API 地址 */
  VITE_APP_API_URL: string;
  /** 是否开启 Mock 服务 */
  VITE_MOCK_DEV_SERVER: boolean;
}
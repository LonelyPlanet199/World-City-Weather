import { defineConfig } from 'vite';

export default defineConfig({
  base: './',  // 确保相对路径
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify('http://127.0.0.1:3000/weather')
  }
});
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   port: 3000,
  //   proxy: {
  //     '/data': {
  //       target: 'http://localhost:8000',
  //       changeOrigin: true
  //     }
  //   }
  // }
})

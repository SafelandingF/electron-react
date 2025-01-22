import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 
 
  //相关的配置
  base:'./',
  build:{
    outDir:'dist-react'
  },
  server:{
    port:1123,
    strictPort: true
  }
})

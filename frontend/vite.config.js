import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_NODE_ENV':JSON.stringify(process.env.VITE_NODE_ENV),
    'process.env.VITE_REACT_APP_API_DEV_URL':JSON.stringify(process.env.VITE_REACT_APP_API_DEV_URL),
    'process.env.VITE_REACT_APP_API_PROD_URL':JSON.stringify(process.env.VITE_REACT_APP_API_PROD_URL)
  },
  server: {
    port: 3000,
    host: true
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'userCredentialName': JSON.stringify('userCredentials'),
  },
})
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    build: {
      outDir: 'dist', // Путь каталога для скомпилированных файлов
      sourcemap: true, // Генерировать карты исходного кода
      lib: {
        entry: 'src/main.ts', // Входной файл вашего приложения
        formats: ['es'] // Формат вывода (ES Module)
      },
      rollupOptions: {
        // Дополнительные настройки Rollup, если необходимо
      }
    }
  });
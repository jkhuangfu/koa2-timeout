import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts', // 入口文件路径
  output: [ // 输出配置
    {
      file: 'dist/index.js', // CommonJS 格式的输出文件
      format: 'cjs', // CommonJS 格式
      sourcemap: false // 生成 sourcemap
    },
    {
      file: 'dist/index.mjs', // ES Module (ESM) 格式的输出文件
      format: 'esm', // ES Module (ESM) 格式
      sourcemap: false // 生成 sourcemap
    }
  ],
  plugins: [
    typescript() // 使用 Rollup 插件处理 TypeScript
  ]
};
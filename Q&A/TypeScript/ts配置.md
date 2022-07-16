### Q
> 在vite.config.ts中配置别名，报错：找不到名称“__dirname”
```js
resolve: {
    // 配置别名
    alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
    },
},
```
### A
安装 `pnpm install @types/node -D`


### Q
> 报错：[vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. Install @vitejs/plugin-vue to handle .vue files.

### A
要在vite.config.ts中配置plugins
```js
import Vue from '@vitejs/plugin-vue'
plugins: [ 
    Vue({
        include: [/\.vue$/, /\.md$/],
    })
],
```
### Q
> ts报错：找不到模块“xxx”或其相应的类型声明。

### A
要在tsconfig.json中配置baseUrl和path，如果没有配置baseUrl则会提示：
Path mapping to be computed relative to baseUrl option.未设置 "baseUrl" 时，不允许使用非相对路径。是否忘记了前导 "./"?
```js
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "@/*": ["src/*"]
        }
    }
}
```


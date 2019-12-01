# boiler201912

nothing but testing | 无他，唯试用尔

## package notes:

* mini-css-extract-plugin # 确保css在页面加载完成之后立即生效，避免页面抖动
* node-sass sass fibers # 都是sass-loader的依赖, fibers用于多线程（纤程）便宜sass
* html-webpack-plugin # 用于自定义构建html template

## ruler order:

webpack中的rule顺序是按需构建的
比如scss文件：

```
{
    test: /\.s?css$/,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                sourceMap: true
            }
        },
        {
            loader: "sass-loader",
            options: {
                sourceMap: true
            }
        }
    ]
}
```
这样的顺序目的是 File IO | sass-loader | css-loader | extract-plugin.loader
可以描述为 extract-plugin.loader(css-loader(sass-loader(file.scss)))

## babel-preset-env & babel/polyfill

* https://babeljs.io/docs/en/babel-preset-env
* https://babeljs.io/docs/en/babel-polyfill
这里配置的preset-env是 ```{ "useBuiltIns": "usage" }```
所以polyfill会按需自动引用

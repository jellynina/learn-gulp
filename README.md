# learn-gulp

ikea learn how to use gulp as task runner

[teacher's repo](https://github.com/hdngr/treehouse-gulp-basics)

## 安裝gulp

在專案裡安裝

```
$npm install gulp --save-dev
```

devlpoment onlu dependency.

在電腦環境安裝

```
$npm install -g gulp
```

參考[Global vs. local installation with node](https://nodejs.org/en/blog/npm/npm-1-0-global-vs-local-installation/).

## 新增`gulpfile.js`

```
$sublime gulpfile.js
```

延伸課程：
[workshop on JavaScript’s “use strict”; statement](https://teamtreehouse.com/library/the-javascript-use-strict-statement).


### 設定default task

```js
gulp.task("default", ["hello"], function (){
  console.log("This is the default task.");
});
```

這樣一來`$gulp`便會直接跑`default`,在跑`default`之前，會先把陣列裡的`hello`跑過一遍。


# Work with javascript

## concat

當有一大坨js files的時候怎麼辦捏？全部放到`app.js`當中。

```js
gulp.task("concatScripts", function () {
  gulp.src([
    'js/jquery.js',
    'js/sticky/jquery.sticky.js',
    'js/main.js'])
  .pipe(concat("app.js")) // 把上面的js file 串近 app.js
  .pipe(gulp.dest("js")) //app.js 放到某個位置(js資料夾裡面)
});
```

## minified JS code

使用到外掛[The Gulp Uglify Module](https://github.com/terinjokes/gulp-uglify)來壓縮，[The Gulp Rename Module](https://github.com/hparra/gulp-rename)來重新命名檔案。


# SASS!

## Add Source Maps to your SaSS


> 問題：sass config 要寫在哪裡？

[The Gulp Sourcemaps Module]()

Treehouse blog on using sourcemaps: http://blog.teamtreehouse.com/introduction-source-maps




# learn-gulp

ikea learn how to use gulp as task runner

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



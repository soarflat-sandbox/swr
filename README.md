# swr

[SWR](https://swr.vercel.app/)の学習用リポジトリ。

## SWR とは

データフェッチのための React Hooks ライブラリ。

SWR は`stale-while-revalidate`のこと。

### stale-while-revalidate とは

- [Stale-While-Revalidate ヘッダによるブラウザキャッシュの非同期更新](https://blog.jxck.io/entries/2016-04-16/stale-while-revalidate.html)
- [UX パターン: Stale-While-Revalidate](https://www.infoq.com/jp/news/2020/12/ux-stale-while-revalidate/)
- [Vue に stale-while-revalidate がやってくる](https://tech.hey.jp/entry/2020/09/29/115822#:~:text=%E5%8F%A4%E3%81%84%E3%82%AD%E3%83%A3%E3%83%83%E3%82%B7%E3%83%A5%E3%81%A8%E3%81%84%E3%81%86%E3%81%AE%E3%81%AF,%E3%81%AE%E3%81%93%E3%81%A8%E3%82%92%E6%8C%87%E3%81%97%E3%81%BE%E3%81%99%E3%80%82)
- [リモートのデータ取得のためのフックライブラリの SWR を使ってみる](https://engineering.mercari.com/blog/entry/2019-12-17-130000/)
- [Keeping things fresh with stale-while-revalidate](https://web.dev/stale-while-revalidate/)

ざっくり説明すると、まずキャッシュからデータを返し（stale）、次にフェッチリクエストを送り（revalidate）、最後に最新のデータを持ってくるという戦略。

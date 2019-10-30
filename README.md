# puppeteer-v2
Puppteer の [v2](https://github.com/GoogleChrome/puppeteer/releases/tag/v2.0.0) で新しく追加されたAPIを試してみました。

## DARK/LIGHTモードを変更できるようになった

## timezoneを変更できるようになった
ソースコードはこちら。  

timezoneを変更するには、 [`page.emulateTimezone(timezoneId)`](https://github.com/GoogleChrome/puppeteer/blob/v2.0.0/docs/api.md#pageemulatetimezonetimezoneid) を使います。  
`timezoneId` は、 [こちら](https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1) で確認できます。

## 部分的なscreenshot(クリップ撮影)ができるようになった

## 使い方
```
$ git clone https://github.com/yagisuke/puppeteer-v2.git
$ cd puppeteer-v2
$ npm i
$ node src/[finename]
```

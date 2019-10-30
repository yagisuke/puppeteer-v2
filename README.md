# puppeteer-v2
Puppteer の [v2](https://github.com/GoogleChrome/puppeteer/releases/tag/v2.0.0) で変更されたAPIを3つ紹介します。  
1と2に関してはサンプルコードも用意しました。

## 1. DARK/LIGHTモードを変更できるようになった
DARK/LIGHTモードに変更できる、 [page.emulatemediafeaturesfeatures(features)](https://github.com/GoogleChrome/puppeteer/blob/v2.0.0/docs/api.md#pageemulatemediafeaturesfeatures) が追加されました。

```
// DARKモードに変更
await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }])
// DARKモードになったか確認
const isDarkMode = await page.evaluate(() => matchMedia('(prefers-color-scheme: dark)').matches))
```
* Lightモードの場合は、 `dark` を `light` に指定してください。

サンプルコード: [src/emulate-media-features.js](./src/emulate-media-features.js)  

## 2. timezoneを変更できるようになった
timezoneが変更できる、 [page.emulateTimezone(timezoneId)](https://github.com/GoogleChrome/puppeteer/blob/v2.0.0/docs/api.md#pageemulatetimezonetimezoneid) が追加されました。  

`timezoneId` は、 [こちら](https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1) で確認できます。

```
// timezoneを変更
await page.emulateTimezone('Asia/Tokyo')
```

サンプルコード: [src/emulate-timezone.js](./src/emulate-timezone.js)   

## 3. CSSメディアタイプを変更できるAPIが新しくなった
v2.0以前にも `page.emulateMedia(type)` というAPIでCSSメディアタイプを変更できました。
今回のアップデートでこのAPIが廃止されて、新しく [page.emulatemediatype](https://github.com/GoogleChrome/puppeteer/blob/v2.0.0/docs/api.md#pageemulatemediatypetype) というAPIに生まれかわりました。  

メディアタイプに更新はなく、screen/printのみとなります。

```
// printに変更
await page.emulateMediaType('print')
// printになったか確認
await page.evaluate(() => matchMedia('print').matches))
```

サンプルコード: 割愛

## 使い方
```
$ git clone https://github.com/yagisuke/puppeteer-v2.git
$ cd puppeteer-v2
$ npm i
$ node src/[finename]
```

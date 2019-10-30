const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('https://www.google.com/')

  page.evaluate(() => {
    globalThis.date = new Date('2020-07-24')
  })
  console.log(await page.evaluate(() => date.toString()))
  // => Fri Jul 24 2020 09:00:00 GMT+0900 (Japan Standard Time)

  await page.emulateTimezone('America/New_York')
  console.log(`ニューヨーク: ${await page.evaluate(() => date.toString())}`)
  // => ニューヨーク: Thu Jul 23 2020 20:00:00 GMT-0400 (Eastern Daylight Time)

  await page.emulateTimezone('Europe/Paris')
  console.log(`パリ: ${await page.evaluate(() => date.toString())}`)
  // => パリ: Fri Jul 24 2020 02:00:00 GMT+0200 (Central European Summer Time)

  await page.emulateTimezone('Asia/Tokyo')
  console.log(`東京: ${await page.evaluate(() => date.toString())}`)
  // => 東京: Fri Jul 24 2020 09:00:00 GMT+0900 (Japan Standard Time)

  await browser.close()
})()

const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 })
  const page = await browser.newPage()

  await page.goto('https://frontend.dena.com/')
  await page.setViewport({ width: 1200, height: 800 })

  console.log('start => DARK MODE!!')
  await page.emulateMediaFeatures([
    { name: 'prefers-color-scheme', value: 'dark' }
  ])
  await page.screenshot({
    path: `output/logo-dark.png`,
    clip: { x: 25, y: 20, width: 170, height: 40 }
  })
  console.log('end => DARK MODE!!')

  console.log('start => LIGHT MODE!!')
  await page.emulateMediaFeatures([
    { name: 'prefers-color-scheme', value: 'light' }
  ])
  await page.screenshot({
    path: `output/logo-light.png`,
    clip: { x: 25, y: 20, width: 170, height: 40 }
  })
  console.log('end => LIGHT MODE!!')

  await browser.close()
})()

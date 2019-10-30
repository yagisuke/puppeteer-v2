const puppeteer = require('puppeteer')

const autoScroll = async () => {
  await new Promise(resolve => {
    let totalHeight = 0
    let distance = 100
    let timer = setInterval(() => {
      let scrollHeight = document.body.scrollHeight
      window.scrollBy(0, distance)
      totalHeight += distance
      if (totalHeight >= scrollHeight) {
        clearInterval(timer)
        resolve()
      }
    }, 100)
  })
}

;(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 })
  const page = await browser.newPage()

  await page.goto('https://frontend.dena.com/')
  await page.setViewport({ width: 1200, height: 800 })
  await page.evaluate(autoScroll)

  console.log('start => DARK MODE!!')
  await page.emulateMediaFeatures([
    { name: 'prefers-color-scheme', value: 'dark' }
  ])
  const isDarkMode = await page.evaluate(
    () => matchMedia('(prefers-color-scheme: dark)').matches
  )
  console.log(`DARK MODE: ${isDarkMode}`)
  await page.screenshot({
    path: `output/scheme-dark.png`,
    fullPage: true
  })
  console.log('end => DARK MODE!!')

  console.log('start => LIGHT MODE!!')
  await page.emulateMediaFeatures([
    { name: 'prefers-color-scheme', value: 'light' }
  ])
  const isLightMode = await page.evaluate(
    () => matchMedia('(prefers-color-scheme: light)').matches
  )
  console.log(`LIGHT MODE: ${isLightMode}`)
  await page.screenshot({
    path: `output/scheme-light.png`,
    fullPage: true
  })
  console.log('end => LIGHT MODE!!')

  await browser.close()
})()

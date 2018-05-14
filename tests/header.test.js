const Page = require("./interfaces/page")

let page

beforeEach(async () => {
  page = await Page.build()
  await page.goto("http://localhost:3000")
})

afterEach(async () => {
  await page.close()
})

describe("App header", async () => {
  test("has the correct text", async () => {
    const text = await page.getContentsOf("a.brand-logo")
    expect(text).toEqual("Blogster")
  })

  test("login-button click starts oauth flow", async () => {
    await page.click(".right a")
    const url = page.url()
    expect(url).toMatch(/accounts\.google\.com/)
  })

  test("shows logout button when signed in", async () => {
    await page.login()
    const text = await page.getContentsOf('a[href="/auth/logout"]')
    expect(text).toEqual("Logout")
  })
})

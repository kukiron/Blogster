const Page = require("./interfaces/page")

let page

beforeEach(async () => {
  page = await Page.build()
  await page.goto("localhost:3000")
})

afterEach(async () => {
  await page.close()
})

describe("When user is logged in", async () => {
  beforeEach(async () => {
    await page.login()
    await page.click("a.btn-floating")
  })

  test("can see blog create form", async () => {
    const label = await page.getContentsOf(".title label")
    expect(label).toEqual("Blog Title")
  })

  describe("and using valid inputs", async () => {
    const sampleTitle = "My Blog post"
    const sampleContent = "My Blog Content"

    beforeEach(async () => {
      await page.type(".title input", sampleTitle)
      await page.type(".content input", sampleContent)
    })

    describe("and submitting of inputs", async () => {
      beforeEach(async () => {
        await page.click("form button")
      })

      test("takes user to the review screen", async () => {
        const confirmation = await page.getContentsOf("form h5")
        expect(confirmation).toEqual("Please confirm your entries")
      })

      test("saving adds blog to index page", async () => {
        await page.click("button.green")
        await page.waitFor(".card")

        const title = await page.getContentsOf(".card-title")
        const content = await page.getContentsOf("p")
        expect(title).toEqual(sampleTitle)
        expect(content).toEqual(sampleContent)
      })
    })
  })

  describe("and using invalid inputs", async () => {
    beforeEach(async () => {
      await page.click("form button")
    })

    test("the form shows error message(s)", async () => {
      const titleError = await page.getContentsOf(".title .red-text")
      const contentError = await page.getContentsOf(".content .red-text")

      expect(titleError).toEqual("You must provide a value")
      expect(contentError).toEqual("You must provide a value")
    })
  })
})

describe("When user is not logged in", async () => {
  const actions = [
    {
      method: "get",
      path: "/api/blogs"
    },
    {
      method: "post",
      path: "/api/blogs",
      data: {
        title: "My Sample Blog",
        content: "Sample blog post content"
      }
    }
  ]

  test("blog realted actions are prohibited", async () => {
    const results = await page.execRequests(actions)

    for (let result of results) {
      expect(result).toEqual({ error: "You must log in!" })
    }
  })
})

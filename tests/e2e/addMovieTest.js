describe('AddMovieTest', () => {
  it("add movie", (browser) => {
    browser
      .url("http://localhost:3000")
      .waitForElementPresent("div[name=movieCard]")
      .setValue("input[name=movieTitle]", "Star Wars")
      .setValue("input[name=movieReleaseYear]", "1991")
      .click("button[name=submit]")
      .assert.elementPresent("#app > main > div > div.q-card__section.q-card__section--vert.grid-2-col > div:nth-child(3) > div > div.text-h6")
      .end();
  });
});
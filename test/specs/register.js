const assert = require('assert')

describe('Register page', () => {
    it('should have the right title', () => {
        browser.url('https://stage.pasv.us/user/register')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Progress Monitor')
    })



})
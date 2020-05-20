const correlation = require('./index.js')

test('correlation adds cid', () => {
  let correlator = correlation()
  const cb = jest.fn((err, queue, message) => {
    expect(message.cid).toBeDefined()
  })
  correlator.handleOutgoing('test', { test: true }, cb)
})
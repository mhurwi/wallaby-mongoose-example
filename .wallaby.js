module.exports = function (wallaby) {
  return {
    files: [
      'widget.js'
    ],
    tests: [
      'widget.test.js'
    ],
    env: { type: 'node' },
    setup() {
      process.env.NODE_ENV = 'test';
    },
    workers: {
      // With mongoose, we need to force the schemas to reload whenever they are changed.
      // This setting makes wallaby work better with mongoose.
      recycle: true
    }
  }
}

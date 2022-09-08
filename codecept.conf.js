exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://idemo.bspb.ru',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    Auth: './webpages/authentication.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/steps.js',
      './step_definitions/authentication.js'
  ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'gui_tests'
}
module.exports = {
  plugins: {
    'random-output': true
  },
  registerHooks: function(context) {
    var crossPlatforms = [
    ];

    var otherPlatforms = [
      'OSX 10.11/iphone@10.0',
      'OSX 10.11/ipad@10.0'
    ];

    // run SauceLabs tests for pushes, except cases when branch contains 'quick/'
    if (process.env.TRAVIS_EVENT_TYPE === 'push' && process.env.TRAVIS_BRANCH.indexOf('quick/') === -1) {
      // crossPlatforms are not tested here, but in Selenium WebDriver (see .travis.yml)
      context.options.plugins.sauce.browsers = otherPlatforms;

    // Run SauceLabs for daily builds, triggered by cron
    } else if (process.env.TRAVIS_EVENT_TYPE === 'cron') {
      context.options.plugins.sauce.browsers = crossPlatforms.concat(otherPlatforms);
    }
  }
};

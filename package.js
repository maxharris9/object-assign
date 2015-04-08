Package.describe({
  summary: "Object.assign ponyfill for Meteor",
  version: "0.0.1",
  git: "",
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.3');
  api.addFiles('ponyfill.js', ['client', 'server']);
  api.export(['objectAssign'], ['client', 'server']);
});

Package.onTest(function(api) {
  api.use(['maxharris9:object-assign', 'tinytest', 'test-helpers']);
  api.addFiles('maxharris9-object-assign-tests.js', ['client', 'server']);
});
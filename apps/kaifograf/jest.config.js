module.exports = {
  name: 'kaifograf',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/kaifograf',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

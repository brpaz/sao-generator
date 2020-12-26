const slug = require('slug');
module.exports = {
  prompts() {
    return [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the new project',
        default: this.outDirName,
        filter: val => slug(val)
      },
      {
        type: 'input',
        name: 'description',
        message: 'How would you descripe the new project'
      },
    ];
  },
  actions: [
    {
      type: 'add',
      files: '**'
    }
  ],
  async completed() {
    this.gitInit();
    this.showProjectTips();
  }
};

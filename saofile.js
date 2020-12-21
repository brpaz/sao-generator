module.exports = {
  prompts() {
    return [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the new generator (must be sao-*)',
        default: `sao-${this.outDirName.replace(/^sao-/, '')}`,
        filter: (val) => val.toLowerCase(),
        validate: (val) => val.startsWith('sao-'),
      },
      {
        type: 'input',
        name: 'description',
        message: 'How would you describe the new template',
        default: `my SAO generator`,
      },
      {
        type: 'input',
        name: 'repo_slug',
        message: 'What is the repository slug of this generator',
        default({ name }) {
          // TODO find how to get GitUser here
          return `brpaz/${name}`;
        },
      },
    ];
  },
  actions: [
    {
      type: 'add',
      files: '**',
      transformExclude: 'template/**',
    },
  ],
  async completed() {
    this.gitInit();
    await this.npmInstall();
    this.showProjectTips();
  },
};

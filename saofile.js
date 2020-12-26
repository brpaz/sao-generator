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
      },
      {
        type: 'input',
        name: 'repoSlug',
        message: 'What is the repository slug of this generator',
        default: ({ answers }) => {
          return `${this.gitUser.username}/${answers.name}`;
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

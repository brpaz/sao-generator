module.exports = {
  prompts() {
    return [
      {
        name: "name",
        message: "What is the name of the new project",
        default: this.outFolder,
        filter: val => val.toLowerCase()
      },
      {
        name: "description",
        message: "How would you descripe the new project"
      },
    ];
  },
  actions: [
    {
      type: "add",
      files: "**"
    }
  ],
  async completed() {
    this.gitInit();
    await this.npmInstall();
    this.showProjectTips();
  }
};

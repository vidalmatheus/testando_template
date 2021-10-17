module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: '',
      default: 'My Fsquare project'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
  },
	complete: (data, {chalk}) => {
		msg = `
			To get started:
			${chalk.blueBright(`
				cd ${data.destDirName}
				follow the instructions on README.md
			`)}
			${chalk.green('Project created!')}
		`;
		console.log(msg);
	}
};

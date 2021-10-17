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
		console.log(chalk.green('\nProject created!'));
		msg = `\nTo get started:
    ${chalk.blueBright(`
		cd ${data.destDirName}
		follow the instructions on README.md`)}`;
		console.log(msg);
	}
};

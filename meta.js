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
	complete: (data, {logger, chalk}) => {
		console.log("Hello!");
		console.log(data);
		console.log(logger);
		console.log(chalk);
	}
};

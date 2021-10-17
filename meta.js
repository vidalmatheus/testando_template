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
		inPlace: {
			type: 'boolean',
			message: 'inPlace?',
			default: false
		}
  },
	complete: (data, {chalk}) => {
		console.log("Hello!");
		console.log(data);
		console.log(`${chalk.blue('Howdy!')}`);
	}
};

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
      default: 'Fsquare project'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    extra: {
      type: 'string',
      message: 'Extra Messaging!'
    }
  },
  completeMessage: 'Project Created!'
};

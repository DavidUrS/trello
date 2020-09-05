const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    title: { type: String, required: true },
    status: { type: String },
    description: { type: String, required: true },
    isArchived: { type: Boolean },
    workspace: {
      type: Schema.Types.ObjectId,
      ref: 'workspaces',
      autopopulate: true
    }
  },
  { timestamps: true }
);
schema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model('tasks', schema);
module.exports = model;

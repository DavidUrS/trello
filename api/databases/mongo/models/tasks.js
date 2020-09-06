const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    title: { type: String, required: true },
    status: { type: String, default: 'Pending' },
    description: { type: String, required: true },
    isArchived: { type: Boolean, default: false },
    createdBy: { type: Schema.Types.ObjectId, ref: 'users' },
    workspace: {
      type: Schema.Types.ObjectId,
      ref: 'workspaces'
    }
  },
  { timestamps: true }
);
schema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model('tasks', schema);
module.exports = model;

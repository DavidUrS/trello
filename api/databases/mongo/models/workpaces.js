const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    name: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'users' }
  },
  { timestamps: true }
);

schema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model('workspaces', schema);
module.exports = model;

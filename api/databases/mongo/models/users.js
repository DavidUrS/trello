const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    workspaces: [
      { type: Schema.Types.ObjectId, ref: 'workspaces', autopopulate: true }
    ]
  },
  { timestamps: true }
);
schema.plugin(require('mongoose-autopopulate'));

const model = mongoose.model('users', schema);
module.exports = model;

let mongoose = require("mongoose");

//
let Schema = mongoose.Schema;
// commentschema is made from the constructor mongoose.schema
//
let CommentSchema = new Schema({
  name: {
    type: String
  },
  body: {
    type: String,
    required: true
  },
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});
// using mongoose.model, we can create a model from the schema
let Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;

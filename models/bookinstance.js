const { DateTime } = require("luxon");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
   book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true
   },
   imprint: {
      type: String,
      required: true
   },
   status: {
      type: String,
      required: true,
      enum: ["Available", "Maintenance", "Loaned", "Reserved"],
      default: "Maintenance"
   },
   due_back: {
      type: Date,
      default: Date.now
   }
});

BookInstanceSchema.virtual("due_back_formatted").get(function () {
   return DateTime.fromJSDate(this.due_back).toUTC().toLocaleString(DateTime.DATE_MED);
});

BookInstanceSchema.virtual("due_back_YYYY_MM_DD").get(function () {
   return DateTime.fromJSDate(this.due_back).toUTC().toFormat("yyyy-MM-dd");
});

BookInstanceSchema.virtual("url").get(function () {
   return `/catalog/bookinstance/${this._id}`;
});

module.exports = mongoose.model("BookInstance", BookInstanceSchema);

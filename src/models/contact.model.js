import mongoose from "mongoose";
const Schema = mongoose.Schema;
const contactSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please provide a name."],
    },
    email: {
      type: String,
      required: [true, "Please provide an email."],
    },
    phone: {
      type: String,
      required: [true, "Please provide a phone number."],
    },
  },
  { timestamps: true }
);
export const Contact = mongoose.model("Contact", contactSchema);

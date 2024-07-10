const mongoose = require("mongoose");
const submissionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "user id can not be empty"],
  },
  problemId: {
    type: String,
    required: [true, "problem id can not be empty"],
  },
  code: {
    type: String,
    required: [true, "code can not be empty"],
  },
  language: {
    type: String,
    required: [true, "language can not be empty"],
  },
  status: {
    type: String,
    enum: [
      "Pending",
      "Accepted",
      "Wrong Answer",
      "Time Limit Exceeded",
      "Memory Limit Exceeded",
      "Runtime Error",
      "Compilation Error",
    ],
    default: "Pending",
  },
});
const Submission = mongoose.model("Submission", submissionSchema);
module.exports = Submission;
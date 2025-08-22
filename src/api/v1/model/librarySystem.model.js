const { mongoose } = require("../../../config/mongo");

const LibrarySystemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number },
    genre: { type: String },
    status: {
      type: String,
      enum: ["available", "issued"],
      default: "available",
    },
    borrowerEmail: { type: String, default: null },
    remarks: { type: String, default: "No remarks" }
  },
  { timestamps: true }
);

const LibrarySystem = mongoose.model("LibrarySystem", LibrarySystemSchema);



module.exports = LibrarySystem;

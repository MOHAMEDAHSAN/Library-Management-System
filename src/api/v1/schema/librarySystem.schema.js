const { z } = require('zod');

const librarySystemSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  publishedYear: z.coerce.number().int().min(0).optional(),  
  genre: z.string().optional(),
  status: z.enum(["available", "issued"]).default("available"),
  borrowerEmail: z.string().email().optional().nullable(),
  remarks: z.string().optional().default("No remarks"),
});



module.exports = { librarySystemSchema };

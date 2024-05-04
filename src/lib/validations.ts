import { z } from "zod";
import { DEFAULT_PET_IMAGE } from "./constent";

export const petIdSchema = z.string().cuid();

export const petSchemaForm = z
  .object({
    name: z.string().trim().min(1, { message: "Name is required" }),
    ownerName: z.string().trim().min(1, { message: "Owner name is required" }),
    imageUrl: z.union([
      z.literal(""),
      z.string().trim().url({ message: "Image URL must be a valid url" }),
    ]),
    age: z.coerce.number().int().positive().max(9999),
    notes: z.union([z.literal(""), z.string().trim().max(1000)]),
  })
  .transform((data) => ({
    ...data,
    imageUrl: data.imageUrl || DEFAULT_PET_IMAGE,
  }));

export type TPetForm = z.infer<typeof petSchemaForm>;

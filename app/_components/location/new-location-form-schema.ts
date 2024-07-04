import {z} from "zod";

export const newLocationFormSchema = z.object({
    street: z.string(),
    number: z.string().optional(),
    addressWithoutNumber: z.boolean(),
    neighborhood: z.string(),
    city: z.string(),
    state: z.string(),
    complement: z.string().optional(),
    addressWithoutComplement: z.boolean(),
    reference: z.string().optional(),
})
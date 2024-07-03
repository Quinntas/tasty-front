import {z} from "zod";

export const signupSchema = z.object({
    name: z.string().min(3, {
        message: "name must be at least 3 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    phone: z.string().min(10, {
        message: "Invalid phone number.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    passwordConfirmation: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
}).refine(data => data.password === data.passwordConfirmation, {
    message: "Passwords do not match.",
    path: ["passwordConfirmation"]
})
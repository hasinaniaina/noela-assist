import * as z from "zod";

export const sendEmailSchema = z.object({
  email: z.string().email({ message: "Email invalide." }),
  subject: z.string().min(1, {message: "Le champ sujet ne doit pas être vide."}),
  message: z.string().min(1,{message: "Le champ message ne doit pas être vide"})
});

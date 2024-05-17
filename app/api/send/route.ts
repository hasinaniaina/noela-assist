import { EmailTemplate } from '@/template/email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const to_email = process.env.TO_EMAIL as string;
  try {
    const {email, subject, message} = await req.json();

    const { data, error } = await resend.emails.send({
      from:"Contact Form <onboarding@resend.dev>",
      to: to_email,
      subject: subject,
      html: "",
      react: EmailTemplate( { message: message, email: email, subject: subject }),
    });

    if (error) {
      return Response.json({success: false,error: error}, { status: 500 });
    }

    return Response.json({success: true});
  } catch (error) {
    return Response.json({success: false, error: error}, { status: 500 });
  }
}

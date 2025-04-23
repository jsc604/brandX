// import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  // const { name, email, subject, message } = await readBody(event);
  // const apiKey = process.env.RESEND_API_KEY;
  // console.log({ apiKey, name, email, subject, message });
  // const resend = new Resend(apiKey);

  // try {
  //   const { data, error } = await resend.emails.send({
  //     from: `Website Contact Form <info@valueaddsource.com>`,
  //     to: ["test-plb0ynbal@srv1.mail-tester.com"],
  //     // reply_to: [`${email}`],
  //     subject: `${subject}`,
  //     html: `<p>${message}</p>`,
  //     headers: {
  //       "Reply-To": email,
  //     },
  //   });

  //   console.log({ data, error });
  // } catch (error) {
  //   return console.error({ error });
  // }
  return { success: true };
});

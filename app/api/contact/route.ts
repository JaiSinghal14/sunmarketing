import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

const data = await req.json();

const { name,email,phone,type,message } = data;

try {

await resend.emails.send({
from: "TSMA Contact <onboarding@resend.dev>",
to: ["dpsjai10256@gmail.com"],
subject: "New Contact Inquiry",
html: `
<h2>New Inquiry</h2>

<p><b>Name:</b> ${name}</p>
<p><b>Email:</b> ${email}</p>
<p><b>Phone:</b> ${phone}</p>
<p><b>Type:</b> ${type}</p>

<p><b>Message:</b></p>
<p>${message}</p>
`
});

return Response.json({ success:true });

} catch(error){

console.log(error);
return Response.json({ error:"Email failed" });

}
}
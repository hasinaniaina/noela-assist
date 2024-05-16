"use client";

import { sendMail } from "@/api/sendEmail";
import { handleMessage } from "@/lib/utils";
import { FormEvent } from "react";

export default function ContactForm() {
  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    };

    const response = await sendMail(data);
    
    if (!response.success) {
      handleMessage("Oopss!", response.message, "destructive");
    } else {
      handleMessage("Success", "Email sent...", "default");
    }
  };
  return (
    <form onSubmit={sendEmail} className="flex flex-col">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email@email.com*"
        className="border border-[#ebebeb] rounded focus:outline-none p-[10px] text-[#525252] mt-[1rem] bg-[#f8f8f8] placeholder:text-[#c9c9c9] tracking-tighter"
      />
      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Sujet*"
        className="border border-[#ebebeb] rounded focus:outline-none p-[10px] text-[#525252] mt-[1rem] bg-[#f8f8f8] placeholder:text-[#c9c9c9] tracking-tighter"
      />
      <textarea
        name="message"
        id=""
        placeholder="Je souhaite vous contacter...*"
        className="border border-[#ebebeb] rounded focus:outline-none p-[10px] text-[#525252] mt-[1rem] min-h-[170px] bg-[#f8f8f8] placeholder:text-[#c9c9c9] tracking-tighter"
      ></textarea>
      <button
        type="submit"
        className="bg-[#E1C1B3] w-fit px-[2rem] py-[.5rem] mt-7 rounded text-white font-bold tracking-tighter"
      >
        Envoyer
      </button>
    </form>
  );
}

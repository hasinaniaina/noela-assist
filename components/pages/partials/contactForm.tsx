"use client";

import { sendMail } from "@/api/sendEmail";
import { handleMessage } from "@/lib/utils";
import { FormEvent, useState } from "react";
import { dataInterface } from "@/api/sendEmail";
import { sendEmailSchema } from "@/schema/schema";

const initialData = {
  email: "",
  subject: "",
  message: ""
}

export default function ContactForm() {
  const [isSend, setIsSend] = useState(false);
  const [data, setData] = useState<dataInterface>(initialData);

  const addData = (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const index = e.currentTarget.id;
    const value = e.currentTarget.value;

    setData({
      ...data,
      [index]: value
    });
  }

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSend(true);

    const dataCheck = sendEmailSchema.safeParse(data);

    if (!dataCheck.success) {
      let errorMessage = "";

      dataCheck.error.issues.forEach((issue) => {
        errorMessage += issue.path[0] + "=> " + issue.message + ". ";
      });

      handleMessage("Ooops", errorMessage, "destructive");
      setIsSend(false);
      return;
    }

    
    const response = await sendMail(data);

    if (!response.success) {
      handleMessage("Oopss!", response.error.message, "destructive");
    } else {
      handleMessage("Success", "Email sent...", "default");
    }

    setIsSend(false);
    setData(initialData);
  }

  return (
    <form onSubmit={sendEmail} className="flex flex-col">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email@email.com*"
        value={data.email}
        onChange={addData}
        className="border border-[#ebebeb] rounded focus:outline-none p-[10px] text-[#525252] mt-[1rem] bg-[#f8f8f8] placeholder:text-[#c9c9c9] tracking-tighter"
      />
      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Sujet*"
        value={data.subject}
        onChange={addData}
        className="border border-[#ebebeb] rounded focus:outline-none p-[10px] text-[#525252] mt-[1rem] bg-[#f8f8f8] placeholder:text-[#c9c9c9] tracking-tighter"
      />
      <textarea
        name="message"
        id="message"
        placeholder="Je souhaite vous contacter...*"
        value={data.message}
        onChange={addData}
        className="border border-[#ebebeb] rounded focus:outline-none p-[10px] text-[#525252] mt-[1rem] min-h-[170px] bg-[#f8f8f8] placeholder:text-[#c9c9c9] tracking-tighter"
      ></textarea>
      <button
        type="submit"
        className="bg-custom-marron hover:scale-105 hover:bg-custom-hoverMarron duration-200 flex items-center justify-center w-fit px-[2rem] py-[.5rem] mt-7 rounded text-white font-bold tracking-tighter"
      >
        <img src="assets/images/loading.gif" alt="loading" className={"w-8 " + (isSend ? "block" : "hidden")} />
        <span className={(!isSend ? "block" : "hidden")}>Envoyer</span>
      </button>
    </form>
  );
}

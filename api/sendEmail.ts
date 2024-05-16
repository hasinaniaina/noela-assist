
interface dataInterface {
    email: string,
    subject: string,
    message: string
}
export  async function sendMail(data: dataInterface ) {
    const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

    return response.json();
}

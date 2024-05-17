import * as React from 'react';

interface EmailTemplateProps {
  message: string;
  email:string,
  subject: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message, 
  email, 
  subject
}) => (
  <div>
    <p><strong>Email From:&nbsp;</strong>{email}</p>
    <p><strong>Sujet:&nbsp;</strong>{subject}</p>
    <p>{message}</p>
  </div>
);
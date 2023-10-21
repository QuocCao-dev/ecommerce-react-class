import React, { FormEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  title: string;
}

export default function FormContainer({ title, children, onSubmit }: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className="p-6 space-y-6 bg-white rounded-md shadow-md w-96"
    >
      <h3 className="font-semibold text-center">{title}</h3>
      {children}
    </form>
  );
}

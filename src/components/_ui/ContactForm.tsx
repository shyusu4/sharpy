'use client';
import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="card w-full max-w-[40rem] h-fit border-2 border-primary shadow-solid rounded-lg p-12">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="input bg-lightGray"
        />
        <input
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="input bg-lightGray"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="textarea textarea-md bg-lightGray"
        />
        <button
          type="submit"
          className="btn btn-neutral font-semibold text-white bg-black"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

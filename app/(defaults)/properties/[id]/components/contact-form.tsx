"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { sendMail } from "../action";
import FormField from "./form-field";
import { useToast } from "@/context/toast-context";

interface FormData {
  name: string;
  email: string;
  contact: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { showToast } = useToast();
  const methods = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const templateParams = {
      from_email: data.email,
      name: data.name,
      phone: data.contact,
      email: data.email,
      message: data.message,
    };

    try {
      await sendMail(templateParams);
      showToast("Your message has been sent successfully!", "success");
      methods.reset();
    } catch (error) {
      showToast("There was an error sending your message.", "error");
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <FormField
            id="name"
            name="name"
            label="Name"
            placeholder="John Doe"
            type="text"
            validation={{ required: "Name is required" }}
          />
          <FormField
            id="email"
            name="email"
            label="Email"
            placeholder="@abcgmail.com"
            type="email"
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email address",
              },
            }}
          />
          <FormField
            id="contact"
            name="contact"
            label="Phone Number"
            placeholder="+123-1200-254"
            type="text"
            validation={{
              required: "Phone number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Phone number must be 10 digits & neumaric",
              },
            }}
            maxLength={10}
          />
          <FormField
            id="message"
            name="message"
            label="Message"
            placeholder="Enter text here..."
            type="textarea"
            validation={{ required: "Message is required" }}
          />
          <div className="my-5">
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white p-2 rounded-md shadow-md hover:bg-[#22c55e] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              disabled={methods.formState.isSubmitting}
            >
              {methods.formState.isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactForm;

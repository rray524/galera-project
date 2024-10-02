"use client";
import { useToast } from "@/context/toast-context";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { sendMail } from "../action";
import FormField from "./form-field";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const methods = useForm<FormData>();
  const { showToast } = useToast();

  const onSubmit = async (data: FormData) => {
    const templateParams = {
      from_email: data.email,
      name: data.name,
      phone: data.phone,
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
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="space-y-4"
        noValidate
      >
        <FormField
          name="name"
          id="name"
          label="Name"
          type="text"
          placeholder="Enter your full name"
          validationRules={{ required: "Name is required" }}
        />
        <FormField
          name="email"
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email address"
          validationRules={{
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Please enter a valid email address",
            },
          }}
        />
        <FormField
          name="phone"
          id="phone"
          label="Phone Number"
          type="text"
          placeholder="Enter your phone number"
          validationRules={{
            required: "Phone number is required",
            pattern: {
              value: /^\d{10}$/,
              message: "Phone number must be 10 digits & neumaric",
            },
          }}
          maxLength={10}
        />
        <FormField
          name="message"
          id="message"
          label="Message"
          type="textarea"
          placeholder="Enter your message"
          validationRules={{ required: "Message is required" }}
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white p-2 rounded-md shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          disabled={methods.formState.isSubmitting}
        >
          {methods.formState.isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;

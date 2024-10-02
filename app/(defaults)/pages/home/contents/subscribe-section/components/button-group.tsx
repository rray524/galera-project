"use client";
import { sendMail } from "@/app/(defaults)/properties/[id]/action";
import { useToast } from "@/context/toast-context";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  input: string;
}

interface InputButtonGroupProps {
  placeholder: string;
  buttonText: string;
  buttonClass?: string;
  inputClass?: string;
}

export const InputButtonGroup: React.FC<InputButtonGroupProps> = ({
  placeholder,
  buttonText,
  buttonClass = "p-4 w-full lg:w-[75%] sm:flex-0 flex items-center justify-center text-white text-[14px] bg-black rounded-lg lg:rounded-l-none font-semibold mt-2 sm:mt-0 px-4",
  inputClass = "border-2 border-black text-[15px] rounded-l-lg rounded-r-lg lg:rounded-r-none w-full p-[0.8rem]",
}) => {
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const templateParams = { input: data.input };
    try {
      await sendMail(templateParams);
      showToast("You have been subscribed successfully!", "success");
      reset();
    } catch (error) {
      showToast("There was an error sending your message.", "error");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
        noValidate
      >
        <div className="flex w-[100%] items-center flex-col lg:flex-row gap-3 lg:gap-0">
          <input
            type="email"
            placeholder={placeholder}
            {...register("input", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Please enter a valid email address",
              },
            })}
            className={inputClass}
          />
          <button type="submit" disabled={isSubmitting} className={buttonClass}>
            {isSubmitting ? "Sending..." : buttonText}
          </button>
        </div>
        {errors.input && (
          <p className="text-red-500 text-sm">{errors.input.message}</p>
        )}
      </form>
    </>
  );
};

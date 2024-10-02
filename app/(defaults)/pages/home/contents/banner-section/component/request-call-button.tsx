"use client";
import React from "react";
import { useToast } from "@/context/toast-context";
import { sendMail } from "@/app/(defaults)/properties/[id]/action";
import { useForm } from "react-hook-form";

interface FormData {
  phone: string;
}

const RequestCallButton = () => {
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const templateParams = {
      phone: data.phone,
    };
    try {
      await sendMail(templateParams);
      showToast("Your request has been sent successfully!", "success");
      reset();
    } catch (error) {
      showToast("There was an error sending your message.", "error");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full sm:w-[90%] items-center mt-[60px] mb-1 flex-col sm:flex-row"
      >
        <input
          type="text"
          placeholder="+ 324-45845222"
          {...register("phone", {
            required: "Phone number is required",
            validate: {
              exactLength: (value: any) =>
                /^[0-9]{10}$/.test(value) ||
                "Phone number must be 10 digits & neumaric",
            },
          })}
          maxLength={10}
          className="border-2 text-[15px] border-yellow-400 rounded-l-lg rounded-r-lg sm:rounded-r-none h-[40px] w-full sm:w-auto sm:flex-1 p-2"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="h-[40px] w-full sm:w-auto sm:flex-0 rounded-l-lg sm:rounded-l-none flex items-center justify-center text-white text-[15px] rounded-r-lg font-semibold bg-yellow-400 duration-1000 hover:bg-blue-800 hover:text-white mt-2 sm:mt-0 px-4"
        >
          {isSubmitting ? "Requesting..." : "Request a call now"}
        </button>
      </form>
      <div className="flex flex-col">
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>
    </>
  );
};

export default RequestCallButton;

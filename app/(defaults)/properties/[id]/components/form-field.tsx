import React from "react";
import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  name: string;
  id: string;
  label: string;
  placeholder: string;
  validation: any;
  type: "text" | "email" | "tel" | "textarea" | "number";
  maxLength?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  placeholder,
  validation,
  type,
  maxLength,
  id,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message as unknown as string;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[16px] font-medium text-gray-700 text-left"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          placeholder={placeholder}
          {...register(name, validation)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          {...register(name, validation)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          maxLength={maxLength}
          pattern={id === "contact" ? "\\d*" : undefined}
        />
      )}
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
    </div>
  );
};

export default FormField;

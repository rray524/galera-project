import React from "react";
import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  name: string;
  id: string;
  type: "text" | "email" | "textarea" | "number";
  placeholder: string;
  validationRules?: object;
  label: string;
  maxLength?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  id,
  type,
  placeholder,
  validationRules = {},
  maxLength,
  label,
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
        className="block text-[16px] font-medium text-gray-700 text-left dark:text-gray-500"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          {...register(name, validationRules)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, validationRules)}
          maxLength={maxLength}
          pattern={id === "phone" ? "\\d*" : undefined}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      )}
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
    </div>
  );
};

export default FormField;

import { FieldErrors, UseFormRegister, UseFormReturn } from "react-hook-form";

export interface FormValues {
  [key: string]: string;
}

export interface TextFieldProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  fieldName: string;
  label: string;
  placeholder: string;
  type: string;
  minLength?: { value: number; message: string };
  requiredMessage?: string;
  validateFunction?: (value: string) => boolean | string;
}

export interface CheckboxFieldProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  fieldName: string;
  label: string;
  setValue: (name: string, value: string) => void;
  watch: UseFormReturn["watch"];
  requiredMessage?: string;
}

export interface TextareaFieldProps {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  fieldName: string;
  placeholder: string;
  requiredMessage?: string;
  validateFunction?: any;
  label: string;
}

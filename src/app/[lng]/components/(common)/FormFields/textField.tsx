import { Form } from "react-bootstrap";
import { TextFieldProps } from "@/app/[lng]/components/(common)/FormFields/assets/formFieldsTypes";
import styles from "@/app/[lng]/components/(common)/FormFields/formFields.module.scss";

export const TextField: React.FC<TextFieldProps> = ({
  register,
  errors,
  label,
  type,
  placeholder,
  fieldName,
  requiredMessage,
  validateFunction,
  minLength,
}) => {
  return (
    <Form.Group className={styles.group} controlId={fieldName}>
      <Form.Label className={styles.label}>{label}</Form.Label>
      <Form.Control
        className={`${styles.input} ${
          errors[fieldName] ? styles.input__validation : ""
        }`}
        placeholder={placeholder}
        type={type}
        {...register(fieldName, {
          required: requiredMessage,
          minLength: minLength,
          validate: validateFunction,
        })}
      />
      {errors[fieldName] && (
        <p className={styles.textField__validation}>
          {errors[fieldName]?.message}
        </p>
      )}
    </Form.Group>
  );
};

import { Form } from "react-bootstrap";
import { TextareaFieldProps } from "@/app/[lng]/components/(common)/FormFields/assets/formFieldsTypes";
import styles from "@/app/[lng]/components/(common)/FormFields/formFields.module.scss";

export const TextareaField: React.FC<TextareaFieldProps> = ({
  register,
  errors,
  placeholder,
  fieldName,
  label,
  requiredMessage,
}) => {
  return (
    <Form.Group className={styles.group}>
      <Form.Label className={styles.label}>{label}</Form.Label>
      <Form.Control
        className={`${styles.textarea} ${
          errors[fieldName] ? styles.input__validation : ""
        }`}
        as="textarea"
        placeholder={placeholder}
        {...register(fieldName, {
          required: requiredMessage ? requiredMessage : false,
        })}
      />
      {errors[fieldName] && (
        <p className={styles.textarea__validation}>
          {errors[fieldName]?.message}
        </p>
      )}
    </Form.Group>
  );
};

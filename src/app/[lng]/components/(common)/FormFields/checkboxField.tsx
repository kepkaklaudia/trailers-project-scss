import { Form } from "react-bootstrap";
import styles from "@/app/[lng]/components/(common)/FormFields/formFields.module.scss";
import { CheckboxFieldProps } from "@/app/[lng]/components/(common)/FormFields/assets/formFieldsTypes";

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  fieldName,
  errors,
  register,
  setValue,
  requiredMessage,
  watch,
}) => {
  const selectedField = watch(fieldName, false);

  return (
    <Form.Group className={styles.checkbox__group} controlId={fieldName}>
      <Form.Check
        className={styles.checkbox__input}
        type="checkbox"
        label={label}
        checked={selectedField === true}
        {...register(fieldName, {
          onChange: (e) => {
            setValue(fieldName, e.target.checked);
          },
          required: requiredMessage ? requiredMessage : false,
        })}
      />
      {errors[fieldName] && (
        <p className={styles.checkbox__validation}>
          {errors[fieldName]?.message}
        </p>
      )}
    </Form.Group>
  );
};

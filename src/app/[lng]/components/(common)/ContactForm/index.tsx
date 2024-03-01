"use client";

import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FormValues } from "@/app/[lng]/components/(common)/FormFields/assets/formFieldsTypes";
import { TextField } from "@/app/[lng]/components/(common)/FormFields/textField";
import { TextareaField } from "@/app/[lng]/components/(common)/FormFields/textareaField";
import { CheckboxField } from "@/app/[lng]/components/(common)/FormFields/checkboxField";
import { validateEmail } from "@/app/[lng]/components/(common)/FormFields/assets/validationFunctions";
import { Dropzone } from "@/app/[lng]/components/(common)/FormFields/Dropzone";
import { Title } from "@/app/[lng]/components/(common)/Title";
import { StyledModal } from "@/app/[lng]/components/(common)/ContactForm/Modal";
import { modalItems } from "@/app/[lng]/components/(common)/ContactForm/Modal/modalItems";
import { MotionShuffle } from "@/app/[lng]/components/(common)/Motion/MotionShuffle";
import styles from "@/app/[lng]/components/(common)/ContactForm/contactForm.module.scss";

export const ContactForm = ({ isHome }: { isHome?: boolean }) => {
  const [show, setShow] = useState(false);

  const [filesArray, setFilesArray] = useState<File[]>([]);

  const [submittedFormValues, setSubmittedFormValues] =
    useState<FormValues | null>(null);

  const t = useTranslations("common.contact");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  /*
  const submitForm = async (data) => {
    setIsButtonDisabled(true);
    const newFile = file;
    let result;

    try {
      if (newFile !== '') {
      result = await uploadFile(newFile, {
          publicKey: '048fc6c2c4725837eab7',
          store: 'auto',
          metadata: {
            subsystem: 'uploader',
          },
        });
      } else {
        result = '';

      }

      await axios.post("https://submit-form.com/u2uKrqT6", {
        Imię: `${data.name}`,
        Email: `${data.email}`,
        Tel: `${data.tel}`,
        Czas_realizacji: `${data.realisation}`,
        Opis: `${data.description}`,
        Plik: `${result.cdnUrl || 'Brak pliku'}`,
        Uwaga: `Link do zdjęcia dostępny jest jedynie przez 24 godziny`,

        _email: {
          from: `${data.name}`,
          subject: `BAL Engineering - zamówienie na ${chosenOrderType}`,

          template: {
            title: false,
            footer: false,
          },
        },
      });
      setMessage(messageSentText);
    } catch (e) {
      console.log(e);
      setMessage(messageNotSentMessage);
    }

    reset();
    setIsButtonDisabled(false);
    setTimeout(() => {
      setMessage('');
    }, 5000);
    setFile('');

  };

*/

  const onSubmit = async (data: FormValues) => {
    setSubmittedFormValues(data);
    setShow(true);
    reset();

    const response = await fetch("https://submit-form.com/u2uKrqT6", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Imię: data.fullName,
        Email: data.email,
        Wiadomość: data.description,
      }),
    })
      .then(function (response) {
        console.log(response);
        console.log(
          "Form submitted:",
          data.fullName,
          data.email,
          data.description
        );
        console.log("Files sent:", filesArray);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className={styles.wrapper}>
      <Title heading={t("Contact")} subheading={t("Contact us")} />
      <Form
        noValidate
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <MotionShuffle x={200}>
          <TextField
            type="text"
            register={register}
            errors={errors}
            fieldName="fullName"
            label={t("FullName")}
            placeholder={t("Enter your full name")}
            requiredMessage={t("This field is required")}
          />
        </MotionShuffle>
        <MotionShuffle x={-200}>
          <TextField
            type="email"
            register={register}
            errors={errors}
            fieldName="email"
            label={t("E-mail")}
            placeholder={t("Enter your e-mail")}
            requiredMessage={t("This field is required")}
            validateFunction={(value) =>
              validateEmail(value, t("Incorrect e-mail address"))
            }
          />
        </MotionShuffle>
        <MotionShuffle x={200}>
          <Dropzone
            filesArray={filesArray}
            setFilesArray={setFilesArray}
            mainLabel={t("Add files")}
            loadedLabel={t("Number of uploaded files")}
            emptyLabel={t("Select files")}
            loadedTitle={t("File(s) uploaded")}
            emptyTitle={t("No file(s) selected")}
            deleteTitle={t("Delete file")}
            deleteAll={t("Delete all files")}
          />
        </MotionShuffle>
        <MotionShuffle x={-200}>
          <TextareaField
            register={register}
            errors={errors}
            fieldName="description"
            placeholder={t("Write a message")}
            label={t("Message")}
            requiredMessage={t("This field is required")}
          />
        </MotionShuffle>
        <CheckboxField
          register={register}
          setValue={setValue}
          errors={errors}
          watch={watch}
          fieldName="consent"
          label={t("I consent to the processing of my personal data")}
          requiredMessage={t("Consent is required")}
        />
        <CheckboxField
          register={register}
          setValue={setValue}
          errors={errors}
          watch={watch}
          fieldName="consentEmail"
          label={t(
            "I agree to receive commercial through electronic communication"
          )}
        />
        <CheckboxField
          register={register}
          setValue={setValue}
          errors={errors}
          watch={watch}
          fieldName="consentPhone"
          label={t(
            "I also consent to receiving commercial through telecommunications"
          )}
        />
        <div className={styles.consent__info}>
          {t("This consent is voluntary")}
          <Link
            className={styles.link}
            rel="noopener noreferrer"
            target="_blank"
            href={"https://kratki.com/pl/polityka-prywatnosci"}
          >
            {t("Privacy Policy")}
          </Link>
        </div>
        <div className={styles.submit__container}>
          <button type="submit" className={styles.submit__button}>
            {t("Send a message")}
          </button>
        </div>
      </Form>
      <StyledModal
        modalItems={modalItems}
        show={show}
        setShow={setShow}
        isHome={isHome}
        data={submittedFormValues}
      />
    </div>
  );
};

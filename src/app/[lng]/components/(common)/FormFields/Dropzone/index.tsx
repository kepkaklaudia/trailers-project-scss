import { Form } from "react-bootstrap";
import { useRef } from "react";
import styles from "@/app/[lng]/components/(common)/FormFields/Dropzone/dropzone.module.scss";

interface DropzoneProps {
  filesArray: File[];
  setFilesArray: (files: File[]) => void;
  mainLabel: string;
  loadedLabel: string;
  emptyLabel: string;
  loadedTitle: string;
  emptyTitle: string;
  deleteTitle: string;
  deleteAll: string;
}

export const Dropzone: React.FC<DropzoneProps> = ({
  filesArray,
  setFilesArray,
  mainLabel,
  loadedLabel,
  emptyLabel,
  loadedTitle,
  emptyTitle,
  deleteTitle,
  deleteAll,
}) => {
  const labelRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = Array.from(e.target.files as FileList); // Convert FileList to an array of File objects
    setFilesArray(files);
    e.target.value = "";
  };

  const onDragOver = () =>
    labelRef.current?.classList.add(`${styles.group__dragover}`);
  const onDragLeave = () =>
    labelRef.current?.classList.remove(`${styles.group__dragover}`);
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    labelRef.current?.classList.remove(`${styles.group__dragover}`);
  };

  const filteredArray = (filesArray: File[], index: number) =>
    filesArray.filter((file) => filesArray.indexOf(file) !== index);

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.label__main}>{mainLabel}</p>
        <Form.Group
          ref={labelRef}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={styles.group}
          controlId="formFileMultiple"
        >
          <Form.Label className={styles.label}>
            {filesArray.length
              ? `${loadedLabel} ${filesArray.length}`
              : `${emptyLabel}`}
          </Form.Label>
          <Form.Control
            onChange={handleInputChange}
            className={styles.input}
            type="file"
            //role="uploadcare-uploader"
            //data-public-key="your-public-uploadcare-id"
            multiple
            title={filesArray.length ? `${loadedTitle}` : `${emptyTitle}`}
          />
        </Form.Group>
      </div>
      {filesArray.length > 0 && (
        <>
          <div className={styles.details}>
            {filesArray.map((file, index) => {
              return (
                <div className={styles.details__item} key={file.name}>
                  <div>
                    {index + 1}. {file.name}
                  </div>
                  <button
                    title={deleteTitle}
                    onClick={() => {
                      setFilesArray(filteredArray(filesArray, index));
                    }}
                    className={styles.details__delete}
                  ></button>
                </div>
              );
            })}
          </div>
          <button
            className={styles.details__deleteAll}
            onClick={() => setFilesArray([])}
          >
            {deleteAll}
          </button>
        </>
      )}
    </>
  );
};

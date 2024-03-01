import { FormValues } from "../../FormFields/assets/formFieldsTypes";

export interface ModalItem {
  label: string;
  value: string;
}

export interface StyledModalProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  modalItems: ModalItem[];
  data: FormValues | null;
  isHome?: boolean;
}

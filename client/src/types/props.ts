export enum options {
  ALL,
  ACTIVE,
  COMPLETED,
}
export interface TaskProps {
  id: string;
  task: string;
  completed: boolean;
}
export interface TasksProps {
  tasks: TaskProps[];
  saveTask?: TaskProps[];
}
export interface BannerProps {
  imageLigth: string;
  imageDark: string;
  imageLigthMobile: string;
  imageDarkMobile: string;
}
export interface ButtonProps {
  selfOption: options;
  option: options | string;
  setOption: (option: options) => void;
}
export interface ModalProps {
  icon: JSX.Element;
  color: string;
  title: string;
  text: string;
  time: number;
  reset: number;
}

export interface InputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  onChange(
    e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLInputElement>
  ): void;
}

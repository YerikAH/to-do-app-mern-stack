export enum options{
  ALL,
  ACTIVE,
  COMPLETED
}
export interface TaskProps{
  id: string;
  task: string;
  completed: boolean;
} 
export interface TasksProps{
  tasks: TaskProps[],
  saveTask?: TaskProps[]
}
export interface BannerProps{
  imageLigth: string,
  imageDark: string
  imageLigthMobile: string
  imageDarkMobile: string
}
export interface ButtonProps{
  selfOption: options
  option: options | string
  setOption: (option: options) => void
}
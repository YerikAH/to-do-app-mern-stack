import { createSlice } from "@reduxjs/toolkit";
import { TaskProps, TasksProps } from "../../types/props";

const initialState: TasksProps = {
  tasks: [],
  saveTask: [],
};
export const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    getTask: (state) => {
      if (state.saveTask) {
        state.tasks = state.saveTask;
      }
    },
    createTask: (state, action) => {
      const task: TaskProps = action.payload;
      state.tasks.push(task);
      state.saveTask?.push(task);
    },
    updateTask: (state, action) => {
      const id: string = action.payload;
      const foundElement = state.tasks.find((task) => task.id === id);
      const foundElementSave = state.saveTask?.find((task) => task.id === id);
      if (foundElement) {
        foundElement.completed = !foundElement.completed;
      }
      if (foundElementSave) {
        foundElementSave.completed = !foundElementSave.completed;
      }
    },
    deleteTask: (state, action) => {
      const id: string = action.payload;
      const filterElements = state.tasks.filter((task) => task.id !== id);
      state.tasks = filterElements;
      state.saveTask = filterElements;
    },
    filterByActive: (state) => {
      const filterElements = state.tasks.filter(
        (task) => task.completed !== true
      );
      if(filterElements){
        state.tasks = filterElements;
      }
    },
    filterByCompleted: (state) => {
      const filterElements = state.tasks.filter(
        (task) => task.completed !== false
      );
      if(filterElements){
        state.tasks = filterElements;
      }
    },
    clearCompleted: (state) => {
      const filterElements = state.tasks.filter(
        (task) => task.completed !== true
      );
      state.tasks = filterElements;
      state.saveTask = filterElements;
    },
    reorderTasks: (state, action) => {
      const {arr, starti, endi} = action.payload as {arr: TaskProps[], starti: number, endi: number}
      const result = [...arr];
      const [removed] = result.splice(starti, 1);
      result.splice(endi, 0, removed);
      state.tasks = result;
      state.saveTask = result;
    }
  },
});

export const {
  createTask,
  updateTask,
  deleteTask,
  clearCompleted,
  filterByActive,
  filterByCompleted,
  getTask,
  reorderTasks
} = tasksSlice.actions;
export default tasksSlice.reducer;

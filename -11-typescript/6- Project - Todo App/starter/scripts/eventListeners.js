import {
  TaskListElement,
  TaskListLink,
  TaskSearchBarButton,
  darkThemeToggleElement,
  getCheckboxElements,
  getDeleteIcons,
} from "./elements";
import { addTask, deleteTask, toggleDarkMode, toggleTask } from "./utils";

export const initTaskListeners = () => {
  getDeleteIcons().forEach((icon, index) => {
    icon.addEventListener("click", (e) => deleteTask(e, index));
  });
  getCheckboxElements().forEach((box, index) => {
    box.addEventListener("click", (e) => toggleTask(e, index));
    box.addEventListener("keydown", (e) => e.key === "Enter" && toggleTask(e, index));
  });
};

export const initListeners = () => {
  darkThemeToggleElement.addEventListener("click", toggleDarkMode);
  TaskSearchBarButton?.addEventListener("click", addTask);
  TaskListLink?.addEventListener("click", () => {
    TaskListElement?.classList.toggle("TaskList__list--hideCompleted");
    TaskListLink?.classList.toggle("TaskList__link--isActive");
  });
};

import {
  TaskListElement,
  TaskListLink,
  TaskSearchBarButton,
  darkThemeToggleElement,
  getCheckboxElements,
  getDeleteIcons,
} from "./elements";
import { InitListeners, InitTaskListeners } from "./types";
import { addTask, deleteTask, toggleDarkMode, toggleTask } from "./utils";

export const initTaskListeners: InitTaskListeners = () => {
  getDeleteIcons().forEach((icon, index) => {
    icon.addEventListener("click", () => deleteTask(index));
  });
  getCheckboxElements().forEach((box, index) => {
    box.addEventListener("click", (e) => toggleTask(e, index));
    box.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        toggleTask(e, index);
      }
    });
  });
};

export const initListeners: InitListeners = () => {
  darkThemeToggleElement?.addEventListener("click", toggleDarkMode);
  TaskSearchBarButton?.addEventListener("click", addTask);
  TaskListLink?.addEventListener("click", () => {
    TaskListElement?.classList.toggle("TaskList__list--hideCompleted");
    TaskListLink?.classList.toggle("TaskList__link--isActive");
  });
};

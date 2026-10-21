import {
  AppElement,
  TaskListElement,
  TaskListLink,
  TaskSearchBarButton,
  darkThemeToggleElement,
  getCheckboxElements,
  getDeleteIcons,
  inputElement,
} from "./scripts/elements";
import { initListeners, initTaskListeners } from "./scripts/eventListeners";
import { initDataOnStartup } from "./scripts/utils";

initDataOnStartup();
initListeners();

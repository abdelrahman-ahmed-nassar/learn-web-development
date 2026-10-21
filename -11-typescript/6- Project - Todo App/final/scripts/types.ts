export type InitTaskListeners = () => void;
export type InitListeners = () => void;

type Key = "tasks" | "darkModeFlag";
export type Task = {
  value: string;
  isCompleted: boolean;
};
export type FetchData = (key: Key) => boolean | Task[];
export type ToggleDarkMode = () => void;
export type RenderTaskList = (tasks: Task[]) => void;
export type DeleteTask = (index: number) => void;
export type AddTask = (e: Event) => void;
export type SaveToDB = (key: Key, data: boolean | {}) => void;
export type InitDataOnStartup = () => void;
export type RenderEmptyState = () => void;
export type InitTaskList = (tasks: Task[]) => void;
export type ToggleTask = (e: Event, index: number) => void;

import Showreel from "../components/Showreel";

export default {
    component: Showreel,
    title: "Showreel",
    tags: ["ui_component"]
}

export const Default = {
    args: {
      task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
      },
    },
  };
import TeslaTitleText from "../components/TeslaTitleText";

export default {
    component: TeslaTitleText,
    title: "TeslaTitleText",
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
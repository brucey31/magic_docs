import TeslaTitle from "../components/TeslaTitle";

export default {
    component: TeslaTitle,
    title: "TeslaTitle",
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
export type navLink = {
  key: number;
  name: string;
  link: string;
};
export type todo = {
  id: string;
  title: String;
  description: String;
  createdAt: Date;
  updatedAt: Date;
};
export type TodoCardPropsType = {
  todo: todo;
};
export type UpdateTodoFormProps {
  todo: todo | null;
}

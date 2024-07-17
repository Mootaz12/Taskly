import { getTodo } from "@/actions";
import UpdateTodoForm from "@/components/UpdateTodoForm";
import { todo } from "@/types";
const page = async ({ params }: { params: { slug: string } }) => {
  const todo: todo | null = await getTodo(params.slug);
  return <UpdateTodoForm todo={todo} />;
};

export default page;

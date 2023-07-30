import { Post as TodoInterface } from "@/interfaces/post";
import Post from "./Post";

interface TodoListProps {
  todos: TodoInterface[];
}

export default function ToDoList({ todos }: TodoListProps) {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <Post key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

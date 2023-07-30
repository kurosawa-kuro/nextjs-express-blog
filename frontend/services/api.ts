import { Post } from "@/interfaces/post";

const baseUrl = "http://localhost:8080";

const requestOptions = (method: string, body?: object) => ({
  method,
  headers: { "Content-Type": "application/json" },
  body: body ? JSON.stringify(body) : null,
});

export const readTodosApi = async (): Promise<Post[]> => {
  // SSR
  const res = await fetch(`${baseUrl}/api/posts`, { cache: "no-store" });
  console.log({ res });
  return await res.json();
};

export const createTodoApi = async (todo: Post): Promise<Post> => {
  const res = await fetch(`${baseUrl}/tasks`, requestOptions("POST", todo));
  return await res.json();
};

export const updateTodoApi = async (
  id: string,
  newText: string
): Promise<Post> => {
  const res = await fetch(
    `${baseUrl}/tasks/${id}`,
    requestOptions("PUT", { text: newText })
  );
  return await res.json();
};

export const deleteTodoApi = async (id: string): Promise<Post> => {
  const res = await fetch(`${baseUrl}/tasks/${id}`, requestOptions("DELETE"));
  return await res.json();
};

import ollama from "ollama";

export default async function ollamaChat() {
  const response = await ollama.chat({
    model: "llama3.2:latest",
    messages: [{ role: "user", content: "Why is the sky blue?" }],
  });
  console.log(response.message.content);
}

import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const currentUser = "You";

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("receiveMessage");
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim()) {
      const message = { text: input, user: currentUser };
      socket.emit("sendMessage", message);
      setInput("");
    }
  };
  return (
    <div className="py-2 rounded-lg border my-2 flex flex-col border-[#1e2a46] w-full h-72">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            {msg.user === currentUser ? (
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white p-2 rounded-lg max-w-[70%] break-words">
                  {msg.text}
                </div>
              </div>
            ) : (
              <div className="flex justify-start">
                <div className="bg-gray-600 text-white p-2 rounded-lg max-w-[70%] break-words">
                  {`${msg.user}: ${msg.text}`}
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="mt-2 flex px-2 md:px-5">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a trading tip..."
          className="flex-1 p-2 border border-gray-700 rounded-l-lg focus:outline-none bg-gray-800 text-white"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;

import { useEffect, useRef, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { GoGift } from "react-icons/go";
import { CiImageOn } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import AvatarDefault from "../../components/AvatarDefault";
import VoiceCallModal from "../../components/VoiceCallModal";
const DrirectMessages: React.FC = () => {
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [calling, setCalling] = useState<boolean>(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      senderId: 1,
      senderName: "Toàn",
      senderAvatar: "",
      content: "https://discord.gg/WGAHWAYq",
      timestamp: "09/10/2023, 00:34",
    },
    {
      id: 2,
      senderId: 2,
      senderName: "Phúc",
      senderAvatar: "",
      content: "t đây",
      timestamp: "09/10/2023, 00:34",
    },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        senderId: 2,
        senderName: "Phúc",
        senderAvatar: "",
        content: message,
        timestamp: new Date().toLocaleString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        isInvite: false,
      };

      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const handleStartVideoCall = (friendId: string) => {
    console.log(`Starting video call with friend ID: ${friendId}`);
  };

  const handleStartVoiceCall = (friendId: string) => {
    console.log(`Starting voice call with friend ID: ${friendId}`);
    setCalling(true);
  };

  const isUrl = (text: string) => {
    try {
      new URL(text);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="flex flex-col bg-customDark text-gray-200 h-full">
      <VoiceCallModal isOpen={calling} onHangup={() => setCalling(false)} />
      {/* Header */}
      <header className="h-12 min-h-[48px] px-4 border-b border-zinc-800 flex items-center justify-between bg-customDark">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-dark flex items-center justify-center overflow-hidden">
            {/* <img src="" alt="Toàn" className="w-full h-full object-cover" /> */}
            <AvatarDefault />
          </div>
          <h1 className="font-bold text-white">Toàn</h1>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleStartVoiceCall("9878")}
            className="text-gray-400 hover:text-gray-200"
          >
            <FiPhone className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleStartVideoCall("9878")}
            className="text-gray-400 hover:text-gray-200"
          >
            <IoVideocamOutline className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-gray-200">
            <HiOutlineUserPlus className="h-5 w-5" />
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#1e1f22] text-sm rounded-md px-2 py-1 w-36 focus:outline-none"
            />
            <CiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </header>

      {/* Messages area */}
      <div className="flex-1 h-full overflow-hidden">
        <div className="overflow-y-auto h-full p-4 space-y-4">
          {/* Simplified beginning of conversation */}
          <div className="flex flex-col items-center justify-center py-4">
            <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden mb-2">
              {/* <img
                src="/placeholder.svg?height=64&width=64"
                alt="Toàn"
                className="w-full h-full object-cover"
              /> */}
              <AvatarDefault />
            </div>
            <h2 className="text-lg font-bold text-white">Toàn</h2>
            <p className="text-gray-400 text-sm">.tonnd</p>
            <p className="text-gray-400 text-sm mt-2">
              This is the beginning of your direct message history with{" "}
              <span className="font-bold text-white">Toàn</span>.
            </p>
          </div>

          {/* Date separator */}
          <div className="flex items-center justify-center">
            <div className="border-t border-zinc-800 flex-grow"></div>
            <span className="px-2 text-xs text-gray-400">9 October 2023</span>
            <div className="border-t border-zinc-800 flex-grow"></div>
          </div>

          {/* Messages */}
          {messages.map((msg) => (
            <div key={msg.id} className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-dark flex-shrink-0 overflow-hidden">
                {/* <img
                  src={msg.senderAvatar || "/placeholder.svg"}
                  alt={msg.senderName}
                  className="w-full h-full object-cover"
                /> */}
                <AvatarDefault />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white">
                    {msg.senderName}
                  </span>
                  <span className="text-xs text-gray-400">{msg.timestamp}</span>
                </div>

                {isUrl(msg.content) ? (
                  <a href="#" className="mt-1 text-blue-500 hover:underline">
                    {msg.content}
                  </a>
                ) : (
                  <p className="mt-1">{msg.content}</p>
                )}
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message input */}
      <div className="p-4 bg-customDark">
        <form onSubmit={handleSendMessage} className="relative">
          <button
            type="button"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
          >
            <FiPlus className="h-5 w-5" />
          </button>

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message @Toàn"
            className="w-full bg-[#383a40] rounded-md py-2 px-12 focus:outline-none"
          />

          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
            <button type="button" className="text-gray-400 hover:text-gray-200">
              <GoGift className="h-5 w-5" />
            </button>
            <button type="button" className="text-gray-400 hover:text-gray-200">
              <CiImageOn className="h-5 w-5" />
            </button>
            <button type="button" className="text-gray-400 hover:text-gray-200">
              <CiFaceSmile className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DrirectMessages;

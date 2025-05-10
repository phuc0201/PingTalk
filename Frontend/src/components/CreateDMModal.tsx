import React, { useRef, useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";

interface Friend {
  id: string;
  name: string;
  username: string;
  avatar: string;
  selected: boolean;
}

const CreateDMModal: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [friends, setFriends] = useState<Friend[]>([
    {
      id: "1",
      name: "TonND",
      username: "tonnd",
      avatar: "/placeholder.svg?height=40&width=40",
      selected: false,
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleFriendSelection = (id: string) => {
    setFriends(
      friends.map((friend) =>
        friend.id === id ? { ...friend, selected: !friend.selected } : friend
      )
    );
  };
  const selectedFriends = friends.filter((friend) => friend.selected);
  const remainingCount = 9 - selectedFriends.length;

  const removeFriend = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setFriends(
      friends.map((friend) =>
        friend.id === id ? { ...friend, selected: false } : friend
      )
    );
  };

  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="rounded-xl border border-zinc-700 w-96 h-72 bg-[#242429]">
      <div className="p-4 border-b border-gray-700 text-start">
        <h2 className="text-lg font-medium text-zinc-200">Select Friends</h2>
        <p className="text-xs text-gray-400">
          You can add {remainingCount} more friends.
        </p>
      </div>

      <div className="p-4">
        <div
          className={`flex flex-wrap items-center gap-1 bg-[#2a2a2a] rounded-lg px-3 cursor-text border border-zinc-700 mb-2 ${
            selectedFriends.length > 0 ? "px-1" : ""
          }`}
          onClick={handleContainerClick}
        >
          {selectedFriends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center bg-[#3a3a3a] text-sm rounded px-2 py-1 mr-1"
            >
              {friend.name}
              <button
                className="mr-1 text-gray-400 hover:text-white"
                onClick={(e) => removeFriend(e, friend.id)}
              >
                <IoMdClose size={14} />
              </button>
            </div>
          ))}
          <input
            ref={inputRef}
            type="text"
            placeholder={
              selectedFriends.length > 0
                ? "Find or start a conversation"
                : "Type the username of a friend"
            }
            className="flex-grow bg-transparent min-w-[120px] text-gray-300 rounded-2xl py-2 text-sm focus:outline-none focus:ring-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="space-y-2 max-h-60 overflow-y-auto">
          {friends.map((friend) => (
            <div
              key={friend.id}
              className="flex items-center justify-between p-2 hover:bg-[#2a2a2a] rounded-lg cursor-pointer"
              onClick={() => toggleFriendSelection(friend.id)}
            >
              <div className="flex items-center space-x-3">
                {false && (
                  <div className="relative">
                    <img
                      src={friend.avatar || "/placeholder.svg"}
                      alt={friend.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1e1e1e]"></div>
                  </div>
                )}

                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white">
                    <FaDiscord size={20} />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#232428]"></div>
                </div>
                <div>
                  <span className="font-medium">{friend.name}</span>
                  <span className="text-gray-400 text-sm ml-2">
                    {friend.username}
                  </span>
                </div>
              </div>
              <div
                className={`w-5 h-5 rounded border ${
                  friend.selected ? "bg-brand border-brand" : "border-gray-500"
                } flex items-center justify-center`}
              >
                {friend.selected && (
                  <IoCheckmarkOutline className="w-3 h-3 text-white" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4">
        <button className="w-full bg-brand hover:bg-brand/90 text-white py-2 rounded-xl text-sm font-medium transition-transform transform active:scale-95">
          Create DM
        </button>
      </div>
    </div>
  );
};

export default CreateDMModal;

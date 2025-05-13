import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { TbMessagePlus } from "react-icons/tb";
import { CgMoreVerticalAlt } from "react-icons/cg";
import CreateDMModal from "../../components/CreateDMModal";
import { Link } from "react-router-dom";
import AvatarDefault from "../../components/AvatarDefault";
import { FaCheck } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

const friendsList = [
  {
    id: "1",
    name: "Phúc",
    status: "Online",
    avatar: "",
    color: "#5865f2",
  },
  {
    id: "2",
    name: "Phước",
    status: "Offline",
    avatar: "",
    color: "#64E2B7",
  },
  {
    id: "3",
    name: "Thành",
    status: "Offline",
    avatar: "",
    color: "#D50B8B",
  },
];

const pendingRequests = [
  {
    id: 1,
    name: "NguyenVanA",
    status: "Pending",
    avatar: "",
  },
  {
    id: 2,
    name: "TranThiB",
    status: "Pending",
    avatar: "",
  },
];

const Friends: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpenCreateDMModal, setOpenCreateDMModal] = useState<boolean>(false);

  const filteredFriends = friendsList.filter((friend) =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPending = pendingRequests.filter((request) =>
    request.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleMenu = (id: string) => {
    setOpenMenuId(openMenuId == id ? null : id);
  };

  const handleStartVideoCall = (friendId: string) => {
    console.log(`Starting video call with friend ID: ${friendId}`);
    setOpenMenuId(null);
  };

  const handleStartVoiceCall = (friendId: string) => {
    console.log(`Starting voice call with friend ID: ${friendId}`);
    setOpenMenuId(null);
  };

  const handleRemoveFriend = (friendId: string) => {
    console.log(`Removing friend with ID: ${friendId}`);
    setOpenMenuId(null);
  };

  return (
    <div className="flex h-full bg-customDark text-gray-200">
      <div className="flex-1 flex flex-col">
        <header className="flex items-center p-4 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <CiUser className="h-5 w-5 text-gray-400" />
            <h1 className="font-semibold">Friends</h1>
          </div>
          <div className="w-1 h-1 rounded-full bg-zinc-700 mx-4"></div>
          <div className="flex space-x-2">
            <button
              className={`px-3 py-1 text-sm rounded-md transition-all ${
                activeTab === "all" ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={`px-3 py-1 text-sm rounded-md transition-all ${
                activeTab === "pending" ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("pending")}
            >
              Pending
            </button>
            <button
              className={`px-4 py-1 rounded-md transition-all ${
                activeTab !== "add"
                  ? "text-white bg-brand"
                  : "text-brand bg-brand/20"
              }`}
              onClick={() => setActiveTab("add")}
            >
              Add Friend
            </button>
          </div>
          <div className="ml-auto relative cursor-pointer">
            <TbMessagePlus
              onClick={() => setOpenCreateDMModal(!isOpenCreateDMModal)}
              className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer"
            />
            {isOpenCreateDMModal && (
              <div>
                <div
                  onClick={() => setOpenCreateDMModal(!isOpenCreateDMModal)}
                  className="fixed top-0 left-0 right-0 bottom-0"
                ></div>
                <div className="absolute right-0 top-full">
                  <CreateDMModal />
                </div>
              </div>
            )}
          </div>
        </header>

        <div className="flex h-full">
          <div className="flex-1 h-full">
            {activeTab !== "add" && (
              <div className="p-4">
                <div className="relative">
                  <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    className="border-zinc-700 border-[1px] pl-10 text-gray-200 placeholder:text-gray-500 bg-dark w-full py-2 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-blue-200 focus:bg-dark"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="flex-1 p-4">
              {/* ALL */}
              {activeTab === "all" && (
                <div>
                  <div className="text-xs text-gray-400 mb-4">
                    All friends - {filteredFriends.length}
                  </div>
                  {filteredFriends.length > 0 ? (
                    <div className="space-y-2">
                      {filteredFriends.map((friend) => (
                        <div
                          key={friend.id}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800"
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10 rounded-full">
                              {friend.avatar ? (
                                <img
                                  src={friend.avatar}
                                  alt={friend.name}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <AvatarDefault color={friend.color} />
                              )}
                              <div
                                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#232428] ${
                                  friend.status == "Offline"
                                    ? "bg-red-500"
                                    : "bg-green-500 "
                                }`}
                              ></div>
                            </div>
                            <div>
                              <div className="font-medium">{friend.name}</div>
                              <div className="text-xs text-gray-400">
                                {friend.status}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Link
                              to={"/channels/@me/" + friend.id}
                              className="p-2 rounded-full hover:bg-gray-700"
                            >
                              <TbMessagePlus className="h-5 w-5 text-gray-400" />
                            </Link>
                            <div className="relative">
                              <button
                                onClick={() => toggleMenu(friend.id)}
                                className="relative group p-2 rounded-full hover:bg-gray-700 cursor-pointer"
                              >
                                <CgMoreVerticalAlt className="h-5 w-5 text-gray-400" />
                              </button>
                              {openMenuId == friend.id && (
                                <div>
                                  <div
                                    onClick={() => toggleMenu(friend.id)}
                                    className="fixed top-0 left-0 right-0 bottom-0"
                                  ></div>
                                  <div className="absolute z-10 top-[30%] left-1/2 bg-zinc-800 border border-zinc-700 rounded-lg text-start p-2 min-w-44">
                                    <button
                                      onClick={() =>
                                        handleStartVoiceCall(friend.id)
                                      }
                                      className="hover:bg-zinc-700 w-full text-start p-2 px-3 rounded-md text-[13px] font-medium cursor-pointer"
                                    >
                                      Start Voice Call
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleStartVideoCall(friend.id)
                                      }
                                      className="hover:bg-zinc-700 w-full text-start p-2 px-3 rounded-md text-[13px] font-medium cursor-pointer"
                                    >
                                      Start Video Call
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleRemoveFriend(friend.id)
                                      }
                                      className="hover:bg-red-700/10 text-red-400 w-full text-start p-2 px-3 rounded-md text-[13px] font-medium cursor-pointer"
                                    >
                                      Remove Friend
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                      <p>Không tìm thấy bạn bè nào.</p>
                    </div>
                  )}
                </div>
              )}

              {/* PENDING */}
              {activeTab === "pending" && (
                <div>
                  <div className="text-xs text-gray-400 mb-4">
                    Pending - {filteredPending.length}
                  </div>
                  {filteredPending.length > 0 ? (
                    <div className="space-y-2">
                      {filteredPending.map((request) => (
                        <div
                          key={request.id}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full">
                              {request.avatar ? (
                                <img
                                  src={request.avatar}
                                  alt={request.name}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <AvatarDefault color={`#5865f2`} />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{request.name}</div>
                              <div className="text-xs text-gray-400">
                                Incoming Friend Request
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <button className="active:scale-95 text-green-700 hover:text-green-600 bg-zinc-900 text-lg rounded-full flex items-center justify-center h-14 w-14">
                              <FaCheck />
                            </button>
                            <button className="active:scale-95 text-white hover:text-red-400 bg-zinc-900 text-2xl rounded-full flex items-center justify-center h-14 w-14">
                              <IoCloseOutline />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                      <p>No friend requests found.</p>
                    </div>
                  )}
                </div>
              )}

              {/* ADD FRIENDS */}
              {activeTab === "add" && (
                <div className="p-4">
                  <h2 className="text-xl font-medium mb-2">Add Friend</h2>
                  <p className="text-zinc-300 mb-6 text-sm">
                    You can add friends with their PingTalk usernames.
                  </p>

                  <div className="relative flex items-stretch gap-2 mb-4 bg-[#1e1f22] p-2 px-4 rounded-md">
                    <input
                      type="text"
                      className="flex-1 bg-[#1e1f22] focus:bg-[#1e1f22] border-gray-800 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-0 focus:border-0"
                      placeholder="You can add friends with their PingTalk usernames."
                    />
                    <button className="bg-brand p-1 px-3 rounded-md text-white whitespace-nowrap active:scale-95 transition-transform transform">
                      Send Friend Request
                    </button>

                    <div className="absolute right-[3%] bottom-full flex justify-center mt-8">
                      <img
                        src="../assets/wumpus-waving.svg"
                        alt="Wumpus"
                        className=""
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-96 border-l border-gray-800 p-4 flex flex-col">
            <h2 className="font-bold text-lg mb-4">Active Now</h2>
            <div className="flex flex-col items-center justify-center text-center p-4 text-gray-400">
              <h3 className="font-semibold text-lg mb-2">
                It's quiet for now...
              </h3>
              <p className="text-sm">
                When a friend starts an activity - like playing a game or
                hanging out on voice - we'll show it here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;

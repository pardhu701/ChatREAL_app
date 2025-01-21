import { X } from "lucide-react";
import { useAuthStore } from "../lib/useAuthStore";
import useChatStore from "../lib/useChatStore";

// 定义一个ChatHeader组件
const ChatHeader = () => {
  // 从useChatStore中获取selectedUser和setSelectedUser
  const { selectedUser, setSelectedUser } = useChatStore();
  // 从useAuthStore中获取onlineUsers
  const { onlineUsers } = useAuthStore();

  return (
    // 返回一个div，包含一个flex布局，用于显示用户信息和关闭按钮
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              {/* 显示用户头像，如果用户没有头像，则显示默认头像 */}
              <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
            </div>
          </div>

          {/* User info */}
          <div>
            {/* 显示用户全名 */}
            <h3 className="font-medium">{selectedUser.fullName}</h3>
            {/* 显示用户在线状态 */}
            <p className="text-sm text-base-content/70">
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Close button */}
        <button onClick={() => setSelectedUser(null)}>
          <X />
        </button>
      </div>
    </div>
  );
};
export default ChatHeader;
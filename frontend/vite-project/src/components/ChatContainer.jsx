import useChatStore from "../lib/useChatStore"
import { useEffect } from "react"
import ChatHeader from "./ChatHeader.jsx"
import MessageInput from "./MessageInput.jsx"
import MessageSkeleton from "./skele/MessageSkeleton.jsx"
import { useAuthStore } from "../lib/useAuthStore";
export const ChatContainer = () => {

  const { messages, getMessages, isMessagesLoading, selectedUser,subscribeToMessages,  unsubscribeFromMessages } = useChatStore();
  const { authuser } = useAuthStore();
  console.log(messages.senderId===authuser._id)
  console.log("sdfs")
  console.log(authuser)
  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();
    return () => {
      unsubscribeFromMessages();
    }

  }, [getMessages, selectedUser._id,subscribeToMessages,unsubscribeFromMessages]);
  if (isMessagesLoading) return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <MessageSkeleton />
      <MessageInput />
    </div>
  )

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${message.senderId === authuser._id ? "chat-end bg-red-500" : "chat-start bg-blue-500"}`}

           
          >
            <div className=" chat-image avatar">
              <div className="size-10 rounded-full border">
                <img
                  src={
                    message.senderId === authuser._id
                      ? authuser.profilePic || "/smile.jpg"
                      : selectedUser.profilePic || "/smile.jpg"
                  }
                  alt="profile pic"
                />
              </div>
            </div>
            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1">
                {message.createdAt}
              </time>
            </div>
            <div className="chat-bubble flex flex-col">
              {message.image && (
                <img
                  src={message.image}
                  alt="Attachment"
                  className="sm:max-w-[200px] rounded-md mb-2"
                />
              )}
              {message.text && <p>{message.text}</p>}
            </div>
          </div>
        ))}
      </div>

      <MessageInput />
    </div>
  )
}

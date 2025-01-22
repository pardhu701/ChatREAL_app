
import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    // <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
    //   <div className="max-w-md text-center space-y-6">
    //     {/* Icon Display */}
    //     <div className="flex justify-center gap-4 mb-4">
    //       <div className="relative">
    //         <div
    //           className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center
    //          justify-center animate-bounce"
    //         >
    //           <MessageSquare className="w-8 h-8 text-primary " />
    //         </div>
    //       </div>
    //     </div>

    //     {/* Welcome Text */}
    //     <h2 className="text-2xl font-bold">Welcome to Chatty!</h2>
    //     <p className="text-base-content/60">
    //       Select a conversation from the sidebar to start chatting
    //     </p>
    //   </div>
    // </div>
    <div className="flex-1 flex items-center justify-center bg-gray-900">
          <div className="text-center">
          <div className="flex justify-center gap-4 mb-4">
         <div className="relative">
           <div
            className="w-16 h-16 rounded-2xl bg-purple-200 flex items-center
           justify-center animate-bounce"
          >
              <MessageSquare className="w-8 h-8 text-purple-500 " />
           </div>
          </div>
       </div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Welcome to Chat
            </h2>
            <p className="text-gray-400">
              Select a conversation or start a new one
            </p>
          </div>
        </div>
  );
};

export default NoChatSelected;
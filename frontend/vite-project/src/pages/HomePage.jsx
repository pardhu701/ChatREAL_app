//import React from 'react';
import useChatStore  from '../lib/useChatStore.js';
import Sidebar from '../components/Sidebar.jsx';
import  NoChatSelected  from '../components/NoChatSelected.jsx';
import { ChatContainer } from '../components/ChatContainer.jsx';
const HomePage = () => {
const {selectedUser} = useChatStore();

    return (
        <>
         <div className="flex h-[calc(100vh-64px)] bg-gray-900">
    
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
    
    </div>
        </>
          // <div className="flex h-[calc(100vh-64px)] bg-gray-900">
          // <div className="flex items-center justify-center pt-20 px-4">
          //   <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          //     <div className="flex h-full rounded-lg overflow-hidden">
          //       <Sidebar />
    
          //       {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          //     </div>
          //   </div>
          // </div>
    );
}

export default HomePage;

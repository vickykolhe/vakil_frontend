import React, { useState } from 'react';
import Sidebar_lawyer from '../components/Sidebar_lawyer';

const clients = [
  { id: 1, name: "Ravi Sharma", profilePic: "👨🏽" },
  { id: 2, name: "Anita Patel", profilePic: "👩🏽" },
];

const initialMessages = {
  1: [
    { sender: 'lawyer', text: 'Hello Ravi, how can I assist you today?' },
    { sender: 'client', text: 'I want to register a case related to property damage.' },
  ],
  2: [
    { sender: 'lawyer', text: 'Good morning, Anita. how can i help you?' },
  ],
};

function LawyerMessage() {
  const [selectedClient, setSelectedClient] = useState(clients[0]);
  const [messages, setMessages] = useState(initialMessages[selectedClient.id]);

  const handleClientSelect = (client) => {
    setSelectedClient(client);
    setMessages(initialMessages[client.id]);
  };

  const renderMessages = () =>
    messages.map((message, index) => (
      <div
        key={index}
        className={`message ${message.sender === 'lawyer' ? 'lawyer' : 'client'}`}
      >
        {message.text}
      </div>
    ));

  return (
    <div className="flex h-screen overflow-hidden bg-[#222831] text-[#EEEEEE]">
      <Sidebar_lawyer />

      <div className="message-page flex flex-1">
        <div className="sidebar w-1/4 md:w-1/5 bg-[#31363F] p-4 overflow-y-auto border-r border-[#EEEEEE]">
          <h2 className="text-lg font-semibold mb-4">Clients</h2>
          {clients.map((client) => (
            <div
              key={client.id}
              className={`client-item p-2 rounded-md cursor-pointer flex items-center gap-2 ${
                selectedClient.id === client.id ? 'bg-[#76ABAE]' : ''
              }`}
              onClick={() => handleClientSelect(client)}
            >
              <span>{client.profilePic}</span>
              <span>{client.name}</span>
            </div>
          ))}
        </div>

        <div className="chat-area flex flex-col flex-1 bg-[#222831]">
          <header className="chat-header p-4 border-b border-[#EEEEEE] bg-[#31363F]">
            <h3 className="text-xl">{selectedClient.name}</h3>
            <p className="text-sm text-[#76ABAE]">Online</p>
          </header>

          <div className="messages flex-1 p-4 overflow-y-auto space-y-2">
            {renderMessages()}
          </div>

          <div className="message-input p-4 border-t border-[#EEEEEE] bg-[#31363F] flex">
            <input
              type="text"
              className="flex-1 p-2 border border-[#EEEEEE] rounded-md bg-[#222831] text-[#EEEEEE]"
              placeholder="Type your message..."
            />
            <button className="ml-2 px-4 py-2 bg-[#76ABAE] text-[#222831] rounded-md hover:bg-[#5C9698]">
              Send
            </button>
          </div>
        </div>

        <style jsx>{`
          .message-page {
            font-family: Arial, sans-serif;
          }
          .client-item:hover {
            background: #5c9698;
          }
          .messages {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .message {
            max-width: 70%;
            padding: 10px;
            border-radius: 10px;
          }
          .message.client {
            background: #eeeeee;
            align-self: flex-start;
            color: #222831;
          }
          .message.lawyer {
            background: #76abae;
            align-self: flex-end;
            color: #222831;
          }
        `}</style>
      </div>
    </div>
  );
}

export default LawyerMessage;

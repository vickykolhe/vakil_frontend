import React, { useState } from 'react';
import ClientSidebar from '../components/ClientSidebar';

const lawyers = [
  { id: 1, name: "Adv. Rajesh Kumar", profilePic: "👨🏽‍⚖️" },
  { id: 2, name: "Adv. Priya Deshmukh", profilePic: "👩🏽‍⚖️" },
];

const initialMessages = {
  1: [
    { sender: 'lawyer', text: 'Hello! How can I assist you with your case?' },
    { sender: 'client', text: 'I need help with some documents.' },
  ],
  2: [
    { sender: 'lawyer', text: 'Good afternoon! Do you have the details ready?' },
  ],
};

function ClientMessage() {
  const [selectedLawyer, setSelectedLawyer] = useState(lawyers[0]);
  const [messages, setMessages] = useState(initialMessages[selectedLawyer.id]);

  const handleLawyerSelect = (lawyer) => {
    setSelectedLawyer(lawyer);
    setMessages(initialMessages[lawyer.id]);
  };

  const renderMessages = () =>
    messages.map((message, index) => (
      <div
        key={index}
        className={`message ${message.sender === 'client' ? 'client' : 'lawyer'}`}
      >
        {message.text}
      </div>
    ));

  return (
    <div className="message-page flex h-screen bg-[#222831]">
      <ClientSidebar />
      <div className="sidebar">
        <h2 className="sidebar-title">Lawyers</h2>
        {lawyers.map((lawyer) => (
          <div
            key={lawyer.id}
            className={`lawyer-item ${selectedLawyer.id === lawyer.id ? 'active' : ''}`}
            onClick={() => handleLawyerSelect(lawyer)}
          >
            <span>{lawyer.profilePic}</span>
            <span>{lawyer.name}</span>
          </div>
        ))}
      </div>

      <div className="chat-area">
        <header className="chat-header">
          <h3>{selectedLawyer.name}</h3>
          <p>Online</p>
        </header>

        <div className="messages">
          {renderMessages()}
        </div>

        <div className="message-input">
          <input type="text" placeholder="Type your message..." />
          <button>Send</button>
        </div>
      </div>

      <style jsx>{`
        .message-page {
          display: flex;
          height: 100vh;
          font-family: Arial, sans-serif;
        }
        .sidebar {
          width: 25%;
          background: #31363F;
          padding: 20px;
          border-right: 1px solid #76ABAE;
          color: #EEEEEE;
        }
        .sidebar-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #76ABAE;
          margin-bottom: 15px;
        }
        .lawyer-item {
          padding: 12px;
          margin: 8px 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 8px;
          background: #222831;
          color: #EEEEEE;
        }
        .lawyer-item:hover, .lawyer-item.active {
          background: #76ABAE;
          color: #31363F;
        }
        .chat-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #222831;
        }
        .chat-header {
          padding: 12px;
          border-bottom: 1px solid #76ABAE;
          background: #31363F;
          color: #EEEEEE;
        }
        .messages {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: #EEEEEE;
        }
        .message {
          max-width: 70%;
          padding: 12px;
          border-radius: 10px;
          font-size: 1rem;
        }
        .message.client {
          background: #76ABAE;
          color: #222831;
          align-self: flex-end;
        }
        .message.lawyer {
          background: #31363F;
          color: #EEEEEE;
          align-self: flex-start;
        }
        .message-input {
          display: flex;
          padding: 12px;
          border-top: 1px solid #76ABAE;
          background: #31363F;
        }
        .message-input input {
          flex: 1;
          padding: 12px;
          border-radius: 5px;
          border: 1px solid #76ABAE;
          color: #31363F;
          background: #EEEEEE;
        }
        .message-input button {
          padding: 12px;
          background: #76ABAE;
          color: #222831;
          border: none;
          border-radius: 5px;
          margin-left: 12px;
          cursor: pointer;
        }
        .message-input button:hover {
          background: #4D6F6F;
        }
      `}</style>
    </div>
  );
}

export default ClientMessage;

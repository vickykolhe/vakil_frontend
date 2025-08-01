import React from 'react'

function NotificationPanel_lawyer() {
    const notifications = [
        { id: 1, message: 'Case #123 updated', time: '2 hours ago' },
        { id: 2, message: 'Meeting scheduled with Client A', time: '1 day ago' },
      ];
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-64 overflow-y-auto">
      <h2 className="text-xl font-semibold">Notifications</h2>
      <ul className="mt-4">
        {notifications.map((note) => (
          <li key={note.id} className="border-b py-2">
            <p>{note.message}</p>
            <span className="text-sm text-gray-500">{note.time}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NotificationPanel_lawyer

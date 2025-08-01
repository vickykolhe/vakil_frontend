import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Sidebar_lawyer from '../components/Sidebar_lawyer';

const localizer = momentLocalizer(moment);

const LawyerMeetings = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
    location: '',
    description: '',
    reminderTime: 1,
  });

  const handleEventSubmit = () => {
    setEvents([...events, { ...newEvent, start: new Date(newEvent.start), end: new Date(newEvent.end) }]);
    setShowModal(false);
    setNewEvent({
      title: '',
      start: '',
      end: '',
      location: '',
      description: '',
      reminderTime: 1,
    });
  };

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='flex h-screen' style={{ backgroundColor: '#222831', color: '#EEEEEE', borderRadius: '10px' }}>
      
      <Sidebar_lawyer />
      {/* Calendar Component */}
      <div className='flex-1 flex flex-col ' style={{ backgroundColor: '#31363F', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
      <h2 className ='text-2xl p-4'  style={{ color: '#76ABAE' }}>Lawyer Dashboard - Calendar</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600, width: '100%' }}
          components={{
            toolbar: ({ label, onNavigate }) => (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <button
                  onClick={() => onNavigate('PREV')}
                  style={{ color: 'EEEEEE', fontSize: '16px', background: '222813', border: 'none', cursor: 'pointer' }}
                >
                  Back
                </button>
                <span style={{ color: '#76ABAE', fontSize: '18px' }}>{label}</span>
                <button
                  onClick={() => onNavigate('NEXT')}
                  style={{ color: 'EEEEEE', fontSize: '16px', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Next
                </button>
                <button
                  onClick={() => onNavigate('TODAY')}
                  style={{ color: 'EEEEEE', fontSize: '16px', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Today
                </button>
              </div>
            ),
          }}
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
  {/* Button to Add New Event */}
  <button
    style={{
      backgroundColor: '#76ABAE',
      color: '#FFFFFF',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    }}
    onClick={() => setShowModal(true)}
  >
    Schedule New Event
  </button>
  <button
    style={{
      backgroundColor: '#76ABAE',
      color: '#FFFFFF',
      padding: '12px 24px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    }}
    onClick={() => setShowModal(true)}
  >
    Set New Reminder
  </button>
</div>

      
      {/* Modal for Adding New Event */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#222831',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            width: '300px',
          }}
        >
          <h3 style={{ color: '#EEEEEE' }}>New Event Details</h3>
          
          {/* Event Form */}
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="title" style={{ color: '#76ABAE' }}>Meeting Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newEvent.title}
                onChange={handleEventChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '5px',
                  border: '1px solid #76ABAE',
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="start" style={{ color: '#76ABAE' }}>Start Date and Time:</label>
              <input
                type="datetime-local"
                id="start"
                name="start"
                value={newEvent.start}
                onChange={handleEventChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '5px',
                  border: '1px solid #76ABAE',
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="end" style={{ color: '#76ABAE' }}>End Date and Time:</label>
              <input
                type="datetime-local"
                id="end"
                name="end"
                value={newEvent.end}
                onChange={handleEventChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '5px',
                  border: '1px solid #76ABAE',
                }}
              />
            </div>
            <div style={{   marginBottom: '15px' }}>
              <label htmlFor="location" style={{ color: '#76ABAE' }}>Location/Link:</label>
              <input
                type="text"
                id="location"
                name="location"
                value={newEvent.location}
                onChange={handleEventChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '5px',
                  border: '1px solid #76ABAE',
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="description" style={{ color: '#76ABAE' }}>Agenda/Notes:</label>
              <textarea
                id="description"
                name="description"
                value={newEvent.description}
                onChange={handleEventChange}
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '5px',
                  border: '1px solid #76ABAE',
                  height: '100px',
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="reminderTime" style={{ color: '#76ABAE' }}>Reminder Time (in minutes):</label>
              <input
                type="number"
                id="reminderTime"
                name="reminderTime"
                value={newEvent.reminderTime}
                onChange={handleEventChange}
                min="1"
                style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '5px',
                  border: '1px solid #76ABAE',
                }}
              />
            </div>
            <button
              type="button"
              onClick={handleEventSubmit}
              style={{
                backgroundColor: '#76ABAE',
                color: '#FFFFFF',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Save Event
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              style={{
                backgroundColor: '#FF6B6B',
                color: '#FFFFFF',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%',
                marginTop: '15px',
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Overlay to close the modal */}
      {showModal && <div onClick={() => setShowModal(false)} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
      }} />}
    </div>
  );
};

export default LawyerMeetings;

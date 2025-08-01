import React from 'react'

function StatsWidgets_lawyer({ title, count }) {
  return (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-3xl mt-2">{count}</p>
        </div>
    
  )
}

export default StatsWidgets_lawyer;

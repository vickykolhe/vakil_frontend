import React from 'react'

function CaseOverview_lawyer() {
    const cases = [
        { id: 1, client: 'Client A', status: 'Pending', deadline: 'Oct 25' },
        { id: 2, client: 'Client B', status: 'In Progress', deadline: 'Nov 1' },
      ];
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-64 overflow-y-auto">
      <h2 className="text-xl font-semibold">Case Overview</h2>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="text-left">Client</th>
            <th className="text-left">Status</th>
            <th className="text-left">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((caseItem) => (
            <tr key={caseItem.id} className="border-b">
              <td className="py-2">{caseItem.client}</td>
              <td className="py-2">{caseItem.status}</td>
              <td className="py-2">{caseItem.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CaseOverview_lawyer

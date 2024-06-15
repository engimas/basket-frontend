import React from 'react';

interface DairyProduct {
  name: string;
  type: string;
  amount: string;
  status: string | null | undefined;
}

function TableOrderUI(props: { dairy: DairyProduct[], handleStatusChange: (index: number, status: string) => void }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {props.dairy.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.status}</td>
              <td>
                {item.status !== 'ongoing' && item.status !== 'completed' && (
                  <>
                    <button className="px-2 py-1 rounded-md bg-accent mx-2" onClick={() => props.handleStatusChange(index, 'ongoing')}>Accept</button>
                    <button className="px-2 py-1 rounded-md bg-red-400" onClick={() => props.handleStatusChange(index, 'declined')}>Decline</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableOrderUI;

import React, { useState } from 'react';
import ghee from '../../assets/category/ghee.jpg';
import milk1 from '../../assets/category/milk1.png';
import paneer from '../../assets/category/paneer.png';
import yogurt from '../../assets/category/yogurt.webp';
import TableOrderUI from '../../components/tableOrder';

const initialDairy = [
  {
    name: 'Ghee',
    img: ghee,
    type: 'Clarified Butter',
    amount: '500g',
    status: 'ongoing',
  },
  {
    name: 'Milk',
    img: milk1,
    type: 'Beverage',
    amount: '1L',
    status: null, // Unknown status
  },
  {
    name: 'Yogurt',
    img: yogurt,
    type: 'Fermented Dairy',
    amount: '200g',
    status: 'ongoing',
  },
  {
    name: 'Paneer',
    img: paneer,
    type: 'Cheese',
    amount: '250g',
    status: 'completed',
  },
];

function Orders() {
  const [stocks, setStocks] = useState(initialDairy);

  const handleStatusChange = (index: number, status: string) => {
    const updatedStocks = [...stocks];
    if (stocks[index].status !== 'ongoing' && stocks[index].status !== 'completed') {
      if (status === 'declined') {
        updatedStocks.splice(index, 1); // Remove item from array on decline
      } else {
        updatedStocks[index].status = status;
      }
      setStocks(updatedStocks);
    } else {
      alert(`Cannot change status for ${stocks[index].name}`);
    }
  };

  return (
    <div>
      <h2 className='text-3xl'>Orders</h2>
      <TableOrderUI dairy={stocks} handleStatusChange={handleStatusChange} />
    </div>
  );
}

export default Orders;

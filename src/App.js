import React, { useState } from 'react'

function Tracker() {
  
const [name,setname] = useState("");
const [amount,setamount] = useState("");
const [category,setcategory]= useState("");
const [expenses,setexpenses] = useState([]);
const [filtercategory,setfiltercategory] = useState("All");


const addexpense = ()=>{
      if(!name || !amount || !category){
        alert("Kindly fill all the fields!");
        return;
      }
      const newexpence = {
        id: Date.now(),
        name,
        amount: parseFloat(amount),
        category,
      };

      setexpenses((prevexpenses)=>[...prevexpenses,newexpence]);

      setname('');
      setamount('');
      setcategory('');
};
const removeExpense = (id) => {
  setexpenses((prevexpenses) => prevexpenses.filter((expense) => expense.id !== id));
};

    const filteredexpenses = 
    filtercategory === 'All' ? expenses : expenses.filter((expense)=>expense.category === filtercategory);
    const totalExpense = filteredexpenses.reduce((total, expense) => total + expense.amount, 0);

  
    return (
      <>
      <h1 className="text-2xl font-semibold text-center pt-2">Expense Tracker</h1>
      <div className='flex items-center justify-center space-x-4'>
      
      
      <input className='input-common'
      type='text'
      placeholder='Enter expense description'
      value={name}
      onChange={(e)=>setname(e.target.value)}
      
      />
      <input className='input-common'
      type='text'
      placeholder='Enter Amount'
      value={amount}
      onChange={(e)=>setamount(e.target.value)}
     
      
      />
       <select className='input-common'
       value={category}
       onChange={(e)=>setcategory(e.target.value)}
       >
        <option value="">Select Category</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="entertainment">Entertainment</option>
       </select>
      <button className="button-common"onClick={addexpense}>Add Expence</button>
      </div>
      <div className='flex flex-col space-y-2 items-center mt-6'>
      <h3 className='sub-headings-common'>Filter Expenses:</h3>
      <select className='input-common'
       value={filtercategory}
       onChange={(e)=>setfiltercategory(e.target.value)}
       >
        <option value="All">All</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="entertainment">Entertainment</option>
       </select>


      <h3 className='sub-headings-common'>Expense List:</h3>
      <ul>
        {filteredexpenses.map((expense)=>(
          <li className='border-2 rounded-lg flex  items-center justify-between p-4 m-2' key = {expense.id}>
            <div className='flex items-center space-x-4' >
           <span className='font-medium'> {expense.name} </span>
           <span className='font-medium'> - </span>
           <span className='font-medium'> ${expense.amount} </span>
           <span className='italic text-gray-500'>({expense.category}) </span>
            <button className="button-del" onClick={() => removeExpense(expense.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <h3 className='sub-headings-common'>Total Expenses: ${totalExpense.toFixed(2)}</h3>
      </div>
      </>
      
    )
  
}

export default Tracker;

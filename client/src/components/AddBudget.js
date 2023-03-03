// import React, { useState } from 'react';
// import Budget from 'server/models/Budget.js';

// function budgetSheet(){
//     const [budget, setBudget] = useState([]);

//     const addBudgetItem = (item) => {
//         const newBudget = [item, ...budget];

//         setBudget(newBudget)
//     }

//     const removeBudgetItem = (id) => {
//         const updatedBudget = [...budget].filter((item) => item.id !== id);

//         setBudget(updatedBudget);
//     };

//     return(
//         <div>
//             <h1>Write down your expenses and income</h1>
//             <Budget
//             budget={budget}
//             addBudgetItem={addBudgetItem}
//             removeBudgetItem={removeBudgetItem}
//             ></Budget>
//         </div>
//     )
// }

// export default budgetSheet;
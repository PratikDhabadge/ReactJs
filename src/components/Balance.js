import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

//Money formatter function
function moneyFormatter(num) {
  let p = num.split('.');
  return (
    '₹ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

const Balance = () => {
  const {transactions} =useContext(GlobalContext)
  
  const amounts= transactions.map(transaction=> transaction.amount)
  const total=amounts.reduce((acc,item)=>(acc+=item), 0).toFixed(2)
  
  return (
    <>
        <h4>Your Balance</h4>
        <h1 id='balance'>{moneyFormatter(total)}</h1>
    </>
  )
}
export default Balance
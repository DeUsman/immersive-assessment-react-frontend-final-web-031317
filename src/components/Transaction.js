import React from 'react'

const Transaction = (props) => {
	
  return (
    <tr>
      <td>{props.trans.posted_at}</td>
      <td>{props.trans.description}</td>
      <td>{props.trans.category}</td>
      <td>{props.trans.amount}</td>
    </tr>
  )
}

export default Transaction

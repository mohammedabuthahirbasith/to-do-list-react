import React from 'react'
import LineItem from './LineItem';

export const ItemsList = ({items, handleCheck, onDelete}) => {
  return (
    <ul>
        {items.map((item) => (
          <LineItem 
          item = {item}
          key={item.id}
          handleCheck = {handleCheck}
          onDelete = {onDelete}
          />
        ))}
      </ul>
  )
}

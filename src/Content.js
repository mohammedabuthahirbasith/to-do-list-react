import React from 'react'
import { ItemsList } from './ItemsList';



const Content = ({items, handleCheck, onDelete}) => {

  return (
    <main>
      {(items.length) ? (
        <ItemsList 
          items = {items}
          handleCheck = {handleCheck}
          onDelete = {onDelete}
        />
      ) : (<p style={{marginTop:'2rem'}} >Your list is empty</p>)
      }
      
    </main>
  )
}

export default Content
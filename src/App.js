import React, { useState } from 'react'
import './App.css';
const App = () => {
  const [input, setInput] = useState();
  const [items, setItems] = useState([]);

  // ! For add  item
  const addItems = () => {
    console.log("Clicked")

    if (input == null) {
      alert("Please Insert")

    }

    else {
      setItems([...items, input])
    }
    setInput("")


  }

  // ! For Delete All
  const removeAll = () => {
    setItems([])
  }

  // ! for deleteItem
  const deleteItem = (itemInd) => {
    const newItems = items.filter((elem, index) => {
      return index != itemInd
    })
    setItems(newItems)


  }




  return (
    <div>
      <div id="container" className='mt-5'>
        <h1>To-Do List Items <i className="fa fa-plus" onClick={addItems}    ></i></h1>
        <input type="text" placeholder="Add New Todo" value={input} onChange={(e) => { setInput(e.target.value) }} />

        {
          items.map((elem, index) => {
            return (
              <div className=" my-flex align-item-center">
                <h4>{elem}</h4>
                <i className="ml-5 mt-3 fa fa-trash" aria-hidden="true" onClick={() => deleteItem(index)}></i>
              </div>
            )

          })
        }



      </div>
      <div className='center'>
        <button className=' btn btn-danger' onClick={removeAll}> Remove All</button>

      </div>



    </div>
  )
}

export default App

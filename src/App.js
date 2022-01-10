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
      <div id="container">
        <h1>To-Do List <i className="fa fa-plus" onClick={addItems}    ></i></h1>
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

      <button className='btn btn-danger text-center' onClick={removeAll}> Remove All</button>



    </div>
  )
}

export default App

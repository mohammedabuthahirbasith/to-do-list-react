import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from 'react';
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
    const API_URL = 'http://localhost:3500/items';
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('')
    const [search, setSearch] = useState('')
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
      const fetchItems = async () => {
        try{
          const response = await fetch(API_URL);
          if(!response.ok) throw Error("data not received")
          const listItems = await response.json();
          console.log(listItems)
          setItems(listItems);
      }catch (err){
        setFetchError(err.message);
      }
     }

     (async () => await fetchItems())()
    }, [])

    const addItem = (item) => {
      const id = items.length ? items[items.length-1].id + 1 : 1;  
      const addNewItem = {id, checked:false, item}
      const listItems = [...items, addNewItem]
      setItems(listItems)
    }

    const handleCheck = (id) => {
      const listItems = items.map((item) => 
      item.id===id ? {...item, checked:!item.checked} : item)
      setItems(listItems)
    }

    const onDelete = (id) => {
      const listItems = items.filter((item) => 
      item.id!==id)
      setItems(listItems)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!newItem) return;
      console.log(newItem);
      addItem(newItem)
      setNewItem('')
    }

  return (
    <div className="App">
      <Header title="To do list"/>
      <AddItem 
        newItem = {newItem}
        setNewItem ={setNewItem}
        handleSubmit = {handleSubmit}
      />

      <SearchItem
        search = {search}
        setSearch = {setSearch}
      />

      <Content
        items =  {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        onDelete = {onDelete}
      />
      <Footer 
        length = {items.length}
      />
    </div>
  );
}

export default App;

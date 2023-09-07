import { useState } from "react";
import Logo from './Logo';
import Form from './Form';
import Stats from "./States";
import PackingList from "./PackingList";
/*
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
*/

export default function App() {
  const [items, setItems] = useState([]);

  function handelAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeletItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList(){
    const confirmed = window.confirm('Are you sure you want to delet all items');

    if(confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeletItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList} 
      />
      <Stats items={items} />
    </div>
  );
}

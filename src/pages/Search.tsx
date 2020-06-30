import * as React from 'react';
import { useState } from 'react';

export const Search = () => {
  const [initialItem, setInitialItem] = useState([
    'apple',
    'tree',
    'pen',
    'mike',
    'dog',
    'cat',
    'iphone',
    'book',
  ]);
  const [items, setItems] = useState<string[]>([]);
  // const [items, setItems] = useState([
  //   'apple',
  //   'tree',
  //   'pen',
  //   'mike',
  //   'dog',
  //   'cat',
  //   'iphone',
  //   'book',
  // ]);
  // componentDidMount() {
  //   this.setState({ items: this.state.initialItem });
  // }

  const filterList = (e: any) => {
    // const updateList = items.filter((item) => {
    const updateList = initialItem.filter((item) => {
      return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    setItems(updateList);
  };

  return (
    <div>
      <form action="">
        <input type="text" placeholder="search" onChange={filterList} />
      </form>
      <div>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </div>
    </div>
  );
};

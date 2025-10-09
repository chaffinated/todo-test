import { useState } from 'react';
import { ToDoList } from './List';
import { type ToDoItem } from './types';

const LS_TODO_KEY = 'todos';

type ToDoProps = {
  filter: null | 'completed' | 'incomplete'
}

export function ToDo(props: ToDoProps) {
  const { filter } = props;

  const initialItemStr = localStorage.getItem(LS_TODO_KEY);
  const initialItems: ToDoItem[] = initialItemStr
    ? JSON.parse(initialItemStr)
    : [];
  const [items, setItems] = useState(initialItems);

  const handleChange = (newItems: ToDoItem[]) => {
    console.log('new items', newItems)
    localStorage.setItem(LS_TODO_KEY, JSON.stringify(newItems));
    setItems(newItems);
    console.log(newItems)
  }

  return (
    <ToDoList
      items={items}
      onChange={handleChange}
      filter={filter}
    />
  )
}

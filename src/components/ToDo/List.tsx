import { useState, type ChangeEvent } from 'react';
import { type ToDoItem } from './types';
import { ToDoListItem } from './ListItem';
import { Input } from '../Input';
import { Button } from '../Button';


type ToDoProps = {
  items: ToDoItem[];
  filter: null | 'completed' | 'incomplete'
  onChange: (items: ToDoItem[]) => void;
};

export function ToDoList(props: ToDoProps) {
  const { items, filter, onChange } = props;
  const [newItemTitle, setNewItemTitle] = useState<string>('');
  const filteredItems = filter
    ? items.filter((item) => filter === 'completed' ? item.completed : item.completed === false)
    : items;
  
  const makeOnChange = (item: ToDoItem) => () => {
    const newItems = items.map((i) => {
      if (i.title !== item.title) return i;
      return {
        ...i,
        ...item,
      };
    });
    onChange(newItems);
  };

  const onAddItem = () => {
    if (newItemTitle.length === 0) return;
    onChange([...items, { title: newItemTitle, completed: false }]);
    setNewItemTitle('');
  };

  const handleUpdateItemTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewItemTitle(e.target.value);
  }

  return (
    <div className='p-4'>
      <ul className="list-none">
        { filteredItems.map((item, i) => {
          return (
            <ToDoListItem
              key={`${i}-${item.title}`}
              item={item}
              onChange={makeOnChange(item)}
            />
          )
        }) }
      </ul>

      <div className='flex flex-row space-x-2'>
        <Input
          type="text"
          placeholder="Add Items"
          required minLength={1}
          onChange={handleUpdateItemTitle}
          value={newItemTitle}
        />
        <Button type='submit' onClick={onAddItem}>
          Add new To Do
        </Button>
      </div>
    </div>
  );
}

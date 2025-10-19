import { useEffect, useState, type ChangeEvent } from 'react';
import { useUnit } from 'effector-react';
import { $todos, todoApi } from '../../stores/todo';
import { ToDoListItem } from './ListItem';
import { Input } from '../Input';
import { Button } from '../Button';


type ToDoProps = {
  filter?: null | 'completed' | 'incomplete'
};

export function ToDoList(props: ToDoProps) {
  const { filter } = props;
  const [newItemTitle, setNewItemTitle] = useState<string>('');
  const items = useUnit($todos);
  const filteredItems = filter
    ? items.filter((item) => filter === 'completed' ? item.completed : item.completed === false)
    : items;
  
  const onAddItem = () => {
    if (newItemTitle.length === 0) return;
    todoApi.addItem({ title: newItemTitle, completed: false });
    setNewItemTitle('');
  };

  const handleUpdateItemTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNewItemTitle(e.target.value);
  };

  useEffect(() => {
    todoApi.initialize();
  }, [])

  return (
    <div>
      <ul className="list-none my-4">
        { filteredItems.map((item, i) => {
          return (
            <ToDoListItem
              key={`${i}-${item.title}`}
              item={item}
              onChange={todoApi.updateItem}
            />
          )
        }) }
      </ul>

      <div className='flex flex-row space-x-2'>
        <Input
          className='grow'
          name='newToDoTitle'
          type="text"
          placeholder="Add Items"
          required
          minLength={1}
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

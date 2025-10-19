import { type ToDoItem } from "../../stores/todo";
import { Input } from "../Input";


type ToDoListItemProps = {
  item: ToDoItem;
  onChange: (item: ToDoItem) => void;
}

export function ToDoListItem(props: ToDoListItemProps) {
  const { item, onChange } = props;

  return (
    <li className='flex flex-row space-x-2 my-3'>
      <Input
        name='completed'
        type="checkbox"
        checked={item.completed}
        onClick={(e) => {
          const completed = e.currentTarget.checked;
          onChange({ ...item, completed });
        }}
      />
      <p>{ item.title }</p>
    </li>
  )
}

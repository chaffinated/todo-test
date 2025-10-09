import { type ToDoItem } from "./types";


type ToDoListItemProps = {
  item: ToDoItem;
  onChange: () => void;
}

export function ToDoListItem(props: ToDoListItemProps) {
  const { item, onChange } = props;

  return (
    <li className='flex flex-row space-x-2'>
      <input type="checkbox" checked={item.completed} onClick={onChange} />
      <p>{ item.title }</p>
    </li>
  )
}

import { Tabs } from "./Tabs";
import { ToDoList } from "./ToDo";

export function Home() {
  return (
    <Tabs
      className='tabs border border-gray-200 shadow rounded p-6 max-w-full md:max-w-2/3'
      tabs={[
        { key: 'all', name: 'All' },
        { key: 'incomplete', name: 'Incomplete' },
        { key: 'completed', name: 'Completed' },
      ]}
    >
      <ToDoList />
      <ToDoList filter='incomplete' />
      <ToDoList filter='completed' />
    </Tabs>
  )
}
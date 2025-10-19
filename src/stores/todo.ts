import { createApi, createStore } from "effector";


export type ToDoItem = {
  title: string;
  completed?: boolean;
};


const LS_TODO_KEY = 'todos';


export const $todos = createStore<ToDoItem[]>([]);


let hasInitialized = false;

export const todoApi = createApi($todos, {
  initialize(store) {
    if (hasInitialized) return store;
    const initialItemStr = localStorage.getItem(LS_TODO_KEY);
    const initialItems: ToDoItem[] = initialItemStr
      ? JSON.parse(initialItemStr)
      : [];
    return initialItems;
  },
  addItem(store, item: ToDoItem) {
    const newItems = store.concat(item);
    localStorage.setItem(LS_TODO_KEY, JSON.stringify(newItems));
    return newItems;
  },
  removeItem(store, itemToRemove: ToDoItem) {
    const newItems = store.concat();
    const idx = newItems.findIndex((item) => item.title === itemToRemove.title);
    if (idx < 0) return newItems;
    newItems.splice(idx, 1);
    localStorage.setItem(LS_TODO_KEY, JSON.stringify(newItems));
    return newItems;
  },
  updateItem(store, item: ToDoItem) {
    const newItems = store.map((i) => {
      if (i.title !== item.title) return i;
      return {
        ...i,
        ...item,
      };
    });
    localStorage.setItem(LS_TODO_KEY, JSON.stringify(newItems));
    return newItems;
  },
});


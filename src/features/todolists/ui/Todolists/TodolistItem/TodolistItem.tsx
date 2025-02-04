import { useAppDispatch } from "../../../../../common/hooks/useAppDispatch"
import { CreateItemForm } from "../../../../../common/components/CreateItemForm/CreateItemForm"
import { createTaskAC } from "../../../model/tasks-reducer"
import { Todolist } from "../../../model/todolists-reducer"
import { FilterButtons } from "./FilterButtons/FilterButtons"
import { Tasks } from "./Tasks/Tasks"
import { TodolistTitle } from "./TodolistTitle/TodolistTitle"

type Props = {
  todolist: Todolist
}

export const TodolistItem = (props: Props) => {

  const {
    todolist: {id, filter},
  } = props

  const dispatch = useAppDispatch()

  const createTask = (title: string) => {
    dispatch(createTaskAC({todolistId: id, title}))
  }

  return (
      <div>
        <TodolistTitle todolist={props.todolist}/>
        <CreateItemForm onCreateItem={createTask}/>
        <Tasks todolist={props.todolist}/>
        <FilterButtons todolist={props.todolist}/>
      </div>
  )
}

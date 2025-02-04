import { List } from "@mui/material"
import { Todolist } from "../../../../model/todolists-reducer"
import { useAppSelector } from "../../../../../../common/hooks/useAppSelector"
import { selectTasks } from "../../../../model/tasks-selectors"
import { TaskItem } from "./TaskItem/TaskkItem"



type Props = {
    todolist: Todolist
}

export const Tasks = ({todolist}: Props) => {

    const {id, filter} = todolist

    const tasks = useAppSelector(selectTasks)
   
      const todolistTasks = tasks[id]
            let filteredTasks = todolistTasks
            if (filter === 'active') {
              filteredTasks = todolistTasks.filter(task => !task.isDone)
            }
            if (filter === 'completed') {
              filteredTasks = todolistTasks.filter(task => task.isDone)
            }
  
  return (
    <>
    {filteredTasks.length === 0 ? (
            <p>Тасок нет</p>
        ) : (
            <List>
              {filteredTasks.map(task => {
                return (
                    <TaskItem key={task.id} todolistId={id} task={task}/>
                )
              })}
            </List>
        )}
    </>
  )
}
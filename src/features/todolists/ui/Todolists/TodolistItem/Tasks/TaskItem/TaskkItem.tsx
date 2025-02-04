import DeleteIcon from '@mui/icons-material/Delete'
import { Checkbox, IconButton, ListItem } from '@mui/material'
import { ChangeEvent } from 'react'
import { useAppDispatch } from '../../../../../../../common/hooks/useAppDispatch'
import { EditableSpan } from '../../../../../../../common/components/EditableSpan/EditableSpan'
import { changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC, Task } from '../../../../../model/tasks-reducer'
import { getListItemSx } from './TaskItem.styles'

type Props = {
  todolistId: string,
  task: Task
}

export const TaskItem = ({task, todolistId}: Props) => {

    const dispatch = useAppDispatch()
   
    const deleteTask = () => {
        dispatch(deleteTaskAC({todolistId, taskId: task.id}))
      }

      const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatusValue = e.currentTarget.checked
        dispatch(changeTaskStatusAC({todolistId, taskId: task.id, isDone: newStatusValue}))
      }

      const changeTaskTitle = (title: string) => {
        dispatch(changeTaskTitleAC({todolistId, taskId: task.id, title}))
      }

  return (
    <ListItem sx={getListItemSx(task.isDone)}>
    <div>
      <Checkbox checked={task.isDone} onChange={changeTaskStatus}/>
      <EditableSpan value={task.title} onChange={changeTaskTitle} />
    </div>
    <IconButton onClick={deleteTask}>
      <DeleteIcon />
    </IconButton>
  </ListItem>
  )
}
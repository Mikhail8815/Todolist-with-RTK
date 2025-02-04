import { TasksState } from './tasks-reducer';
import type {RootState} from '../../../app/store'

export const selectTasks = (state: RootState): TasksState => state.tasks
import { Container, Grid, Paper } from "@mui/material"
import { CreateItemForm } from "../common/components/CreateItemForm/CreateItemForm"
import { useAppDispatch } from "../common/hooks/useAppDispatch"
import { changeTodolistFilterAC, changeTodolistTitleAC, createTodolistAC, deleteTodolistAC, FilterValues } from "../features/todolists/model/todolists-reducer"
import { Todolists } from "../features/todolists/ui/Todolists/Todolists"


export const Main = () => {

    

        const dispatch = useAppDispatch()
   
        //Для тудулистов
   
    
      const createTodolist = (title: string) => {
        dispatch(createTodolistAC(title))
      }
    
      
    
      
   
    return (
        <Container maxWidth={'lg'}>
        <Grid container sx={{mb: '30px'}}>
          <CreateItemForm onCreateItem={createTodolist}/>
        </Grid>
        <Grid container spacing={4}>
           <Todolists />
        </Grid>
      </Container>
    )
  }
import { AppBar, Container, IconButton, Switch, Toolbar } from "@mui/material"
import { changeThemeModeAC } from "../../../app/app-reducer"
import { selectThemeMode } from "../../../app/app-selectors"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { getTheme } from "../../theme/theme"
import { NavButton } from "../NavButton/NavButton"
import MenuIcon from '@mui/icons-material/Menu'
import { containerSx } from "../../styles/container.styles"

export const Header = () => {
    const themeMode = useAppSelector(selectThemeMode)
   
    const dispatch = useAppDispatch()
   
    const theme = getTheme(themeMode)
   
    const changeMode = () => {
      dispatch(changeThemeModeAC({themeMode: themeMode == 'light' ? 'dark' : 'light'}))
    }
   
    return (
        <AppBar position="static" sx={{mb: '30px'}}>
            <Toolbar>
              <Container maxWidth={'lg'} sx={containerSx}>
                <IconButton color="inherit">
                  <MenuIcon/>
                </IconButton>
                <div>
                  <NavButton>Sign in</NavButton>
                  <NavButton>Sign up</NavButton>
                  <NavButton background={theme.palette.primary.dark}>Faq</NavButton>
                  <Switch color={'default'} onChange={changeMode} />
                </div>
              </Container>
            </Toolbar>
          </AppBar>
    )
  }
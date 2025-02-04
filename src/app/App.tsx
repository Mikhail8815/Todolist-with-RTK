import './App.css'

import CssBaseline from '@mui/material/CssBaseline'
import {ThemeProvider} from '@mui/material/styles'
import {useAppSelector} from '../common/hooks/useAppSelector'
import {selectThemeMode} from '../app/app-selectors'
import {getTheme} from '../common/theme/theme'
import { Header } from '../common/components/Header/Header'
import { Main } from './Main'

export const App = () => {
 
  const themeMode = useAppSelector(selectThemeMode)
  const theme = getTheme(themeMode)

  return (
      <ThemeProvider theme={theme}>
        <div className={'app'}>
          <CssBaseline />
          <Header />
          <Main />
        </div>
      </ThemeProvider>
  )
}

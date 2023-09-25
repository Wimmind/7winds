import { FC } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import styles from './App.module.scss'
import { Header } from './components/Header'
import { EntityLayout } from './components/Entity-layout'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      light: '#A1A1AA',
      dark: '#A1A1AA',
      contrastText: '#A1A1AA',
    },
  },
})

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.wrapper}>
        <Header />
        <main>
          <EntityLayout />
        </main>
      </div>
    </ThemeProvider>
  )
}

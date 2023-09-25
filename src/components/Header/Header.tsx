import { FC } from 'react'
import { Apps, Reply } from '@mui/icons-material'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import styles from './Header.module.scss'

export const Header: FC = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles['tools-wrapper']}>
        <Apps sx={{ color: '#A1A1AA' }} />
        <Reply sx={{ color: '#A1A1AA' }} />
      </div>
      <Tabs value={1}>
        <Tab label="Просмотр" value={1} className={styles.tab} />
        <Tab label="Управление" value={2} className={styles.tab} />
      </Tabs>
    </header>
  )
}

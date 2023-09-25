import { FC } from 'react'
import { Dashboard } from '@mui/icons-material'

import styles from './NavBar.module.scss'
import { entitiesTitleMap } from './mock'

export const NavBar: FC = () => {
  return (
    <div className={styles.wrapper}>
      {entitiesTitleMap.map((item) => (
        <div className={styles.item}>
          <Dashboard />
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

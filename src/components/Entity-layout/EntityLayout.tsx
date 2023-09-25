import { FC } from 'react'
import { KeyboardArrowDown } from '@mui/icons-material'

import { NavBar } from '../NavBar'
import { Entity } from '../Entity/Entity'
import styles from './Entity.module.scss'

export const EntityLayout: FC = () => {
  return (
    <div>
      <div className={styles['title__wrapper']}>
        <div className={styles['select__wrapper']}>
          <div className={styles['select__layout']}>
            <span className={styles['select__title']}>Название проекта</span>
            <span className={styles['select__sub-title']}>Аббревиатура</span>
          </div>
          <KeyboardArrowDown sx={{ color: '#fff' }} />
        </div>
        <div className={styles['title__container']}>
          <h1 className={styles.title}>Строительно-монтажные работы</h1>
        </div>
      </div>

      <div className={styles['content__wrapper']}>
        <div className={styles['content__navbar']}>
          <NavBar />
        </div>

        <Entity />
      </div>
    </div>
  )
}

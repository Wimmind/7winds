import { FC } from 'react'

import { useGetEntityRowTreeQuery } from '../../services/entityApi'
import { EntityRow } from '../Entity-row'
import styles from './Entity.module.scss'

export const Entity: FC = () => {
  const { data = [] } = useGetEntityRowTreeQuery()

  return (
    <div className={styles.wrapper}>
      {data.map((row) => {
        return <EntityRow key={row.id} data={row} />
      })}
    </div>
  )
}

import { FC } from 'react'

import { EntityRowProps } from './EntityRow.types'
import styles from './EntityRow.module.scss'

export const EntityRow: FC<EntityRowProps> = ({ data }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <span>{data.rowName}</span>
      </div>
      {data.child.map((row) => (
        <EntityRow data={row} key={row.id} />
      ))}
    </>
  )
}

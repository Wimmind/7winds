import { EntityRow } from '../models'

export type RequestCreateEntityRow = Omit<EntityRow, 'id'> & {
  parentId: number | null
}

export type EntityRow = {
  equipmentCosts: number
  estimatedProfit: number
  id: number
  machineOperatorSalary: number
  mainCosts: number
  materials: number
  mimExploitation: number
  overheads: number
  rowName: string
  salary: number
  supportCosts: number
  total: number
}

export type EntityRowNodeTree = EntityRow & {
  child: EntityRowNodeTree[]
}

export type EntityRowTree = EntityRowNodeTree[]

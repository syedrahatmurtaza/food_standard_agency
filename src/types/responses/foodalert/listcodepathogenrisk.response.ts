import { Meta } from './listalert.full.response'

export interface IFoodAlertPathogenRiskGetResponse {
  meta: Meta
  items: ItemPathogen[]
}

export interface ItemPathogen {
  id: string
  label: string[] | string
  notation: string
  pathogen: Pathogen
  riskStatement: string[] | string
}

export interface Pathogen {
  id: string
  label: string[] | string
  notation: string
}

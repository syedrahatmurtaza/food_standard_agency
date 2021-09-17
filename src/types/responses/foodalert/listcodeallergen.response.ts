import { Meta } from './listalert.full.response'

export interface IFoodAlertListCodeAllergensGetResponse {
  meta: Meta
  items: ItemAllergen[]
}

export interface ItemAllergen {
  id: string
  broader?: string
  label: string
  notation: string
  riskStatement: string
  altLabel?: string
  narrower?: string[]
}

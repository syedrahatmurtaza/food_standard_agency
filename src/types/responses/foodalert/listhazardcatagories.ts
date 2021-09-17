import { Meta } from './listalert.full.response'

export interface IFoodAlertHazardCatagoryGetResponse {
  meta: Meta
  items: ItemHazardCatagories[]
}

export interface ItemHazardCatagories {
  id: string
  label: string
  notation: string
}

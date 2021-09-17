import { Meta } from './listalert.full.response'
import { ItemHazardCatagories } from './listhazardcatagories'

export interface IFoodAlertReasonAlertGetResponse {
  meta: Meta
  items: ItemHazardCatagories[]
}

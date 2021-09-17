import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'

export interface IBusinessTypesDetailPaginationGetResponse {
  businessTypes: BusinessType[]
  meta: Meta
  links: Link[]
}

export interface BusinessType {
  businessTypeID: number
  businessTypeName: string
  links: Link[]
}

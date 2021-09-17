import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'
import { BusinessType } from './businesstypesdetailpagination.response'

export interface IBusinessTypesDetailBasicGetResponse {
  businessTypes: BusinessType[]
  meta: Meta
  links: Link[]
}

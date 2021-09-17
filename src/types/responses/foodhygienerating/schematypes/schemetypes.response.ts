import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'

export interface ISchemeTypesGetResponse {
  schemeTypes: SchemeType[]
  meta: Meta
  links: Link[]
}

export interface SchemeType {
  schemeTypeid: number
  schemeTypeName: string
  schemeTypeKey: string
  links: Link[]
}

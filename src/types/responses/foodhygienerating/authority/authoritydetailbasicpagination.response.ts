import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'

export interface IAuthorityDetailBasicPaginationGetResponse {
  authorities: AuthorityBasic[]
  meta: Meta
  links: Link[]
}

export interface AuthorityBasic {
  localAuthorityId: number
  localAuthorityIdCode: string
  name: string
  establishmentCount: number
  schemeType: number
  links: Link[]
}

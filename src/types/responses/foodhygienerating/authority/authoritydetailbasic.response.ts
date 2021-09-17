import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'
import { AuthorityBasic } from './authoritydetailbasicpagination.response'

export interface IAuthorityDetailBasicGetResponse {
  authorities: AuthorityBasic[]
  meta: Meta
  links: Link[]
}

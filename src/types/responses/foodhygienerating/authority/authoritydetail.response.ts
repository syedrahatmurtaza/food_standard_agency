import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'

export interface IAuthorityDetailGetResponse {
  authorities: AuthorityDetail[]
  meta: Meta
  links: Link[]
}

export interface AuthorityDetail {
  localAuthorityId: number
  localAuthorityIdCode: string
  name: string
  friendlyName: string
  url: string
  schemeURL: string
  email: string
  regionName: string
  fileName: string
  fileNameWelsh: string
  establishmentCount: number
  creationDate: Date
  lastPublishedDate: Date
  schemeType: number
  links: Link[]
}

import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'

export interface IAuthorityDetailPaginationGetResponse {
  authorities: Authority[]
  meta: Meta
  links: Link[]
}

export interface Authority {
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

import { Link } from '../region/regiondetailpagination.response'

export interface IAuthorityDetailByIDGetResponse {
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

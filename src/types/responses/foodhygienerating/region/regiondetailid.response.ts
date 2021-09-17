import { Link } from './regiondetailpagination.response'

export interface IRegionDetailByIdGetResponse {
  id: number
  name: string
  nameKey: string
  code: string
  links: Link[]
}

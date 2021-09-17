import { Link } from '../region/regiondetailpagination.response'

export interface IBusinessTypesDetailByIdGetResponse {
  businessTypeID: number
  businessTypeName: string
  links: Link[]
}

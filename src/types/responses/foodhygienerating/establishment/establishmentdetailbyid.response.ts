import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'
import { Geocode, Scores } from './establishmentlistdetail.response'

export interface IEstablishmentsByIdGetResponse {
  fhrsid: number
  changesByServerID: number
  localAuthorityBusinessID: string
  businessName: string
  businessType: string
  businessTypeID: number
  addressLine1: string
  addressLine2: string
  addressLine3: string
  addressLine4: string
  postCode: string
  phone: string
  ratingValue: string
  ratingKey: string
  ratingDate: Date
  localAuthorityCode: string
  localAuthorityName: string
  localAuthorityWebSite: string
  localAuthorityEmailAddress: string
  scores: Scores
  schemeType: string
  geocode: Geocode
  rightToReply: string
  distance: number
  newRatingPending: boolean
  meta: Meta
  links: Link[]
}

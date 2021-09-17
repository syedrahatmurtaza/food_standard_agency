import { Meta } from '../../foodalert/listalert.full.response'
import { Link } from '../region/regiondetailpagination.response'

export interface IEstablishmentsListGetResponse {
  establishments: EstablishmentListDetail[]
  meta: Meta
  links: Link[]
}

export interface EstablishmentListDetail {
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

export interface Geocode {
  longitude: string
  latitude: string
}

export interface Scores {
  hygiene: number
  structural: number
  confidenceInManagement: number
}

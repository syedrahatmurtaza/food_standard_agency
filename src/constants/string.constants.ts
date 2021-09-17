/***************************      String Contants      *****************************************/
export const API_VERSION_1 = 'v1'

/***************************      Error Contants      *****************************************/

/***************************      Success Contants      *****************************************/

/***************************      Enum Constants      *****************************************/
// Food Alert
export const enum _VIEW {
  DEFAULT = 'default',
  FULL = 'full',
}

// Food Hygiene Agency - Establishment (api - v1/establishment/)
export const enum _SCHEME_TYPE_KEYS {
  FHRS = 'FHRS',
  FHIS = 'FHIS',
}

export const enum _RATING_FHRS_KEYS {
  ZERO = '0',
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
}

export const enum _RATING_OPERATOR_KEYS {
  EQUAL = 'Equal',
  LESS_THAN_OR_EQUAL = 'LessThanOrEqual',
  GREATER_THAN_OR_EQUAL = 'GreaterThanOrEqual',
}

export const enum _RATING_FHIS_KEYS {
  PASS = 'PASS',
  IMPROVEMENT_REQUIRED = 'ImprovementRequired',
  AWAITING_PUBLIC = 'AwaitingPublication',
  AWAITING_INSPECTION = 'AwatingInspection',
  EXEMPT = 'Exempt',
}

export const enum _SORT_OPTIONS_KEYS {
  RATING = 'rating',
  DESC_RATING = 'desc_rating',
  ALPHA = 'alpha',
  DESC_ALPHA = 'desc_alpha',
  DISTANCE = 'distance',
}

/***************************      Data Needs To Be SPLIT From Response      *****************************************/
export const _SPLIT_ATTHERATE = '@'

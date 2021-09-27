export interface CreditCard {
  card_number: number
  csc_code: number
  cardholder_name: string
  expiration_date_month: number
  expiration_date_year: number
  uid?: string
  issuer: string
}
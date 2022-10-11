interface RawGoogleUser {
  id: string | null
  email: string | null
  verified_email: boolean | null
  name: string | null
  given_name: string | null
  family_name: string | null
  picture: string | null
  locale: string | null
  gender: string | null
  hd: string | null
  link: string | null
}

export type GoogleUser = Partial<RawGoogleUser>

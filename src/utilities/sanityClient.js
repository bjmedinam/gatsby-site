import sanityClient from "@sanity/client"

export const client = sanityClient({
  projectId: "aj0vubzm",
  dataset: "production",
  token:
    "skKO4dix33dCW4CdxIzAvSavfR7s4JL3Zwur7xzEhTtO1ImL99ChfoItTaarn568GRotfmgHC5LkPdkBzc3NcudQ9nCt8b3PTvHEUi8fT8MFZiYEmH43HsaqDHVbCI4OUjYM7Dxkvg3D0EdnXJTWsagAZWngcs0bONYFmCdCmWS7snnIfpFo",
  useCdn: false, // `false` if you want to ensure fresh data
  withCredentials: true,
})

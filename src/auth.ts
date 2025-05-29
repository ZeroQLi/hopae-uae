import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord"
import GitHub from "next-auth/providers/github"

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [{
		id: "uae-pass", // signIn("my-provider") and will be part of the callback URL
		name: "uae pass", // optional, used on the default login page as the button text.
		type: "oidc", // or "oauth" for OAuth 2 providers
		issuer: "https://stg-id.uaepass.ae", // to infer the .well-known/openid-configuration URL
		clientId: process.env.AUTH_UAEPASS_ID, // from the provider's dashboard
		clientSecret: process.env.AUTH_UAEPASS_SECRET, // from the provider's dashboard
	  },
		GitHub, 
		Discord],
})
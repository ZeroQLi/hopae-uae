import NextAuth from "next-auth"
import Discord from "next-auth/providers/discord"
import GitHub from "next-auth/providers/github"

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [{
		id: "uae-pass", // signIn("my-provider") and will be part of the callback URL
		name: "uae pass", // optional, used on the default login page as the button text.
		type: "oauth", // or "oauth" for OAuth 2 providers
		style: {
			logo: "/uae-pass.svg", // the logo URL for the provider
		},
		authorization: {
			url: "https://stg-id.uaepass.ae/idshub/authorize", // from the provider's documentation
			params: {
				scope: "urn:uae:digitalid:profile:general", // the scopes to request from the provider	
				acr_values: "urn:safelayer:tws:policies:authentication:level:low", // the authentication context class reference values
			},
		}, // the authorization URL for the provider
		token: "https://stg-id.uaepass.ae/idshub/token"	, // the token URL for the provider
		userinfo: "https://stg-id.uaepass.ae/idshub/userinfo", // the user info URL for the provider

		clientId: process.env.AUTH_UAEPASS_ID, // from the provider's dashboard
		clientSecret: process.env.AUTH_UAEPASS_SECRET, // from the provider's dashboard
	  },],
	callbacks: {
		async jwt({ token, user, profile }) {
			if (user) token.user = user
			if (profile) token.profile = profile
			return token
		},
		async session({ session, token, user }) {
			if (session.user)
				session.profile = token.profile;
			return session;
		},
	},
})
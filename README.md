# UAEPASS integration demo
This is a demo integration project that allows you login with UAEPASS. The national digital identity platforms for citizens, residents and visitors in the UAE.

*built for [Hopae's 2025 bounty challenge](https://www.hopae.com/bountychallenge2025).*

This is a [Next.js](https://nextjs.org) project using [authjs](https://authjs.dev/) for authentication and tailwind for styling.

## Pre-requisuites

A staging UAEPASS account is required to run the demo. 
Follow the instructions at [https://docs.uaepass.ae/quick-start-guide-uae-pass-staging-environment/create-uaepass-user](https://docs.uaepass.ae/quick-start-guide-uae-pass-staging-environment/create-uaepass-user)
to download the staging app and create a staging uaepass account

## Getting Started

1. Clone the repository and install all dependencies 
```
git clone https://github.com/ZeroQLi/hopae-uae.git
cd hopae-uae/
npm install
```
2. First Run the command below
```
npx auth secret
```
Then create a `.env.local` file with the following values
```
AUTH_SECRET=<output from above command>

AUTH_UAEPASS_ID="sandbox_stage"
AUTH_UAEPASS_SECRET="sandbox_stage"
```
3. Run the development server
```
npm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to run the app.

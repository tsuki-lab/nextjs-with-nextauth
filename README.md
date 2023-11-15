# NextAuth.js and Next.js Example

This example shows how to use [NextAuth.js](https://next-auth.js.org/) with Next.js. The example features adding sign in, and an authenticated API route to your Next.js application.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tsuki-lab/nextjs-with-nextauth&project-name=with-nextauth&repository-name=with-nextauth)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app -e https://github.com/tsuki-lab/nextjs-with-nextauth
```

```bash
yarn create next-app -e https://github.com/tsuki-lab/nextjs-with-nextauth
```

```bash
pnpm create next-app -e https://github.com/tsuki-lab/nextjs-with-nextauth
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Getting started

Read the https://next-auth.js.org/providers/google ahead.

## Environment variables

```bash
GOOGLE_ID=
GOOGLE_SECRET=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET= # generate with `openssl rand -base64 32`
```

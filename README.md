## Intro

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is Knowde React Workshop App.
Our target is to build app using modern stack and React ecosystem.

## Getting Started - Local Development

1. [If you don't have supabase app create one here](https://app.supabase.io/)
2. `npm install`
3. Copy .env.example and rename it to .env
   - NEXT_SUPABASE_URL - supabase url
   - NEXT_SUPABASE_ANON_KEY - supabase anon key
   - DATABASE_URL - postgres connection url
4. Run `prisma generate && prisma migrate dev`
5. Run the development server: `npm run dev`
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Directory and Files Structure

**EVERY FILE AND DIRECTORY SHOULD BE NAMED IN kebab-case.**

- core - files related to whole project, reusable across whole project
- modules
  - files split into modules, like posts, comments, auth etc.
  - in every module directory should be placed files that connected only to this module,
  - for example: all components related only to posts should be in `modules/posts/components`, types related to posts should be in `modules/posts/types.ts` or in directory `modules/posts/types` depending on module types complexity, however **all types related to API** like responses and payloads should be placed in `modules/posts/api/types.ts`

## Learn More

To learn more about Next.js, and technologies used in this project take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Storybook](https://storybook.js.org/docs/react/get-started/introduction) - components documentations and a lot more.
- [MSW](https://mswjs.io/docs/getting-started/) - mocking network responses for tests and storybook..
- [Supabase](https://supabase.com/docs) - some kind of backend substitute (open source alternative for firebase)
- [Prisma](https://www.prisma.io/docs/getting-started) - ORM used in next api
- [React Query](https://react-query.tanstack.com/overview) - fetching, caching, synchronizing and updating server state

## Deploy on Vercel

Use
`npm run build-vercel`
as build command

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Recommended Learn More Resources

- [Kent C. Dodds Blog](https://kentcdodds.com/blog) - a lot great articles about react from basics to advanced
- [Epic React Blog](https://epicreact.dev/articles) - again some react reading, but rather more concise articles
- [TKDodo Blog](https://tkd.io/blog) - great source about react-query and react related stuff
- [Josh W. Comeau](https://www.joshwcomeau.com/) - great source about modern styling, css in js, styles generally
- [Patterns.dev](https://www.patterns.dev/posts/) - a lot of knowledge about modern frontend / patterns
- [Maxime Heckel Blog](https://blog.maximeheckel.com/) - cool articles about animating in framer motion

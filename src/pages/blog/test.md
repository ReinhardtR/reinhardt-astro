---
layout: ../../layouts/PostLayout.astro
title: "A Great Title"
description: "A description of the content in this post."
created: "31-08-2022"
updated: null
draft: false
---

Hey there! Today we'll be building an application with the [T3 stack](https://init.tips/). We're going to build a Guestbook inspired by [Lee Robinson's Guestbook](https://leerob.io/guestbook/). Let's get right into it!

### Getting Started

Let's set up a starter project with `create-t3-app`!

```bash:terminal
npx create-t3-app@latest
```

We're going to utilize all parts of the stack.

![create-t3-app](https://us-east-1.tixte.net/uploads/nexxel.needs.rest/WindowsTerminal_oPvbaXQZNk.png)

Let's also set up a Postgres database on [Railway](https://railway.app/). Railway makes it super simple to quickly set up a database.

Go to [Railway](https://railway.app/) and log in with GitHub if you haven't already. Now click on `New Project`.

![New Project](https://us-east-1.tixte.net/uploads/nexxel.needs.rest/brave_jYkV1HjSF5.png)

Now provision Postgres.

![Provision Postgres](https://us-east-1.tixte.net/uploads/nexxel.needs.rest/brave_pQKKGvQGOM.png)

It's as simple as that. Copy the connection string from the `Connect` tab.

![Copy the connection string](https://us-east-1.tixte.net/uploads/nexxel.needs.rest/brave_YjclbRZxB2.png)

Let's start coding! Open the project in your favourite code editor.

There are a lot of folders but don't be overwhelmed. Here's a basic overview.

- `prisma/*` - The `prisma` schema.
- `public/*` - Static assets including fonts and images.
- `src/env/*` - Validation for environment variables.
- `src/pages/*` - All the pages of the website.
- `src/server/*` - The backend, which is a tRPC server.
- `src/styles/*` - Global CSS files, but we're going to be using Tailwind CSS for most of our styles.
- `src/types/*` - Next Auth type declarations.
- `src/utils/*` - Utility functions.

Open the `.env` file and paste the connection string in `DATABASE_URL`.

You'll notice we have [Discord](https://discord.com/) OAuth set up using `next-auth`, so we also need a `DISCORD_CLIENT_ID` and `DISCORD_CLIENT_SECRET`. Let's set that up.

### Setting up authentication

Go to the [Discord Developers Portal](https://discord.com/developers/) and create a new application.

![New Application on Discord](https://us-east-1.tixte.net/uploads/nexxel.needs.rest/brave_Wn1HquVPUC.png)

Go to `OAuth2/General` and add all of the callback URLs to `Redirects`. For localhost the callback URL is `http://localhost:3000/api/auth/callback/discord`. I also added the production URL ahead of time.

![Add redirects](https://us-east-1.tixte.net/uploads/nexxel.needs.rest/brave_zLSplMIqPu.png)

Copy the client ID and secret and paste both of them into `.env`.

![Copy client ID and secret](https://us-east-1.tixte.net/uploads/nexxel.needs.rest/brave_49rNuyGZ3g.png)

Set the `NEXTAUTH_SECRET` as some random string too. Now we have all of our environment variables configured.

Let's also change the database to `postgresql` and uncomment the `@db.Text` annotations in the `Account` model in `prisma/schema.prisma`. All the models you see in the schema are necessary for Next Auth to work.

![Changes in prisma/schema.prisma](https://us-east-1.tixte.net/uploads/nexxel.needs.rest/WindowsTerminal_dGVMwLI9rH.png)

Let's push this schema to our Railway Postgres database. This command will push our schema to Railway and generate type definitions for the Prisma client.

```bash:terminal
npx prisma db push
```

Now run the dev server.

```bash:terminal
npm run dev
```

Go to the `src/pages/index.tsx` file and delete all the code, let's just render a heading.

```tsx:src/pages/index.tsx
const Home = () => {
  return (
    <main>
      <h1>Guestbook</h1>
    </main>
  );
};

export default Home;
```

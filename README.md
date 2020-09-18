STACK:

- 💻 NextJS (React, hooks)

- 📝 CMS (Prismic)

- 📊 API (React-Query)

- 🚨 Types (Typescript)

- 🚀 Styling (SCSS, GSAP, Bulma)

  - SCSS (css modules, variables and nested style rules)
    App.tsx imports global.scss, imports main.scss, imports all other rules.

  - GSAP (animations)

  - Bulma (basic layout, minimal styling)


- 🤡 Test (Jest / Enzyme)

- 🛳 Docker (exploring soon)

- 🧳 Kubernetes (exploring soon)


Basic Bulma Layout:

```
<div className="container">
    <Head>
        <title>NAME OF PAGE</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        
        <div className="columns">
            <div className="column">First column</div>
            <div className="column">Second column</div>
            <div className="column">Third column</div>
            <div className="column">Fourth column</div>
        </div>

        
    </main>

</div>
```

Known Bugs / Issues To Circle Back And Fix:

- NextJS issue with SCSS modules. If you attempt to `@use` & access variables that way, eg `background-color: colors.$my_color` you will get "invalid expression" errors. This is also def true of @use'ing mixins.

- SCSS files not being imported into Jest unit tests. Behaviour is that media queries responsive behav is not happening in Unit Test env.

- React Query, change the name of the API/url to an error version
and it breaks but error not coming through to isError boolean value.


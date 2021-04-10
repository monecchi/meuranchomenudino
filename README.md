# Meu Rancho MenuDino

## How to use

### Meu Rancho's menu/dino customization

This is an exclusive thirty party app integration built with Next.js.

The app's main purpose is to serve itself as a domain redirection origin while hosting a few static resources to be shared with the Consumer PDV software, which in turn manages the MenuDino app.

### Usage

After forking the project, refer to `resources/scss/app.scss`, which holds all the styles for customizing the menudino app. All js functions are located under `resources/js/app.js` and `resources/js/mr-app-config.js` respectively. Modify those as per your requirements.

### Laravel Mix

Apart from Next.js common set up, the project uses Laravel Mix to proccess and bundle all **.scss** & **.js** files mentioned above to be served as static resources under `/public/css/app.css` and `/public/js/app.min.js`, which are made available after deploying the project to vercel.

#### Laravel Mix commands

To process the unminified files while developing, run

```bash
yarn development
```

To process the minified files for production, run

```bash
yarn production
```

### Next.js

The project sets a custom configuration for Next.js, including a permanent domain redirection. Please refer to `next.config.js` for more details.

#### Next.js commands

```bash
yarn dev
```

```bash
yarn build
```

```bash
yarn start
```

### Deployment

Deploy the example using [Vercel](https://vercel.com)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/monecchi/meuranchomenudino.git&project-name=menudino&repository-name=menudino)

#### Credits

[Adriano Monecchi](https://twitter.com/dico_monecchi)

#### Thanks 👍

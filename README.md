# Blog
Project open source created with Next JS + Vercel to generate static pages (SSG) through getStaticPaths and getStaticProps feature. Posts are written in Markdown and managed by the application itself.

[developrr.pro](www.developrr.pro)

## Technology stack

* **Content:** [Markdown](https://daringfireball.net/projects/markdown/)
* **Back-end:** [Next.js](https://nextjs.org/)
* **Front-end:** [React](https://reactjs.org/)
* **Deployment:** [Vercel](https://vercel.com/)

## Running locally

1. Clone this repo:

  ```sh
$ git clone https://github.com/rroy11705/develop-rr.git
  ```

2. Then go to the project's folder:

```sh
cd blog
```

3. Install all dependencies:

```sh
npm install or yarn
```

4. Run locally:

```sh
npm run dev or yarn dev
```
## Running tests

"test": "jest --passWithNoTests --runInBand --no-cache --silent --noStackTrace",
    "test:unit": "yarn test --watch -c jest-unit-config.js",
    "test:staged": "yarn test --findRelatedTests",
    "test:integration": "yarn test --watch -c jest-integration-config.js",
    "test:verbose": "jest --passWithNoTests --runInBand --no-cache",
    "test:ci": "yarn test --coverage",
    "cypress:open": "cypress open"

1. General test:

  ```sh
"test": "jest --passWithNoTests --runInBand --no-cache --silent --noStackTrace"
  ```

2. Unit test:

```sh
"test:unit": "yarn test --watch -c jest-unit-config.js"
```

3. Integration test:

```sh
"test:integration": "yarn test --watch -c jest-integration-config.js"
```

4. CI test:

```sh
"test:ci": "yarn test --coverage"
```

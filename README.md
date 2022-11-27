# vue3-spa-starter

A vue3 SPA starter that comes configured with :

- typescript (almost) everything
- vite
- quasar UI library
- vuex with simple mocking example for unit test
- vue-i18n
- storybook
- vitest (with coverage configured)
- stories snapshots
- nightwatch E2E testing

## Project setup

```
npm install
```

## Usage

### Compiles and hot-reloads for development

```
npm run dev
```

### Run storybook

```
npm run storybook
```

### Run test in watch mode (also used to update your stories snapshots when needed)

```
npm run test:watch
```

### Run test with coverage

```
npm run test:coverage
```

### Run e2e tests (you will need to start your dev server first)

```
npm run test:e2e
```

### Compiles and minifies for production

```
npm run build
```

## Project structure

```
vue3-spa-starter
├── public
├── src
│   ├── assets
│   ├── components        // directory for basic components
│   ├── locales           // directory for putting all locales
│   ├── models            // directory for business types
│   ├── plugins           // vue plugins : i18n, quasar or any plugin
│   ├── store             // vuex store
│   │   └── modules       // vuex store modules
│   ├── stories           // storybook stories
│   └── styles
└── tests
    ├── e2e               // directory for e2e testing with nightwatch
    ├── __mocks__         // directory for mocking modules
    ├── __snapshots__     // rendered stories snapshots
    └── unit              // unit tests goes here
```

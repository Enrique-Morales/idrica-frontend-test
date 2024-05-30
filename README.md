# idrica-frontend-test by Enrique Morales

## Getting it up and running

Install dependencies:

```
npm install
```

Run deployment server:

```
npm start
```

Run unit and integration tests:

```
npm test
```

Run E2E tests with Cypress:

```
npx cypress open
```

**!** Select **E2E** in Cypress' dialog window (not component testing)

## Project description

The project has been developed according to speficifations:

- Functionality
  - Show posts
  - Delete post
  - Edit post
- Design: I hope you like it
  - Animations
- Implementation
  - Coded in React functional components + Typescript without use of `any` types
  - Made use of Prettier to help with code formatting and indentation
  - Made use of no external library other than required by specification
  - Unit tests, integration tests and E2E tests with Cypress (though it's a very basic implementation)
  - Made use of SCSS variables, flexbox, grid and the BEM approach
- Connection
  - Made use of Redux to manage the state of _posts_, handling the asynchronous fetch and providing reducers to read, delete and edit data from the store
- Enlargements
  - Edit posts
  - Animations
 
## Implementation details

### File system:

```
├── components
│   ├── atoms
│   │   ├── Button
│   │   │   ├── Button.scss
│   │   │   ├── Button.test.tsx
│   │   │   └── Button.tsx
│   │   ├── DeleteButton
│   │   │   ├── DeleteButton.scss
│   │   │   ├── DeleteButton.test.tsx
│   │   │   └── DeleteButton.tsx
│   │   ├── EditButton
│   │   │   ├── EditButton.scss
│   │   │   ├── EditButton.test.tsx
│   │   │   └── EditButton.tsx
│   │   └── Text
│   │       ├── Text.scss
│   │       ├── Text.test.tsx
│   │       └── Text.tsx
│   ├── molecules
│   │   ├── Card
│   │   │   ├── Card.scss
│   │   │   ├── Card.test.tsx
│   │   │   └── Card.tsx
│   │   └── Modal
│   │       ├── Modal.scss
│   │       ├── Modal.test.tsx
│   │       └── Modal.tsx
│   └── organisms
│       ├── ConfirmationModal
│       │   ├── ConfirmationModal.scss
│       │   ├── ConfirmationModal.test.tsx
│       │   └── ConfirmationModal.tsx
│       ├── EditModal
│       │   ├── EditModal.scss
│       │   ├── EditModal.test.tsx
│       │   └── EditModal.tsx
│       └── PostsViewer
│           ├── PostsViewer.scss
│           └── PostsViewer.tsx
├── redux
│   ├── slice.ts
│   └── store.ts
└── utils
    ├── _animations.scss
    ├── api.ts
    ├── constants.ts
    ├── types.ts
    └── _variables.scss
├── App.scss
├── App.test.tsx
├── App.tsx
├── index.css
├── index.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── setupTests.ts
```

### Component diagram

![diagram](https://github.com/Enrique-Morales/idrica-frontend-test/assets/33661134/118c7c8a-a03b-48dd-bdf4-738c77e23595)

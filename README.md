# todo

![last commit](https://img.shields.io/github/last-commit/CullenSharp/todo)

A todo list app using react context.

## 🚀 Getting Started

1. Install dependencies with `npm i` or `yarn i`
2. Run tests `npm test`
3. Start development server `npm start`

## 🏢 Architecture

![UML](todoList.png)

## Phase 1

Style, modularize, and implement context

### Tasks

- [X] Style with [Blueprint UI Kit](https://blueprintjs.com/docs/#blueprint)
- [x] Modularize application
- [x] Implement context API
  - Manages number of items per page `int`
  - Hide or show completed items `bool`

## Phase 2

Paginate, hide, customize, save

### Tasks

- [x] Implement pagination with context api
- [x] Hide or show completed items based on context
- [x] Allow the user to set preferences for hide/show and page size
- [x] Save preference to local storage
- [x] Retrieve preferences from local storage

## Phase 3

Authenticate and authorize

### Tasks

- [x] create authorization context
  - properties:
    - [x] loggedIn `bool`
    - [x] user `obj`
  - methods
    - [x] login
    - [x] logout
    - [x] isAuthorized

- [x] login component
  - detects is a user is logged in or not
  - conditionally renders a login form/logout button

- [x] auth component
  - Based on permissions hide/show component
  - when you are authenticated, render props.children or null
  - take capabilities as props
    - when you have right permissions, render props.children

### Example

```JS
// The div only shows if you are logged in
  <Auth>
    <div />
  </Auth>

// The div only shows if you are logged in AND have read permissions
  <Auth capability="read">
    <div />
  </Auth>
```

## Further reading

[JSDoc – documentation](https://jsdoc.app/)

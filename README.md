# 🧱 Dev Stack

Dev Stack is a browsing tool for developers who are starting a new project and need to
decide what to build it with. It lists common frontend, backend, database, styling, and
tooling options as cards, and lets you collect the ones you want into a personal
**"stack"** that you can review, trim, and clear as you change your mind.

## Technology Used

React (Vite), Tailwind CSS, DaisyUI, React-Toastify, JavaScript (ES6+), JSON

## Features

1. **Build a stack as you browse** — add any technology with one click; the card
   updates instantly to show it's already in your stack, so you never lose track of what
   you've picked.
2. **A live, editable summary** — the "Your Stack" panel keeps a running count and lets
   you remove one item at a time or clear everything at once, with a toast confirming
   every action.
3. **Fast, responsive browsing** — 15 technologies across 7 categories load from a
   single JSON file into a grid that adapts from one column on mobile to three on
   desktop.

---

## React Questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax extension that lets you write markup directly inside JavaScript, like
`<h1>{title}</h1>`. It's used because it lets a component's structure and the logic that
drives it live in the same place, and it compiles down to regular `React.createElement`
calls under the hood.

### 2. What is the difference between props and state?
Props are values passed into a component from its parent, and the component receiving
them can't change them. State is data a component manages internally and can update over
time, usually in response to user actions. In this project, a technology's data comes in
as props, while whether it's in the stack lives in state.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` gives a component a piece of state and a function to update it, and
re-renders the component whenever that state changes. It's used here for the list of
technologies, the loading and error flags, and the array of items the user has added to
their stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs code after a component renders, which is where side effects like network
requests belong instead of inside the render itself. It's used to fetch the technology
JSON once when the app first mounts, and to flip the loading state off once the data (or
an error) comes back.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React uses the `key` to tell items in a list apart between renders, so it can update,
reorder, or remove the right elements instead of re-rendering the whole list. Without a
stable key, React can mix up which DOM node belongs to which item, causing bugs when the
list changes.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means showing different markup depending on some condition, usually
with a ternary or `&&`. The "Your Stack" panel does this: when the stack array is empty it
shows a placeholder message, and once it has items it renders the list of stack cards
instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data down as props, e.g. `<TechCard tech={tech} />`. To send information
back up, the parent also passes a function down as a prop (like `onAdd`), and the child
calls that function — usually with some data as an argument — when something happens,
such as a button click.

---


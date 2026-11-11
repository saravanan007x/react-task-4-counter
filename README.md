# React Counter App

Task 4 – Implement `useState` Hook for Counter and Theme Toggle.

A responsive, dashboard-style React application built with Vite and JavaScript (JSX). It includes a working counter and a light/dark theme toggle, both managed with the `useState` hook.

## Features

- Counter with increment, decrement, and reset actions
- Counter can go below zero
- Light Mode and Dark Mode
- All text is pure black in Light Mode
- Responsive layout for mobile, tablet, and desktop
- Smooth hover effects and theme transitions
- Accessible buttons, focus states, and live counter updates

## Project Structure

```
react-counter-theme-app/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── src/
    ├── components/
    │   ├── Counter.jsx
    │   └── ThemeToggle.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx
```

## Installation

```bash
npm install
```

## Run the development server

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## How `useState` works in this project

`useState` gives a component a piece of state and a function to update it.

```js
const [count, setCount] = useState(0);
```

- `count` is the current value.
- `setCount` updates the value and tells React to re-render the component.
- `0` is the initial value.

When a button is clicked, React calls the handler. The handler updates state, and React automatically re-renders the component with the new value — no page refresh.

The counter uses the previous state to stay accurate:

```js
setCount((previousCount) => previousCount + 1);
```

The theme toggle works the same way:

```js
const [theme, setTheme] = useState("light");

setTheme((currentTheme) =>
  currentTheme === "light" ? "dark" : "light"
);
```

The `theme` value is placed on the root element as `data-theme`, and CSS variables change all colors at once.

## How to test

1. **Increment** – Click `Increment`. The value increases by 1.
2. **Decrement** – Click `Decrement`. The value decreases by 1, including below 0.
3. **Reset** – Click `Reset`. The value returns to 0.
4. **Theme toggle** – Click the theme button. The label changes between `Light Mode` and `Dark Mode`, and every color updates instantly without a page refresh.

## Upload to GitHub

```bash
git init
git add .
git commit -m "Add React counter app with useState and theme toggle"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your GitHub details. Create the empty repository on GitHub first.

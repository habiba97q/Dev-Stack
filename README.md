# Dev Stack - Tech Stack Builder

Dev Stack is a responsive React application that helps developers explore different technologies and build their own development stack. Users can view technology details, ratings, difficulty levels, and add technologies to their personal stack.

## Live Demo & Repository

* **Live Site:** https://dev-stack-habiba97q.netlify.app/
* **GitHub Repo:** https://github.com/habiba97q/Dev-Stack

## Technologies Used

* React 19
* JavaScript / JSX
* Tailwind CSS
* DaisyUI
* React-Toastify
* Vite
* JSON

## Key Features

1. **Technology Explorer**
   Explore 12 technologies with their icons, categories, descriptions, ratings, difficulty levels, and badges.

2. **Tech Stack Builder**
   Add technologies to your personal stack, prevent duplicates, remove individual items, or remove all items at once.

3. **Responsive Design**
   Fully responsive across mobile, tablet, and desktop with a mobile-friendly navigation menu.

4. **Toast Notifications**
   React-Toastify provides notifications for add, duplicate, remove, and remove-all actions.

5. **Gradient Theme**
   A shared orange-to-pink-to-violet gradient is used for the brand, hero heading, and primary buttons.

---

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React components easier to read and build.

### 2. What is the difference between props and state?

Props are data passed from a parent to a child. State is data managed inside a component and can change over time.

### 3. What does the useState hook do, and where did you use it?

`useState` stores and updates component data. I used it to manage the selected technology stack and the mobile navigation menu.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` is used for side effects such as data fetching. In this project, I used React `use()` with `Suspense` to load the JSON data, so `useEffect` was not required for data loading.

### 5. Why does every item in a `.map()` list need a unique key prop?

A unique `key` helps React identify each list item and efficiently update the UI when items change.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering displays different UI based on a condition. I used it in `YourStack.tsx` to show an empty message when no technologies are selected and the stack list when items are available.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data through props. A child can send information back by calling a function passed through props. For example, `TechnologiesCard` calls `onAddToStack()` when a technology is selected.

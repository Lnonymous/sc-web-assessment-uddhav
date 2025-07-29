# Full-Stack Web Developer Assessment - SecondChapter

This project is a submission for the Full-Stack Web Developer internship assessment. It includes a complete frontend for a login page and a backend setup that unfortunately ran into persistent, unresolvable dependency issues.

**Candidate:** Uddhav Menon

---

## Live Demo & Video Walkthrough

* **Live Frontend URL:** https://sc-web-assessment-uddhav.vercel.app/
* **Video Walkthrough URL:** [Paste your screen recording link here]

---

## Project Structure

This project is a monorepo containing two main parts:

* `/frontend`: A complete React application built with Vite and styled with Tailwind CSS. It features a fully interactive login form.
* `/backend`: A NestJS application setup with Prisma and PostgreSQL for user authentication.

---

## How to Run the Frontend

1.  Navigate to the `frontend` directory: `cd frontend`
2.  Install dependencies: `npm install`
3.  Start the development server: `npm run dev`
4.  Open your browser to `http://localhost:5173`.

---

## Development Journey & Backend Issues

The primary goal was to build a full-stack application with a working login system. The frontend was built successfully, but the backend development was blocked by a persistent and critical error:

**Error:** `Error: @prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.`

Despite extensive debugging, including:
* Multiple `node_modules` reinstalls (`npm install`).
* Switching package managers (`yarn install`).
* Modifying build scripts in `package.json` to force `prisma generate`.
* Implementing multiple dependency injection patterns for the `PrismaService`.
* Running `prisma generate --watch` in a separate terminal process.

The NestJS development server consistently failed to recognize the generated Prisma client at runtime. After exhausting all standard and advanced solutions, I made the decision to pivot and focus on delivering a high-quality, complete frontend to demonstrate my skills in React, TypeScript, and modern UI development, rather than lose more time on an unresolvable backend environment issue.

---

# RentNow — Project Summary

This README provides a concise summary of the RentNow project and its system design (inferred from the repository and the included system-design PDF). It covers the purpose, architecture, major components, data models, API routes, local setup, and suggested next steps.

## Project purpose
RentNow is a rental marketplace web application where owners can list properties and renters can search, book, and manage bookings. The project contains a React-based client and an Express/MongoDB server.

## High-level architecture
- Client: React (Vite) single-page application. Responsible for UI, routing, form handling, and calling the server APIs.
- Server: Node.js + Express API. Handles authentication, property management, image uploads, bookings, and user profiles.
- Database: MongoDB via Mongoose (models located in `server/models`).
- File storage: images are uploaded with `multer` and saved to the `images/` folder (server-side middleware: `uploadimg.mw.js`).

Communication flow: client (axios/fetch) -> Express REST API -> MongoDB.

## Tech stack
- Frontend: React, Vite, TailwindCSS, styled-components, react-router-dom, Formik, Yup.
- Backend: Node.js, Express, Mongoose, Multer, bcrypt, jsonwebtoken, cors, cookie-parser.
- Dev tools: nodemon for development server auto-restart.

## Important files & folders
- `client/` — React SPA source.
  - `src/` — components, pages, hooks, and assets.
- `server/` — Express API server.
  - `models/` — Mongoose schemas: `user.mod.js`, `property.mod.js`, `booking.mod.js`.
  - `Controllers/` — request handlers for users, properties, bookings.
  - `routers/` — `users.route.js`, `property.route.js` (mount API endpoints).
  - `middlewares/` — `uploadimg.mw.js`, `checkLogin.mw.js`.
  - `images/` — uploaded image files.

## Data models (key fields)
- User (`server/models/user.mod.js`)
  - name, email (unique), password (hashed), usertype, phone, profession, institution, addresses, file (profile image)

- Property (`server/models/property.mod.js`)
  - pid, location, type, owner_id, farea (floor/area), price, details, rate, available, file (image path/filename)

- Booking (`server/models/booking.mod.js`)
  - renter_id (ref users), product_id (ref properties), owner_id (ref users), booking_date, booking_expired, total_amount

## API overview (selected endpoints)
Note: routes are defined in `server/routers` and implemented in `server/Controllers`.

- Users
  - POST /users/sign — register a new user
  - POST /users/login — authenticate user (returns token / cookie depending on implementation)
  - GET /users/profile/:email — get user profile by email
  - GET /users/allUser — list all users
  - POST /users/booking — create a booking
  - GET /users/bookedo/:id — bookings where user is owner
  - GET /users/bookedr/:id — bookings where user is renter
  - DELETE /users/delproperty/:id — delete a property
  - DELETE /users/delbooking/:id — cancel a booking
  - PUT /users/getprofileimg — upload profile image (multer)

- Properties
  - POST /property/add — add property with image (multer)
  - GET /property/showall — list all properties
  - GET /property/getproperty/:uid — get properties by user id
  - GET /property/search — search properties (query params)
  - PUT /property/availabilityup/:id — update availability
  - PUT /property/likeup/:id — increment likes/rating

Exact request/response payloads are implemented in `server/Controllers` files.

## Running locally (quick steps)
1. Install backend dependencies and start server:

```powershell
cd server
npm install
npm run start
```

2. Install frontend dependencies and start client:

```powershell
cd client
npm install
npm run dev
```

3. Environment
- The server expects a MongoDB connection. Check `dbconnect.js` and `.env` usage. Create a `.env` with the necessary variables (for example MONGO_URI, JWT_SECRET, PORT).

## Assumptions made
- The provided `RentOn_System_Design.pdf` couldn't be parsed cleanly as text in this environment (binary PDF). I inferred system design from source code, routes, and models.
- Auth token flow (JWT/cookies) is implemented in `server/Controllers` but details (cookie vs Authorization header) should be confirmed by inspecting controller code or `.env`.

## Next steps / improvements
- Add a concise API reference (request bodies & sample responses) in `docs/API.md` or inline in each controller as JSDoc.
- Add environment sample: `server/.env.example` listing required variables.
- Add end-to-end tests for core flows (signup/login/add property/booking).
- Harden auth: ensure protected routes are guarded by `checkLogin.mw.js`.
- Add README sections for deployment (Docker, production env) if needed.


## Author
**Mustakim Billah Rafi**

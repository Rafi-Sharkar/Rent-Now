# RentNow - Server

This is the backend server for the RentNow application. It's a Node.js + Express API that uses MongoDB (via Mongoose) to store users, properties and bookings. It also serves and accepts image uploads for property images and user profile pictures.

## Project structure

- `index.js` - Entry point; loads environment variables, connects to DB and starts the Express server.
- `app.js` - Creates the Express app, mounts routers and global error handler.
- `dbconnect.js` - Connects to MongoDB using `mongoose` and `process.env.DBLINK`.
- `package.json` - Project dependencies and scripts.
- `routers/` - Express routers for `users` and `property` endpoints.
- `Controllers/` - Route handlers.
- `models/` - Mongoose models: `user`, `property`, `booking`.
- `middlewares/` - Middlewares: `uploadimg.mw.js` (multer), `checkLogin.mw.js` (JWT check).
- `images/` - Directory used to store uploaded images.


## Requirements

- Node.js (v14+ recommended)
- MongoDB connection string (set as `DBLINK` in `.env`)
- `.env` variables used in the project:
  - `PORT` - port to listen on (e.g. `3000`)
  - `DBLINK` - MongoDB connection URI
  - `JWT_SECRET` (or `JWT`) - secret used to sign/verify JSON Web Tokens


## Install

1. Install dependencies:

```powershell
npm install
```

2. Create a `.env` file in the project root (next to `index.js`) with at least:

```
PORT=3000
DBLINK=mongodb+srv://<user>:<pass>@cluster0.example.mongodb.net/rentnow?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_here

## Run

Start the server in development (uses `nodemon`):

npm run start
```


```
server is running at http://localhost:3000
```

## API Endpoints

- Users: `/users`
- Property: `/property`
All endpoints accept/return JSON unless noted.


- POST `/users/sign`
  - Body (JSON): { name, email, pass, usertype, phone, perloc }

  - Login endpoint. On success returns data and sets a cookie `token`.
  - Body (JSON): { email, pass }
- GET `/users/profile/:email`
  - Get profile information for user by email. Returns selected user fields.
- DELETE `/users/delproperty/:id`
  - Deletes a property by its id. (Note: this route is mounted under `/users` but deletes from `properties` collection.)
- GET `/users/allUser`

Property routes (in `routers/property.route.js`):

- POST `/property/add` (multipart/form-data)
  - Adds a new property and saves uploaded image. Use field `image` for file. Body fields: `location`, `type`, `owner_id`, `farea`, `price`, `details`.

- GET `/property/showall`
  - Returns all properties.

- GET `/property/getproperty/:uid`
  - Returns properties that match `owner_id` = `:uid`.

- GET `/property/search?type=<term>`
  - Searches properties by `type` (uses a regex match against query `type`).

- PUT `/property/availabilityup/:id`
  - Update `available` flag for a property. Body example: { "New_available": true }

- PUT `/property/likeup/:id`
  - Update `rate` field for a property. Body example: { "new_Rate": 4 }


## Models (Mongoose)

- User (`models/user.mod.js`)
  - Fields of interest: `file` (path, filename), `name`, `email` (unique), `password` (hashed), `usertype`, `phone`, `permanent_address`, optional `current_address`, `profession`, `Institution`, `rate`.

- Property (`models/property.mod.js`)
  - Fields: `file` (path, filename), `pid` (generated), `location`, `type`, `owner_id` (string), `farea`, `price`, `details`, `rate` (number), `available` (boolean).

- Booking (`models/booking.mod.js`)
  - Fields: `renter_id` (ObjectId -> users), `product_id` (ObjectId -> properties), `owner_id` (ObjectId -> users), `booking_date`, `booking_expired`, `total_amount`.


## Middleware

- `uploadimg.mw.js` — multer config that stores uploads into the `./images` folder. Accepts `image/jpg`, `image/png`, `image/jpeg`. Max file size: 100MB.

- `checkLogin.mw.js` — checks cookie `token` and verifies JWT. If valid, attaches `req.email` and `req.usertype`.


## Notes, caveats and suggested improvements

- Some controller functions have minor issues (typos or inconsistent env variable names) you may want to review. For example:
  - `sign.cont.js` references `req.body.pass` when hashing but returns `req.body.eamil` in the response (typo).
  - `login.cont.js` signs token with `process.env.JWT_SECRET` but `checkLogin.mw.js` expects `process.env.JWT`.
  - Error handling returns generic messages; consider returning proper HTTP codes and structured error payloads.

- `getprofileimg.cont.js` uses an absolute Windows path when unlinking old profile images. That will work on the development machine but is brittle; better to build the path dynamically (e.g., `path.join(__dirname, '..', 'images', filename)`).

- Several routes are mounted under `/users` but operate on properties (e.g., `DELETE /users/delproperty/:id`). Consider moving property-related routes under `/property` for clarity.

- Authentication: current JWT cookie is used but most routes are unprotected. Consider applying `checkLogin.mw.js` to routes that require authentication/authorization.


## Example requests

Create a user (signup) — JSON:

```json
POST /users/sign
{
  "name": "Alice",
  "email": "alice@example.com",
  "pass": "password123",
  "usertype": "renter",
  "phone": "123456789",
  "perloc": "Dhaka"
}
```

Login (returns cookie `token` on success):

```json
POST /users/login
{
  "email": "alice@example.com",
  "pass": "password123"
}
```

Add property (multipart/form-data):

Field `image` = file, and JSON fields `location`, `type`, `owner_id`, `farea`, `price`, `details`.


## Troubleshooting

- If server doesn't start, verify `.env` variables and that MongoDB is reachable.
- If images fail to upload, check folder permissions for `./images` and that the multer file filter matches your file's mimetype.
- For JWT issues, ensure both `login.cont.js` and `checkLogin.mw.js` use the same env var name (recommended: `JWT_SECRET`).


## Next steps (optional)

- Add route-level authorization using `checkLogin.mw.js` and role checks (owner vs renter).
- Improve error handling with consistent HTTP status codes.
- Move property-delete route to `/property` router and add file deletion for property images when a property is removed.


---

If you'd like, I can update the codebase to fix the variable name mismatches (`JWT` vs `JWT_SECRET`), adjust file unlink path usage, and move `delproperty` into the property router. Tell me which changes to apply and I'll make them and run a quick test.
  - Returns all users.

- GET `/users/getneuser/:id`
  - Get a single user by id.

- POST `/users/booking`
  - Create a new booking. Body: { renter_id, product_id, owner_id, booking_date, booking_expired, total_amount }

- GET `/users/bookedo/:id`
  - Get bookings where `owner_id` matches `:id`. Populates renter and product info.

- GET `/users/bookedr/:id`
  - Get bookings where `renter_id` matches `:id`.

- DELETE `/users/delbooking/:id`
  - Delete booking by id.

- PUT `/users/getprofileimg` (multipart/form-data)
  - Uploads profile image. Use field `image` for the file and a `user` field with user id in form data.

- GET `/users/test`
  - Test endpoint that returns `{
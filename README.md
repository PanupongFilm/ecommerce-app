# ecommerce-app

My first full-stack web app, an e-commerce site built with the MERN stack. I made it during the summer after my second year of university (June to August 2025) to learn how all the pieces of a real web app fit together.

It's not finished. I got through auth and most of the admin panel, then stopped before building the cart and checkout.

## Auth

Most of my time went into the auth system, since I wanted to actually understand how login works instead of just using a library for everything.

- Register / login with email and password, plus Google sign-in
- Email verification, resend code, and forgot password using OTP codes sent by email
- JWT access + refresh tokens stored in httpOnly cookies
- An account setup step for people who sign in with Google for the first time
- Protected pages on the frontend and admin-only routes on the backend

The OTP part was originally saved in the database, but I later changed it to use short-lived JWTs instead since it was simpler and didn't need cleaning up.

## Other stuff

- Admin panel for managing banners, categories, types, tags and products
- Image upload to Cloudinary, compressed with Sharp first, and deleted from the cloud when no longer used
- Homepage with a banner slider, navbar, footer and product cards

## Not done yet

- Cart, checkout and orders
- Product pages for customers
- The API URL is still hardcoded to localhost

## Tech

React, Vite, Tailwind CSS on the frontend. Node.js, Express and MongoDB (Mongoose) on the backend. Also uses Google OAuth, Cloudinary and Nodemailer.

## Running it

Create `server/.env`:

```
PORT=4001
DATABASE=
TOKEN_SECRET=
SALT_FACTOR=10
EMAIL_USER=
EMAIL_PASS=
CLOUDINARY_NAME=
CLOUDINARY_KEY=
CLOUDINARY_SECRET=
CLOUDINARY_FOLDER=
```

Then copy `client/.env.example` to `client/.env` and add your Google client ID.

```bash
cd server && npm install && npm run dev
cd client && npm install && npm run dev
```

## Looking back

The biggest lesson was scope. I tried to build the whole store at once and started the admin panel before any customer flow worked. Next time I'd finish one complete flow first (browse, cart, order) and then add things on top.

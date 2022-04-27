# Capstone: Restaurant Reservations

Restaurant Reservations is a reservation management tool built with PERN stack. Users can create, edit, and cancel reservations for a restaurant named Periodic Tables.


## Live Link

[Live Deployment](https://fc-rr-frontend.herokuapp.com/)


## Technology Used

- PostgreSQL
- Express
- React
- Node
- Bootstrap


## Features

- View of the Dashboard with a booked reservation.

![Dashboard](/images/dashboard.png)

- View of the search page with a reservation found by using a phone number.

![Search](/images/search.png)

- View of the new reservation page with a filled out sample. ( Reservation availability hours: 10:30am - 9:30pm / Closed on Tuesdays )

![NewReservation](/images/newReservation.png)

- View of the table page which allows user to create a new table. ( Table name must be 2 or more characters )

![Table](/images/newTable.png)


## API

| Route       | Get         | Put        | Post         | Delete       |      
| ----------- | ----------- | ---------- | ------------ | ------------ |
| ```/reservations```      | ✅      |❌      | ✅    |       ❌       |
| ```/reservations/:reservation_id```   | ✅        | ✅       | ❌         | ❌         |
| ```/reservations/:reservation_id/status```      | ❌      |✅      | ❌    |       ❌       |
| ```/tables```   | ✅        | ❌       | ✅         | ❌         |
| ```/tables/:table_id```   | ✅        | ❌       | ❌         | ❌         |
| ```/tables/:table_id/seat```   | ❌        | ✅       | ❌         | ✅         |


## Installation

1. Fork and clone this repository.
1. Run `cp ./back-end/.env.sample ./back-end/.env`.
1. Update the `./back-end/.env` file with the connection URL's to your ElephantSQL database instance.
1. Run `cp ./front-end/.env.sample ./front-end/.env`.
1. You should not need to make changes to the `./front-end/.env` file unless you want to connect to a backend at a location other than `http://localhost:5000`.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.

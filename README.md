
# **TICKETI TAMASHA** 
----

Ticketi Tamasha  event ticketing system is an online platform that allows users to browse, purchase and manage tickets for various events such as concerts, conferences, sports games, festivals, and more. The system provides a centralized place for event organizers to sell tickets and for customers to purchase them, eliminating the need for physical ticket sales and paper tickets;

*User registration and account management: Users can create an account, edit their profile, and manage their ticket orders.

*Event listing and management: Event organizers can list and manage their events, including details such as date, time, venue, pricing, seating options, and availability of tickets.

*Ticket purchasing: Customers can browse and purchase tickets for events, choose their seats, and make payments through the platform. The system should support multiple payment options such as credit card, debit card, PayPal, and other popular payment gateways.

*Ticket delivery: After a successful purchase, customers receive electronic tickets via email or mobile app that they can use to gain entry to the event


----

## Demo
![Demo](/public/images/T-Tamasha.gif)

## Technologies used
  * Javascript
  * React
  * Bootsrap
  * Google Fonts
  * Custom API Server -Ruby on Rails
  * Active Record: :storage


----

## Set up and intructions
### Set Up
This app consists of a React frontend and and a Rails backend as the API. 
To ensure that the app works as intended ensure that your machine meets the following requirement

  * The ruby version should be 2.7.4
  * You have PostgressSQL installed as that is the database used in the project
  * The version of rails installed should be Rails 7.0.4.3 or higher


### Instructions

*Clone the repository 
```
$ git clone git@https://github.com/derrickmomanyi/Ticketi-Tamasha.git
```

*Install the necessary gems
```
bundle install
```
*Create the PostgreSQL database:
```
rails db:create 
```
*Migrate the database
```
rails db:migrate 
```
On Development


## Usage

To run the Rails application,Start the server:
```
rails s
```

Then, navigate to http://localhost:4000 in your web browser to view the application.

----
## Features
 A user has the ability to:
  * Login to the app as an user
  * View all available events
  * Search for an event by name or category
  * Add an event to their favorites
  * Purchase a ticket via M-pesa
  * Remove an event from their favourites
  * Logout of the app

As an organizer, I have the ability to:
  * Login as an organizer
  * View all available events created by me, as the organizer, and all events by other organizers
  * Search for an event by name or category
  * Purchase a ticket via M-pesa
  * Create a draft event, that will be saved in the drafts section pending review to be added to all    events
  * Logout of the app

---

# Authors
 Derrick Momanyi
 Happiness James
 Ian Gathui
 Dennis Mugambi
 Jesse Wambu



## Configuration


This application is hosted on render cloud to view (https://tamasha.onrender.com)
The application also uses Amazon Web Service(AWS) for active storage of images


## Contributing

If you would like to contribute to the project, please open a pull request with your changes



 # License

Copyright © 2023 Tikiti Tamasha. This project is MORINGA SCHOOL licensed.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

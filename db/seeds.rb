# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
#some cool seeding data goes here
events_data = [
  {
    title: "Event 1",
    image: "event1.jpg",
    category: "Category 1",
    description: "Event 1 description",
    hosted_by: "Host 1",
    featuring: "Performer 1",
    dress_code: "Casual",
    location: "Location 1",
    date: Date.today + 7.days,
    time: Time.now,
    tickets: 100,
    price: 10
  },
  {
    title: "Event 2",
    image: "event2.jpg",
    category: "Category 2",
    description: "Event 2 description",
    hosted_by: "Host 2",
    featuring: "Performer 2",
    dress_code: "Formal",
    location: "Location 2",
    date: Date.today + 14.days,
    time: Time.now,
    tickets: 50,
    price: 15
  }
]

# Create events
Event.create!(events_data)

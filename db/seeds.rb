puts "🌱 Seeding Events..."

Event.create([{
    title: "Gentleman in Nairobi",
             image: "https://tikiti.co.ke/images/6421b308c1e2d.jpg",
             category: "Music",
             description: "Join us for an evening of live reggae music in the park.",
             hosted_by: "Gentlemen",
             featuring: "Gentle bands",
             dress_code: "Casual",
             location: "Nairobi",
             date: Date.new(2023, 6, 15),
             time: Time.new(2023, 6, 15, 19, 0, 0),
             tickets: 100,
             price: 10
           
},
{
    title: "Betrayal in the city",
        image: "https://tikiti.co.ke/images/63ce9626c8a69.jpg",
        category: "Theatre plays",
        description: "Come see the latest works of local actors.",
        hosted_by: "Francis Imbuga",
        featuring: "Various actors",
        dress_code: "Smart casual",
        location: "Kenya National Theatre",
        date: Date.new(2023, 7, 1),
        time: Time.new(2023, 7, 1, 18, 0, 0),
        tickets: 200,
        price: 20
},
{
  title: "Friday Fight Night",
             image: "https://tikiti.co.ke/images/633fe1ded4edb.jpg",
             category: "Sports",
             description: "See your favourite fighters clash head to head.",
             hosted_by: "King Rock",
             featuring: "Local Boxers",
             dress_code: "Casual",
             location: "Carnivore Grounds",
             date: Date.new(2023, 8, 15),
             time: Time.new(2023, 8, 15, 12, 0, 0),
             tickets: 300,
             price: 20
             
},
{
   title: "Cultural Festival",
             image: "https://tikiti.co.ke/images/6261d30b0af05.jpg",
             category: "Culture",
             description: "Sample different clothes,dishes,art,music from around the worls.",
             hosted_by: "Mejja Genge",
             featuring: "Local talent",
             dress_code: "Casual",
             location: "City Center",
             date: Date.new(2023, 8, 15),
             time: Time.new(2023, 8, 15, 12, 0, 0),
             tickets: 400,
             price: 20
          
},
{
   title: "concours D'elegance",
             image: "https://tikiti.co.ke/images/62ebba36dd39c.jpg",
             category: "Motor Show",
             description: "See your favorite classic cars on display.",
             hosted_by: "Alfa Romeo Owners Club",
             featuring: "Cool Classic Cars",
             dress_code: "Casual",
             location: "Karen",
             date: Date.new(2023, 8, 15),
             time: Time.new(2023, 8, 15, 12, 0, 0),
             tickets: 200,
             price: 20
           
}
])
puts "✅ Done seeding!"

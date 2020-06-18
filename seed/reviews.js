const db = require('../db/connection')
const REVIEW = require('../models/review')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const reviews =
    [
      {
        "name": [{ "first": "Johnny", "last": "Johnson"}],
        "imgURL": "https://images.unsplash.com/photo-1494708001911-679f5d15a946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "review": "It was much better than I expected. Everything was simply decadent. Try out the huge selection of incredible appetizers. The waiter was prompt and polite. I'd give more than 5 stars if I could!",
        "starCount": "5",
        "featuredChef": "true"
      },
      {
        "name": [{ "first": "John", "last": "Smith"}],
        "imgURL": "https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "review": "Bleh. The whole place was just dirty. The photos of the food were appetizing and palpable, but didn't live up to the hype. I was not very pleased to find out that the coffee wasn't organic. They need to get their act together before I set foot in this place again.",
        "starCount": "2",
        "featuredChef": "false"
      },
      {
        "name": [{ "first": "Kimberly", "last": "Thomas"}],
        "imgURL": "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
        "review": "Gross! The burger was so undercooked it started eating the lettuce. This place is very dumpy and in a serious need of a makeover. I wish I could put a sign out front that said `DONT EAT HERE!` ",
        "starCount": "1",
        "featuredChef": "false"
      },
      {
        "name": [{ "first": "Reagan", "last": "Gordon"}],
        "imgURL": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "review": "This place had a lot of heart. The decor was unique and incredible. I was happy to see how clean everything was. The food was flavorful, savory, and succulent. Make sure to save room for dessert, because that was the best part of the meal! I removed a star because the staff kept looking at me funny.",
        "starCount": "4",
        "featuredChef": "true"
      },
      {
        "name": [{ "first": "Ian", "last": "Gooch"}],
        "imgURL": "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "review": "I don't understand the hype about this place. The waiter was nothing remarkable. The ambiance gives off an earthy feel-good vibe. I felt the prices were too high given the quality of the food. I had a satisfactory experience and will have to try it again.",
        "starCount": "3",
        "featuredChef": "false"
      },
      {
        "name": [{ "first": "Samuel", "last": "Greenleaf"}],
        "imgURL": "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "review": "It was much better than I expected. Everything was just so yummy. The food was flavorful, savory, and succulent. Make sure to save room for dessert, because that was the best part of the meal! I could see myself being a regular here.",
        "starCount": "4",
        "featuredChef":  "true"
      },
      {
        "name": [{ "first": "Keagan", "last": "Robinson"}],
        "imgURL": "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=644&q=80",
        "review": "This place was just ok. The whole place was just dirty. The chicken was a little dry. I would be hard pressed to come back.",
        "starCount": "2",
        "featuredChef":  "true"
      },
      {
        "name": [{ "first": "Mike", "last": "Miller"}],
        "imgURL": "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "review": "I can summarize my visit in one word: Terrible. The service was terrible. The waiter was very rude. Overhyped. Eating here is like playing Russian Roulette, only you have a 5 out of 6 chance of getting food poisoning. Everything tasted either microwaved or straight from a can. I wish I could put a sign out front that said `DONT COME HERE!` ",
        "starCount": "1",
        "featuredChef": "false"
      },
      {
        "name": [{ "first": "Robert", "last": "North"}],
        "imgURL": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "review": "Yumm-o! I found the ambiance to be very charming. Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. I was happy to see how clean everything was. The waiter did an excellent job. I'm definitely coming back for more!",
        "starCount": "5",
        "featuredChef": "true"
      },
      {
        "name": [{ "first": "John", "last": "Snow"}],
        "imgURL": "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80",
        "review": "I've got a fetish for good food and this place gets me hot! After my meal, I was knocked into a food coma. Everything from the starters to the entrees to the desserts meshed perfectly with my flavor-profile. I found the ambiance to be very charming. The waitress was prompt and polite. I'd give more than 5 stars if I could!",
        "starCount": "5",
        "featuredChef": "true"
      },
  ]

await REVIEW.insertMany(reviews)
console.log("Created review!")
}
const run = async () => {
await main()
db.close()
}

run()
const db = require('../db/connection')
const Recipe = require('../models/recipe')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const recipes =
[
  {
    "chefName": "Jeffrey Garten",
    "img": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "bio": "Having worked alongside many of top chefs in NYC, Jeffrey brings a unique blend of flavor into each dish. Recently featured in chef's weekly.",
    "knownFor": "healthy, meal planning, low calorie",
    "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    "imageType": "jpg",
    "servings": 2,
    "readyInMinutes": 45,
    "difficultyLevel": "easy",
    "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately 19g of protein , 20g of fat , and a total of  584 calories . For $1.63 per serving , this recipe  covers 23%  of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately 45 minutes . All things considered, we decided this recipe  <b>deserves a spoonacular score of 83%. This score is awesome",
    "ingredients": [
      {
        "name": "butter",
        "original": "1 tbsp butter",
      },
      {
        "name": "cauliflower florets",
        "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces"
      },
      {
        "name": "cheese",
        "original": "2 tbsp grated cheese (I used romano)"
      }
    ],
    "steps": [
      {
        "number": 1,
        "step": "In a large skillet, melt butter over medium heat until foamy"
      },
      {
        "number": 2,
        "step": "Then add bread crumbs, tossing to coat in butter, until toasted and lightly browned"
      },
      {
        "number": 3,
        "step": "Remove from pan into small bowl; mix in cheese and about a tablespoon of the green scallion tops."
      },
      {
        "number": 4,
        "step": "In the meantime, begin to prepare your pasta according to the directions on the package. While the pasta is cooking, put about a tablespoon of olive oil in the same pan you used for the bread crumbs."
      },
      {
        "number": 5,
        "step": "Over medium heat, add the garlic, whites of the scallions, and cauliflower to the skillet. Saute until the cauliflower shows some caramelization."
      },
      {
        "number": 6,
        "step": "Over medium heat, add the garlic, whites of the scallions, and cauliflower to the skillet. Saute until the cauliflower shows some caramelization."
      },
      {
        "number": 7,
        "step": "Then add the wine until the florets are tender-crisp. Add salt, pepper, and red pepper flakes."
      },
      {
        "number": 8,
        "step": "When pasta is just shy of al dente, reserve about a cup of the cooking water and drain the pasta. Add the drained pasta to the skillet—still over medium heat—with the veggies and toss with some pasta water, as necessary (I added a little at a time; I ended up using about 1/2 cup), till the pasta is coated and turns easily. "
      },
      {
        "number": 9,
        "step": "You may want to add another little drizzle of olive oil. Again, taste and season accordingly."
      }
    ]
  }
]

    await Recipe.insertMany(recipes)
    console.log("Created recipes!")
    }
    const run = async () => {
    await main()
    db.close()
    }
    
    run()
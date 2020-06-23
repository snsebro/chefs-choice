const db = require('../db/connection')
const Recipe = require('../models/recipe')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  await Recipe.deleteMany()
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
      },
      {
        
        "name": "extra virgin olive oil",
        "original": "1-2 tbsp extra virgin olive oil",
      },
      {
        "name": "garlic",
        "original": "5-6 cloves garlic",
      },
      {
        "name": "pasta",
        "original": "6-8 ounces pasta (I used linguine)",
      },
      {
        "name": "red pepper flakes",
        "original": "couple of pinches red pepper flakes, optional",
      },
      {
        "name": "salt and pepper",
        "original": "salt and pepper, to taste",
      },
      {
        "name": "scallions",
        "original": "3 scallions, chopped, white and green parts separated",
      },
      {
        "name": "white wine",
        "original": "2-3 tbsp white wine",
      },
      {
        "name": "whole wheat bread crumbs",
        "original": "1/4 cup whole wheat bread crumbs (I used panko)",
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
    ],
    "Equipment": [
      {
        "name": "skillet"
      },
      {
        "name": "Grill"
      },
      {
        "name": "bowl"
      },
      {
        "name": "knife"
      },
      {
        "name": "drainer"
      }
    ]
  },
  {
    "chefName": "Dave Houghton",
    "img": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "bio": "Having worked alongside many of top chefs in NYC, Jeffrey brings a unique blend of flavor into each dish. Recently featured in chef's weekly.",
    "knownFor": "healthy, meal planning, low calorie",
    "title": "Garlic Butter Grilled Steak & Shrimp",
    "image": "https://images.unsplash.com/photo-1578332049773-b6f35e587618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1358&q=80",
    "servings": 4,
    "readyInMinutes": 25,
    "difficultyLevel": "medium",
    "summary": "Grilled Steak & Shrimp (SURF AND TURF) slathered in garlic butter makes for the BEST steak recipe! A gourmet steak dinner that tastes like something out of a restaurant, ready and on the table in less than 15 minutes.",
    "ingredients": [
      {
        "name": "butter",
        "original": "6 tbsp butter",
      },
      {
        "name": "garlic",
        "original": "4 cloves of garlic",
      },
      {
        "name": "parseley",
        "original": "1 tablespoon fresh parsley, chopped",
      },
      {
        "name": "olive oil",
        "original": "1 tablespoon olive oil",
      },
      {
        
        "name": "strip steaks",
        "original": "4 New York Steak strip steaks (Porterhouse steaks)",
      },
      {
        "name": " Salt and pepper",
        "original": "salt and pepper to taste",
      },
      {
        
        "name": "shrimp",
        "original": "8 ounces shrimp deveined, tails on or off",
      }
    ],
    "Equipment": [
      {
        "name": "skillet"
      },
      { 
        "name": "Grill"
      },
      {
        "name": "bowl"
      },
      {
        "name": "knife"
      }
    ],
    "steps": [
      {
        "number": 1,
        "step": "Mix together butter, garlic and fresh chopped parsley. Refrigerate until ready to use."
      },
      {
        "number": 2,
        "step": "Heat a large grill over high heat. Lightly grease grill plates with oil. Pat steaks dry with paper towel. Brush lightly with oil and generously season with salt and pepper."
      },
      {
        "number": 3,
        "step": "Grill steaks for 4-5 minutes each side until browned and cooked to desired doneness. Spread half of the butter all over of steaks. Transfer steaks to a warm plate and let rest for 5 minutes."
      },
      {
        "number": 4,
        "step": "While steaks are resting, melt remaining butter. Season shrimp with salt and pepper. "
      },
      {
        "number": 5,
        "step": "Reduce heat to medium and grill your shrimp for 5-6 minutes, depending not the size and thickness of your shrimp. Flip each one halfway through cook time and continue cooking until they turn nice and pink in colour while white and opaque on the inside."
      },
      {
        "number": 6,
        "step": "Toss remaining butter through shrimp and serve with steak!"
      }
    ]
      },
      {
        "chefName": "Anna Reed",
        "img": "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "bio": "Having worked alongside many of top chefs in NYC, Anna brings a unique blend of flavor into each dish. Recently featured in chef's weekly.",
        "knownFor": "healthy, meal planning, low calorie",
        "id": 716344,
        "title": "Chicken & Waffles",
        "image": "https://images.unsplash.com/photo-1565880112491-e7c4c313850d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "imageType": "splash",
        "servings": "6",
        "readyInMinutes": "45min",
        "aggregateLikes": "10/10",
        "difficultyLevel": "hard",
        "summary": "If you like buttermilk fried chicken tenders and cornmeal waffles, then Southern-Style Chicken and Waffles are for you!  If you don’t want to fry a whole chicken, this easy chicken and waffles recipe is the answer with pan fried chicken tenders and crisp, tender buttermilk waffles from scratch.",
        "dishTypes": [
          "lunch",
          "main course",
          "main dish",
          "dinner"
        ],
        "ingredients": [
          {
            "name": "skin-on chicken thighs",
            "original": "skin-on chicken thighs",
            "originalName": "8 boneless, skin-on chicken thighs ",
            "unit": "thighs",
            "amount": 8
          },
          {
            "name": "2 cups buttermilk ",
            "original": "buttermilk",
            "originalName": "buttermilk",
            "unit": "cups",
            "amount": 2
          },
          {
            "name": "2 1/2 cups all-purpose flour, plus more if needed",
            "original": "all-purpose flour",
            "originalName": "2 1/2 cups all-purpose flour",
            "unit": "cups",
            "amount": 2.5
          },
          {
            "name": "1 tablespoon seasoned salt, such as Lawry's ",
            "original": "seasoned salt",
            "originalName": "seasoned salt",
            "unit": "tablespoon",
            "amount": 1
          },
          {
            "name": "1 teaspoon paprika ",
            "original": "paprika",
            "originalName": "paprika",
            "unit": "teaspoon",
            "amount": 1
          },
          {
            "name": "1 teaspoon freshly ground black pepper",
            "original": "freshly ground black pepper",
            "originalName": "freshly ground black pepper",
            "unit": "teaspoon",
            "amount": 1
          },
          {
            "name": "1 teaspoon ground dried thyme ",
            "original": "dried thyme",
            "originalName": "dried thyme",
            "unit": "teaspoon",
            "amount": 1
          },
          {
            "name": "1/2 teaspoon cayenne pepper, plus more if needed",
            "original": "cayenne pepper",
            "originalName": "cayenne pepper",
            "unit": "teaspoon",
            "amount": 0.25
          },
          {
            "name": "1/4 cup milk, plus more if needed",
            "original": "milk",
            "originalName": "milk",
            "unit": "cup",
            "amount": 0.25
          },
          {
            "name": "Vegetable oil, for frying ",
            "original": "Vegetable oil",
            "originalName": "Vegetable oil",
            "unit": "a pinch",
            "amount": 1
          },
          {
            "name": "2 cups all-purpose flour",
            "original": "all-purpose flour",
            "originalName": "all-purpose flour",
            "unit": "cups",
            "amount": 2
          },
          {
            "name": "1/4 cup sugar ",
            "original": "sugar",
            "originalName": "sugar",
            "unit": "cup",
            "amount": 0.25
          },
          {
            "name": "1 tablespoon baking powder",
            "original": "baking powder",
            "originalName": "baking powder",
            "unit": "tablespoon",
            "amount": 1
          },
          {
            "name": "1/2 teaspoon kosher salt ",
            "original": "1 1/2 cups milk ",
            "originalName": "",
            "unit": "",
            "amount": 1
          },
          {
            "name": "1 tablespoon vanilla extract ",
            "original": "vanilla extract",
            "originalName": "vanilla extract",
            "unit": "tablespoon",
            "amount": 1
          },
          {
            "name": "4 large egg whites plus 2 large egg yolks ",
            "original": "egg",
            "originalName": "egg",
            "unit": "eggs",
            "amount": 6
          },
          {
            "name": "8 tablespoons (1 stick) salted butter, melted ",
            "original": "butter",
            "originalName": "butter",
            "unit": "tablespoon",
            "amount": 8
          },
          {
            "name": "1 to 2 jalapenos, chopped",
            "original": "jalapenos",
            "originalName": "jalapenos",
            "unit": "",
            "amount": "1-2"
          },
          {
            "name": "1 cup pancake syrup",
            "original": "pancake syrup",
            "originalName": "pancake syrup",
            "unit": "cup",
            "amount": 1
          },
          {
            "name": "1/4 cup bourbon ",
            "original": "bourbon",
            "originalName": "bourbon",
            "unit": "cup",
            "amount": 0.25
          },
          {
            "name": "4 tablespoons (1/2 stick) salted butter ",
            "original": "butter",
            "originalName": "butter",
            "unit": "tablespoons",
            "amount": 4
          },
          {
            "name": "1/4 teaspoon cayenne pepper ",
            "original": "cayenne pepper ",
            "originalName": "cayenne pepper ",
            "unit": "teaspoon",
            "amount": 0.25
          }
        ],
        "Equipment": [
          {
            "id": 2345,
            "name": "deepfrier"
          },
          {
            "id": 124,
            "name": "cup"
          },
          {
            "id": 3,
            "name": "measuring spoons"
          },
          {
            "id": 4,
            "name": "mixing bowl"
          },
          {
            "id": 5,
            "name": "oven"
          },
          {
            "id": 6,
            "name": "waffle iron"
          },
          {
            "id": 7,
            "name": "spantual/mixer"
          },
          {
            "id": 8,
            "name": "whisk"
          },
          {
            "id": 9,
            "name": "stove top"
          }
        ],
        "steps": [
          {
            "number": 1,
            "step": "For the fried chicken: Thoroughly rinse the chicken, then cover all the pieces with 1 3/4 cups of buttermilk. Soak in the fridge overnight or up to 24 hours."
          },
          {
            "number": 2,
            "step": "When you're ready to fry the chicken, remove the bowl from the fridge and let it sit on the counter for 30 minutes to take off the chill."
          },
          {
            "number": 3,
            "step": "In the meantime, preheat the oven to 360 degrees F and mix the breading. Put the flour, seasoned salt, paprika, pepper, thyme and cayenne (extra cayenne if you like heat) in a very large bowl and stir together well."
          },
          {
            "number": 4,
            "step": "In a small bowl, combine the milk and remaining 1/4 cup buttermilk. Pour into the flour mixture and, with a fork, gradually mix until there are little lumps throughout. This will adhere to the chicken and make for a crispier breading. If necessary, add a little more flour or milk to the bowl in order to make it slightly lumpy."
          },
          {
            "number": 5,
            "step": "Heat 1 1/2 to 2 inches of vegetable oil in a deep skillet over medium-high heat until a deep-fry thermometer registers 365 degrees F. Lower the heat slightly, if necessary, to keep the oil from getting hotter."
          },
          {
            "number": 6,
            "step": "Working in batches, thoroughly coat each chicken piece with the breading, pressing extra breading onto the chicken if necessary. Place the breaded pieces on a plate."
          },
          {
            "number": 7,
            "step": "Add the chicken to the oil 3 or 4 pieces at a time. Make sure they aren't sticking together, then cover the skillet and fry for 5 to 7 minutes, checking occasionally to make sure the chicken isn't getting too brown. Turn the pieces over, cover again and cook 3 to 5 minutes more. All the while, monitor the temperature of the oil to make sure the chicken doesn't burn. Transfer the fried chicken pieces to a baking sheet (they will not be completely cooked through) and continue frying the rest of the chicken."
          },
          {
            "number": 8,
            "step": "Bake the thighs for 15 minutes to finish the cooking process. Sometimes I'll cut into the thicker part of one of the larger pieces, just to make sure the chicken is cooked through. (If any pink juice or meat is visible, the chicken needs to continue cooking in the oven.) Cover and keep warm."
          },
          {
            "number": 9,
            "step": "For the waffles: Preheat the waffle iron to the regular setting. Sift together the flour, sugar, baking powder and salt in a bowl."
          },
          {
            "number": 10,
            "step": "In a separate bowl, whisk together the milk, vanilla and 2 egg yolks. Pour over the dry ingredients and very gently stir until halfway combined. Pour in the melted butter and chopped jalapenos and continue mixing very gently until combined."
          },
          {
            "number": 11,
            "step": "In a separate bowl (or using a mixer), beat the 4 egg whites with a whisk until stiff. Slowly fold them into the batter, stopping short of mixing them all the way through."
          },
          {
            "number": 12,
            "step": "Scoop the batter into your waffle iron in batches and cook according to the manufacturer's directions (lean toward being a little deep golden and crisp!). Keep warm."
          },
          {
            "number": 13,
            "step": "For the sauce: Pour the pancake syrup and bourbon in a small pot and bring to a boil. Turn down the heat and simmer for 3 to 4 minutes. Turn off the heat and whisk in the butter 1 tablespoon at a time, then the cayenne."
          },
          {
            "number": 14,
            "step": "To serve: Place 2 chicken thighs on top of a waffle. Pour the warm sauce over everything and serve immediately."
          }
        ]
      },
      {
        "chefName": "Anna Reed",
        "img": "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "bio": "Having worked alongside many of top chefs in NYC, Anna brings a unique blend of flavor into each dish. Recently featured in chef's weekly.",
        "knownFor": "healthy, meal planning, low calorie",
        "id": 563496,
        "title": "Chicken Tikka Masala",
        "image": "https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-2.jpg",
        "imageType": "jpg",
        "servings": "5",
        "readyInMinutes": "45min",
        "aggregateLikes": "20,000",
        "difficultyLevel": "medium",
        "summary": "Also called 'Butter Chicken, Chicken Tikki is easy to make and full of beautiful flavors'",
        "dishTypes": [
          "main dish",
          "dinner"
        ],
        "ingredients": [
          {
            "name": "boneless, skinless chicken",
            "original": "chicken breasts",
            "originalName": "Chicken breasts",
            "unit": "oz",
            "amount": 28
          },
          {
            "name": "plain yogurt",
            "original": "plain yogurt",
            "originalName": "plain yogurt",
            "unit": "cup",
            "amount": 0.5
          },
          {
            "name": "minced garlic",
            "original": "Minced Garlic",
            "originalName": "Minced Garlic",
            "unit": "tbsp",
            "amount": 1.5
          },
          {
            "name": "minced ginger",
            "original": "Minced Ginger",
            "originalName": "Minced Ginger",
            "unit": "tbsp",
            "amount": 1
          },
          {
            "name": "garam masala",
            "original": "Garam Masala",
            "originalName": "Garam Masala",
            "unit": "tsp",
            "amount": 2
          },
          {
            "name": "turmeric",
            "original": "turmeric",
            "originalName": "turmeric",
            "unit": "tsp",
            "amount": 1
          },
          {
            "name": "ground cumin",
            "original": "Ground cumin",
            "originalName": "Ground cumin",
            "unit": "tsp",
            "amount": 1
          },
          {
            "name": "red chili powder",
            "original": "red chili powder",
            "originalName": "red chili powder",
            "unit": "tsp",
            "amount": 1
          },
          {
            "name": "salt",
            "original": "salt",
            "originalName": "salt",
            "unit": "tsp",
            "amount": 1
          },
          {
            "name": "olive oil",
            "original": "olive oil",
            "originalName": "olive oil",
            "unit": "tbsp",
            "amount": 2
          },
          {
            "name": "ghee",
            "original": "ghee",
            "originalName": "ghee",
            "unit": "tbsp",
            "amount": 2
          },
          {
            "name": "onion",
            "original": "onion",
            "originalName": "onion",
            "unit": "",
            "amount": 1
          },
          {
            "name": "garlic",
            "original": "garlic",
            "originalName": "garlic",
            "unit": "tbsp",
            "amount": 1.5
          },
          {
            "name": "ginger",
            "original": "ginger",
            "originalName": "ginger",
            "unit": "tbsp",
            "amount": 1
          },
          {
            "name": "ground cumin",
            "original": "ground cumin",
            "originalName": "ground cumin",
            "unit": "tsp",
            "amount": 1.5
          },
          {
            "name": "garam masala",
            "original": "garam masala",
            "originalName": "garam masala",
            "unit": "tsp",
            "amount": 1.5
          },
          {
            "name": "coriander",
            "original": "coriander",
            "originalName": "coriander",
            "unit": "tsp",
            "amount": 1
          },
          {
            "name": "crushed tomatoes",
            "original": "crushed tomatoes",
            "originalName": "crushed tomatoes",
            "unit": "oz",
            "amount": 14
          },
          {
            "name": "red chilli powder",
            "original": "red chilli powder",
            "originalName": "red chilli powder",
            "unit": "tsp",
            "amount": 1
          },
          {
            "name": "salt",
            "original": "salt",
            "originalName": "salt",
            "unit": "tsp",
            "amount": 1.25
          },
          {
            "name": "heavy cream",
            "original": "heavy cream",
            "originalName": "heavy cream",
            "unit": "cup",
            "amount": 1
          },
          {
            "name": "sugar",
            "original": "sugar",
            "originalName": "sugar",
            "unit": "tbsp",
            "amount": 1
          },
          {
            "name": "kasoori methi",
            "original": "kasoori methi",
            "originalName": "kasoori methi",
            "unit": "tsp",
            "amount": 0.5
          }
        ],
        "Equipment": [
          {
            "id": 1,
            "name": "large bowl"
          },
          {
            "id": 2,
            "name": "skillet/pot"
          },
          {
            "id": 3,
            "name": "pan"
          },
          {
            "id": 4,
            "name": "blender"
          }
        ],
        "steps": [
          {
            "number": 1,
            "step": "In a bowl, combine chicken with all of the ingredients for the chicken marinade; let marinate for 30 minutes to an hour (or overnight if time allows)."
          },
          {
            "number": 2,
            "step": "Heat oil in a large skillet or pot over medium-high heat. When sizzling, add chicken pieces in batches of two or three, making sure not to crowd the pan. Fry until browned for only 3 minutes on each side. Set aside and keep warm. (You will finish cooking the chicken in the sauce.)"
          },
          {
            "number": 3,
            "step": "Heat butter or ghee in the same pan. Fry the onions until they start to sweat (about 6 minutes) while scraping up any browned bits stuck on the bottom of the pan."
          },
          {
            "number": 4,
            "step": "Add garlic and ginger and sauté for 1 minute until fragrant, then add ground coriander, cumin and garam masala. Let cook for about 20 seconds until fragrant, while stirring occasionally."
          },
          {
            "number": 5,
            "step": "Add crushed tomatoes, chili powder and salt. Let simmer for about 10-15 minutes, stirring occasionally until sauce thickens and becomes a deep brown red colour."
          },
          {
            "number": 6,
            "step": "Remove from heat, scoop mixture into a blender and blend until smooth. You may need to add a couple tablespoons of water to help it blend (up to 1/4 cup). Work in batches depending on the size of your blender."
          },
          {
            "number": 7,
            "step": "Pour the puréed sauce back into the pan. Stir the cream, sugar and crushed kasoori methi (or fenugreek leaves) through the sauce. Add the chicken with juices back into the pan and cook for an additional 8-10 minutes until chicken is cooked through and the sauce is thick and bubbling."
          },
          {
            "number": 8,
            "step": "Garnish with chopped cilantro and serve with fresh, hot garlic butter rice and fresh homemade Naan bread!"
          }
        ]
      },
      {
        "chefName": "Jack Wise",
        "img": "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "bio": "Having worked alongside many of top chefs in NYC, Jack brings a unique blend of flavor into each dish. Recently featured in chef's weekly.",
        "knownFor": "healthy, meal planning, low calorie",
        "title": "Lemon Butter Chicken",
        "image": "https://www.cookingclassy.com/wp-content/uploads/2018/07/lemon-butter-chicken-16-768x1152.jpg",
        "servings": "4",
        "readyInMinutes": "30min",
        "difficultyLevel": "Easy",
        "summary": "",
        "ingredients": [
          {
            "name": "4 5oz Chicken Breasts",
            "original": "4 Chicken Breasts",
          },
          {
            "name": "Salt & Freshly ground black pepper",
            "original": "Salt & Freshly Ground black pepper"

          },
          {
            "name": "1/3 cup all-purpose flour",
            "original": "all purpose flour"
          },
          {
            "name": "1 Tbsp olive oil",
            "original": "olive oil"
          },
          {
            "name": "4 Tbsp unsalted butter, sliced into 1 Tbsp pices",
            "original": "unsalted butter, divided evenly"
          },
          {
            "name": "1 1/2 tsp minced garlic",
            "original": "minced garlic"
          },
          {
            "name": "1/2 cup low-sodium chicken broth",
            "original": "low-sodium chicken broth"
          },
          {
            "name": "3 Tbsp fresh lemon juice",
            "original": "fresh lemon juice"
          },
          {
            "name": "1/2 tsp fresh lemon zest",
            "original": "fresh lemon zest"
          },
          {
            "name": "1 1/2 Tbsp minced fresh parsley (optional)",
            "original": "minced fresh parsley (optional)"
          }
        ],
        "Equipment": [
          {
            "name": "Shallow dish"
          },
          {
            "name": "12 inch skillet"
          },
          {
            "name": "Plate"
          }
        ],
        "steps": [
          {
            "number": 1,
            "step": "Season both sides of chicken with salt and pepper."
          },
          {
            "number": 2,
            "step": "Place flour in a shallow dish then dredge both sides of chicken breasts in flour, one at a time."
          },
          {
            "number": 3,
            "step": "Heat 12-inch skillet over medium-high heat."
          },
          {
            "number": 4,
            "step": "Add olive oil and 1 Tbsp butter, let butter melt, then add in chicken breasts  in a single layer."
          },
          {
            "number": 5,
            "step": "Sear until golden brown on bottom, about 4 - 5 minutes then flip and continue to cook until chicken registers 165 degrees in center, about 4 - 5 minutes longer."
          },
          {
            "number": 6,
            "step": "Transfer chicken to a plate while leaving any little bit of excess oil in pan."
          },
          {
            "number": 7,
            "step": "Reduce to medium heat, add garlic and saute 20 seconds, or until just lightly golden brown, then pour in chicken broth while scraping browned bits up."
          },
          {
            "number": 8,
            "step": "Pour in lemon juice then bring mixture to a simmer, reduce heat slightly and let simmer until liquid has reduced by about half, about 2 minutes."
          },
          {
            "number": 9,
            "step": "Add in remaining 3 Tbsp butter and lemon zest, stir to melt butter."
          },
          {
            "number": 10,
            "step": "Return chicken to skillet, spoon sauce over chicken and garnish with parsley. Serve warm."
          }
        ]
      },
      {
        "chefName": "Dave Edwards",
        "img": "https://images.unsplash.com/photo-1488905971602-47901d26961b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "bio": "Having worked alongside many of top chefs in NYC, Dave brings a unique blend of flavor into each dish. Recently featured in chef's weekly.",
        "knownFor": "healthy, meal planning, low calorie",
        "title": "Grilled Salmon",
        "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60",
        "servings": 6,
        "readyInMinutes": 16,
        "difficultyLevel": "easy",
        "summary": "A simple soy sauce and brown sugar marinade, with hints of lemon and garlic, are the perfect salty-sweet complement to rich salmon fillets. Even my 9 year old loves this recipe!",
    
        "ingredients": [
          {
            "name": "salmon fillets",
            "original": "salmon fillets",
          },
          {
            "name": "lemon pepper",
            "original": "0.5 teaspons lemon pepper"
          },
          {
            "name": "garlic powder",
            "original": "0.25 teaspoons garilc powder"
          },
          {
            "name": "salt",
            "original": "0.5 teaspoons salt"
          },
          {
            "name": "soy sauce",
            "original": "0.33 cups soy sauce"
          },
          {
            "name": "brown sugar",
            "original": "0.33 cups brown sugar"
          },
          {
            "name": "water",
            "original": "0.33 cups water"
          },
          {
            "name": "vegetable oil",
            "original": "0.25 cup vegetable oil"
          }
        ],
        "Equipment": [
          {
            "id": 1,
            "name": "skillet"
          },
          {
            "id": 2,
            "name": "mixing bowl"
          },
          {
            "id": 3,
            "name": "grill"
          }
        ],
        "steps": [
          {
            "number": 1,
            "step": "Season salmon fillets with lemon pepper, garlic powder, and salt."
          },
          {
            "number": 2,
            "step": "In a small bowl, stir together soy sauce, brown sugar, water, and vegetable oil until sugar is dissolved. Place fish in a large resealable plastic bag with the soy sauce mixture, seal, and turn to coat. Refrigerate for at least 2 hours."
          },
          {
            "number": 3,
            "step": "Preheat grill for medium heat."
          },
          {
            "number": 4,
            "step": "Lightly oil grill grate. Place salmon on the preheated grill, and discard marinade. Cook salmon for 6 to 8 minutes per side, or until the fish flakes easily with a fork."
          }
        ]
      },
      {
        "chefName": "Sergey Avesolov",
        "img": "https://images.unsplash.com/photo-1589372911714-e3f567bfa6a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "bio": "Been cooking since I was 12, always enjoyed learning new recipes and teaching things to people",
        "knownFor": "healthy, meal planning, low calorie",
        "id": 12098,
        "title": "Grilled Bacon Jalapeno Wraps",
        "image": "https://images.unsplash.com/photo-1592005243970-8e62149fde11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60",
        "imageType": "jpg",
        "servings": 6,
        "readyInMinutes": 20,
        "aggregateLikes": 214,
        "difficultyLevel": "easy",
        "summary": "Jalapenos are stuffed with cream cheese, wrapped with bacon, and barbecued on the grill.",
        "dishTypes": [
          "lunch",
          "main course",
          "main dish",
          "dinner"
        ],
        "ingredients": [
          {
            "name": "jalapeno peppers",
            "original": "",
            "originalName": "",
            "unit": "",
            "amount": 6
          },
          {
            "name": "cream cheese",
            "original": "",
            "originalName": "",
            "unit": "ounces",
            "amount": 8
          },
          {
            "name": "bacon",
            "original": "",
            "originalName": "",
            "unit": "slices",
            "amount": 12
          }
        ],
        "Equipment": [
          {
            "id": 1,
            "name": "grill"
          },
          {
            "id": 2,
            "name": "kebab sticks"
          },
          {
            "id": 3,
            "name": "toothpicks"
          }
        ],
        "steps": [
          {
            "number": 1,
            "step": "Preheat an outdoor grill for high heat"
          },
          {
            "number": 2,
            "step": "Spread cream cheese to fill jalapeno halves. Wrap with bacon. Secure with a toothpick."
          },
          {
            "number": 3,
            "step": "Place on the grill, and cook until bacon is crispy."
          }
        ]
      },
      {
        "chefName": "Lea Smith",
        "img": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "bio": "Been cooking since I was 12, always enjoyed learning new recipes and teaching things to people",
        "knownFor": "healthy, meal planning, low calorie",
        "id": 713437,
        "title": "Chicken Sushi Burrito",
        "image": "https://healthynibblesandbits.com/wp-content/uploads/2016/02/Sushi-Burrito-10.jpg",
        "imageType": "jpg",
        "servings": 2,
        "readyInMinutes": 55,
        "aggregateLikes": 362,
        "difficultyLevel": "medium",
        "summary": "These chicken sushi burritos are great for lunch or dinner. This recipe makes 4 burritos and each burrito can serve 1 to 2 people",
        "dishTypes": [
          "lunch",
          "main course",
          "main dish",
          "dinner"
        ],
        "ingredients": [
          {
            "meta": [],
            "name": "Rice",
            "original": "5 cups cooked rice",
            "originalName": "Sushi Rice",
            "unit": "cups",
            "amount": 5.0
          },
          {
            "meta": [],
            "name": "Seasoning",
            "original": "4 tablespoons sushi seasoning",
            "originalName": "Sushi Seasoning",
            "unit": "tbsp",
            "amount": 1.0
          },
          {
            "meta": [],
            "name": "kosher salt",
            "original": "pinch of kosher salt",
            "originalName": "kosher salt",
            "unit": "pinch",
            "amount": 1
          },
          {
            "meta": [],
            "name": "Chicken",
            "original": "1 1/4 pounds chicken breast",
            "originalName": "1 1/4 pounds chicken breast",
            "unit": "pounds",
            "amount": 1.25
          },
          {
            "meta": [],
            "name": "kosher salt",
            "original": "generous pinch of kosher salt",
            "originalName": "generous pinch of kosher salt",
            "unit": "pinch",
            "amount": 1
          },
          {
            "meta": [],
            "name": "chili powder",
            "original": "1 teaspoon chili powder",
            "originalName": "1 teaspoon chili powder",
            "unit": "tspn",
            "amount": 1
          },
          {
            "meta": [],
            "name": "cajun seasoning",
            "original": "1 teaspoon of cajun seasoning",
            "originalName": "1 teaspoon of cajun seasoning",
            "unit": "tspn",
            "amount": 1
          },
          {
            "meta": [],
            "name": "granulated garlic",
            "original": "1/2 teaspoon granulated garlic",
            "originalName": "1/2 teaspoon granulated garlic",
            "unit": "tspn",
            "amount": 0.5
          },
          {
            "meta": [],
            "name": "Guacamole",
            "original": "1 large avocado",
            "originalName": "1 large avocado",
            "unit": "N/A",
            "amount": 1
          },
          {
            "meta": [],
            "name": "Lime juice",
            "original": "1 tbspn lime juice",
            "originalName": "1 tbsn lime juice",
            "unit": "tbpsn",
            "amount": 1
          },
          {
            "meta": [],
            "name": "garlic clove",
            "original": "1 garlic clove",
            "originalName": "1 garlic clove",
            "unit": "N/A",
            "amount": 1
          },
          {
            "meta": [],
            "name": "Chopped red onion",
            "original": "2 tbspn chopped red onion",
            "originalName": "2 tbspn chopped red onion",
            "unit": "tbspn",
            "amount": 2
          },
          {
            "meta": [],
            "name": "Red Pepper",
            "original": "1 small red pepper",
            "originalName": "1 small red pepper",
            "unit": "N/A",
            "amount": 1
          },
          {
            "meta": [],
            "name": "carrot",
            "original": "1 carrot, peeled and cut to matchsticks",
            "originalName": "1 carrot, peeled and cut to matchsticks",
            "unit": "N/A",
            "amount": 1
          },
          {
            "meta": [],
            "name": "Persian Cucumber",
            "original": "1 persian cucumber, cut to matchsticks",
            "originalName": "1 persian cucumber, cut to matchsticks",
            "unit": "N/A",
            "amount": 1
          },
          {
            "meta": [],
            "name": "Roasted suhi seasweed (nori)",
            "original": "4 sheets of roasted sushi seaweed (nori)",
            "originalName": "4 sheets of roasted sushi seaweed (nori)",
            "unit": "sheets",
            "amount": 4
          }
        ],
        "Equipment": [
          {
            "id": 437,
            "name": "sushi mat"
          },
          {
            "id": 438,
            "name": "pan"
          },
          {
            "id": 367,
            "name": "bowl"
          }
        ],
        "steps": [
          {
            "number": 1,
            "step": "Cook rice according to package instructions. When rice is done, spread onto baking sheet to cool off. You don’t want to roll sushi with hot rice. Once it is cooled, about 15 minutes, pour into bowl and mix with sushi seasoning and a small pinch of salt."
          },
          {
            "number": 2,
            "step": "Cook chicken. If your chicken breasts were thick like mine, slice them in half, horizontally. Sprinkle kosher salt, chili powder, cajun seasoning, and garlic on the chicken breasts. Heat olive oil in a pan over medium-high heat and cook chicken until they are no longer pink or a meat thermometer registers 165 degrees F (75 degrees C), about 8 minutes. Dish up chicken and let it rest before cutting into strips."
          },
          {
            "number": 3,
            "step": "Prep guacamole by mashing avocado and mixing with the rest of the guacamole ingredients. Set aside."
          },
          {
            "number": 4,
            "step": "Lay sushi mat on your counter. Take a sheet of roasted sushi seaweed, and lay the shinier side down. Spread about a cup of cooked rice on top, making sure that the rice covers the entire surface of the seaweed. Lay about 4 strips of chicken an inch away from one end of the seaweed. Spread guacamole and top with vegetables. Roll up sushi burrito. Watch video for sushi rolling technique. Serve immediately."
          }
        ]
      },
      {
        "chefName": "John Wright",
        "img": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "bio": "From Wisconsin, I love exploring the world of creativity. Looking to connect with other chefs, professional and amateur", 
        "knownFor": "healthy, meal planning, low calorie",
        "id": 4370711,
        "title": "Deviled Eggs Recipe",
        "image": "https://embed.widencdn.net/img/mccormick/k8zkuxfqsq/1365x1365px/easy_deviled_eggs_5347.jpg?crop=true&anchor=342,0&q=80&color=ffffffff&u=o2hyef",
        "imageType": "jpg",
        "servings": 2,
        "readyInMinutes": 34,
        "aggregateLikes": 540,
        "difficultyLevel": "easy",
        "summary": "Deviled eggs are hard boiled eggs where the yolk is mixed with mayonnaise, mustard, vinegar, salt and pepper. The little sprinkle of paprika on top is the perfect finishing touch.",
        "dishTypes": [
          "lunch",
          "main course",
          "main dish",
          "dinner"
        ],
        "ingredients": [
          {
            "name": "Large eggs",
            "original": "6 large eggs",
            "originalName": "6 large eggs",
            "unit": "N/A",
            "amount": 6.0
          },
          {
            "name": "mayonnaise",
            "original": "3 tbsp mayonnaise",
            "originalName": "3 tbsp mayonnaise",
            "unit": "tbspn",
            "amount": 3.0
          },
          {
            "name": "Dijon Mustard",
            "original": "1 tsp Dijon mustard",
            "originalName": "1 tsp Dijon mustard",
            "unit": "1 tsp",
            "amount": 1.0
          },
          {
            "name": "apple cider vinegar",
            "original": "1 tsp apple cider vinegar",
            "originalName": "1 tsp apple cider vinegar",
            "unit": "tsp",
            "amount": 1.0
          },
          {
            "name": "salt and pepper",
            "original": "salt and pepper, to taste",
            "originalName": "salt and pepper, to taste",
            "unit": "pinch",
            "amount": 1.0
          },
          {
            "name": "paprika",
            "original": "1 tbsn paprika, for garnish",
            "originalName": "1 tbsn paprika, for garnish",
            "unit": "1 tbsn",
            "amount": 1.0
          }
        ],
        "Equipment": [
          {
            "id": 674,
            "name": "pot"
          },
          {
            "id": 693,
            "name": "spoon"
          }
        ],
        "steps": [
          {
            "number": 1,
            "step": "Bring a pot of water to a boil. Reduce the heat to low (or off) to ensure the water is no longer boiling or has bubbles and use a skimmer to place the eggs in the water. Then increase the heat back to high and set a timer for 14 minutes."
          },
          {
            "number": 2,
            "step": "While the eggs are boiling prepare an ice water bath and set aside."
          },
          {
            "number": 3,
            "step": "After 14 minutes, remove the eggs from the water and place in the ice water bath."
          },
          {
            "number": 4,
            "step": "Once the eggs have cooled completely, peel them and slice in half lengthwise. Remove the yolk to a small bowl with a spoon and place the egg whites on a plate."
          },
          {
            "number": 5,
            "step": "Mash the yolks with a fork and add the mayonnaise, mustard, vinegar, salt and pepper. Stir everything together."
          },
          {
            "number": 6,
            "step": "Use a spoon to add a portion of the deviled egg mixture back into the hole of each egg white. Sprinkle on paprika for garnish."
          }
        ]
      },
      {
        "chefName": "Sarah Trisha",
        "img": "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "bio": "From Maine, I love cooking seafood. Looking to share with the world my passion for cooking",
        "knownFor": "healthy, meal planning, low calorie",
        "id": 232543,
        "title": "Perfect Fish Tacos",
        "image": "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "imageType": "jpg",
        "servings": "8",
        "readyInMinutes": "35min",
        "aggregateLikes": "8.6/10",
        "difficultyLevel": "easy",
        "summary": "Love fish tacos? Well, these are the end-all be-all. Read on to see what makes these tacos so special. The fish—we use cod, but any flaky variety works—marinates in a mixture of lime juice, chili powder, and cumin that will become your standard. (Seriously, steak or chicken marinated in this will also taste bomb.) But the real gem of this recipe is the cabbage slaw—don't skip it. It takes just a few minutes to toss together and it's brightness is the perfect condiment to the spiced cod. ",
        "dishTypes": [
          "lunch",
          "main course",
          "main dish",
          "dinner"
        ],
        "ingredients": [
          {
            "name": "3 tbsp. extra-virgin olive oil",
            "original": "extra-virgin olive oil",
            "originalName": "extra-virgin olive oil",
            "unit": "tbsp",
            "amount": 3
          },
          {
            "name": "Juice of 1 lime",
            "original": "Lime",
            "originalName": "Lime",
            "unit": "",
            "amount": 1
          },
          {
            "name": "2 tsp. chili powder",
            "original": "chili powder",
            "originalName": "chili powder",
            "unit": "tsp.",
            "amount": 2
          },
          {
            "name": "1 tsp. paprika ",
            "original": "paprika",
            "originalName": "paprika",
            "unit": "tsp.",
            "amount": 1
          },
          {
            "name": "1/2 tsp. ground cumin",
            "original": "ground cumin",
            "originalName": "ground cumin",
            "unit": "tsp.",
            "amount": 0.5
          },
          {
            "name": "1/2 tsp. cayenne pepper",
            "original": "cayenne pepper",
            "originalName": "cayenne pepper",
            "unit": "tsp.",
            "amount": 0.5
          },
          {
            "name": "1 1/2 lb. cod",
            "original": "cod",
            "originalName": "cod",
            "unit": "lbs",
            "amount": 1.5
          },
          {
            "name": "1/2 tbsp. vegetable oil",
            "original": "vegetable oil",
            "originalName": "vegetable oil",
            "unit": "tbsp.",
            "amount": 0.5
          },
          {
            "name": "Kosher salt",
            "original": "Kosher salt",
            "originalName": "Kosher salt",
            "unit": "",
            "amount": 1
          },
          {
            "name": "Kosher salt",
            "original": "Kosher salt",
            "originalName": "Kosher salt",
            "unit": "",
            "amount": 1
          },
          {
            "name": "8 corn tortillas",
            "original": "corn tortillas",
            "originalName": "corn tortillas",
            "unit": "",
            "amount": 8
          },
          {
            "name": "1 avocado, diced",
            "original": "avocado",
            "originalName": "avocado",
            "unit": "",
            "amount": 1
          },
          {
            "name": "Lime wedges, for serving",
            "original": "Lime wedges",
            "originalName": "Lime wedges",
            "unit": "",
            "amount": 1
          },
          {
            "name": "Sour cream",
            "original": "Sour cream",
            "originalName": "Sour cream",
            "unit": "",
            "amount": 1
          },
          {
            "name": "1/4 c. mayonnaise",
            "original": "mayonnaise",
            "originalName": "mayonnaise",
            "unit": "cups",
            "amount": 0.25
          },
          {
            "name": "1 lime",
            "original": "1 lime",
            "originalName": "1 lime",
            "unit": "juice",
            "amount": 1
          },
          {
            "name": "2 tbsp. freshly chopped cilantr",
            "original": "cilantr",
            "originalName": "cilantr",
            "unit": "tbsp.",
            "amount": 2
          },
          {
            "name": "1 tbsp. honey",
            "original": "honey",
            "originalName": "honey",
            "unit": "tbsp.",
            "amount": 1
          },
          {
            "name": "2 cup shredded purple cabbage",
            "original": "purple cabbage",
            "originalName": "purple cabbage",
            "unit": "cup",
            "amount": 2
          },
          {
            "name": "1 c. corn kernels",
            "original": "corn kernels",
            "originalName": "corn kernels",
            "unit": "cup",
            "amount": 1
          },
          {
            "name": "1 jalapeño, minced",
            "original": "jalapeño",
            "originalName": "jalapeño",
            "unit": "minced",
            "amount": 1
          }
        ],
        "Equipment": [
          {
            "id": 1,
            "name": ""
          },
          {
            "id": 2,
            "name": ""
          },
          {
            "id": 3,
            "name": ""
          },
          {
            "id": 4,
            "name": ""
          },
          {
            "id": 5,
            "name": ""
          }
        ],
        "steps": [
          {
            "number": 1,
            "step": "In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne."
          },
          {
            "number": 2,
            "step": "Add cod, tossing until evenly coated. Let marinate 15 minutes."
          },
          {
            "number": 3,
            "step": "Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper."
          },
          {
            "number": 4,
            "step": "In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side. Let rest 5 minutes before flaking with a fork."
          },
          {
            "number": 5,
            "step": "Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream."
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
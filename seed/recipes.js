const db = require('../db/connection')
const Recipe = require('../models/recipe')
const Review = require('../models/review')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  await Recipe.deleteMany()
  const Review1 = await Review.findById('5eebaabfa2d43e571938188b')
  console.log(Review1)
  const recipes =
[
  {
    "chefName": "Jeffrey Garten",
    "img": "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "bio": "Having worked alongside many of top chefs in NYC, Jeffrey brings a unique blend of flavor into each dish. Recently featured in chef's weekly.",
    "knownFor": "healthy, meal planning, low calorie",
    "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
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
    ],
    "reviews": Review1._id
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
        "title": "Chicken & Waffles",
        "image": "https://images.unsplash.com/photo-1565880112491-e7c4c313850d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "servings": "6",
        "readyInMinutes": 45,
        "difficultyLevel": "hard",
        "summary": "If you like buttermilk fried chicken tenders and cornmeal waffles, then Southern-Style Chicken and Waffles are for you!  If you don’t want to fry a whole chicken, this easy chicken and waffles recipe is the answer with pan fried chicken tenders and crisp, tender buttermilk waffles from scratch.",
        "ingredients": [
          {
            "name": "chicken thighs",
            "original": "skin-on chicken thighs"
          },
          {
            "name": "buttermilk ",
            "original": "2 cups buttermilk"
          },
          {
            "name": "all-purpose flour",
            "original": "2 1/2 cups all-purpose flour",
          },
          {
            "name": "seasoned salt",
            "original": "1 tablespoon seasoned salt",
          },
          {
            "name": "paprika",
            "original": "1 teaspoon paprika",
          },
          {
            "name": "freshly ground black pepper",
            "original": "1 teaspoon freshly ground black pepper",
          },
          {
            "name": "dried thyme",
            "original": "1 teaspoon dried thyme",
          },
          {
            "name": "cayenne pepper",
            "original": "1/2 teaspoon cayenne pepper",
          },
          {
            "name": "Vegetable oil, for frying ",
            "original": "Vegetable oil",
          },
          {
            "name": "2 cups all-purpose flour",
            "original": "all-purpose flour",
          },
          {
            "name": "sugar",
            "original": "1/4 cup sugar",
          },
          {
            "name": "baking powder",
            "original": "1 tablespoon baking powder",
          },
          {
            "name": "milk",
            "original": "1 1/2 cups milk ",
          },
          {
            "name": "1 tablespoon vanilla extract ",
            "original": "vanilla extract",
          },
          {
            "name": "eggs",
            "original": "4 large egg whites plus 2 large egg yolks",
          },
          {
            "name": "salted butter",
            "original": "8 tablespoons (1 stick) salted butter, melted",
          },
          {
            "name": "jalapenos",
            "original": "1 to 2 jalapenos, chopped",
          },
          {
            "name": "pancake syrup",
            "original": "1 cup pancake syrup"
          },
          {
            "name": "bourbon",
            "original": "1/4 cup bourbon"
          },
          {
            "name": "butter",
            "original": "4 tablespoons (1/2 stick) salted butter"
          },
          {
            "name": "cayenne pepper ",
            "original": "1/4 teaspoon cayenne pepper "
          }
        ],
        "Equipment": [
          {
            "name": "deepfrier"
          },
          {
            "name": "cup"
          },
          {
            "name": "measuring spoons"
          },
          {
            "name": "mixing bowl"
          },
          {
            "name": "oven"
          },
          {
            "name": "waffle iron"
          },
          {
            "name": "spantual/mixer"
          },
          {
            "name": "whisk"
          },
          {
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
        "chefName": "Samantha Smith",
        "img": "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "bio": "Having worked alongside many of top chefs in NYC, Anna brings a unique blend of flavor into each dish. Recently featured in chef's weekly.",
        "knownFor": "healthy, meal planning, low calorie",
        "title": "Chicken Tikka Masala",
        "image": "https://cafedelites.com/wp-content/uploads/2018/04/Best-Chicken-Tikka-Masala-IMAGE-2.jpg",
        "servings": "5",
        "readyInMinutes": 45,
        "difficultyLevel": "medium",
        "summary": "Also called 'Butter Chicken, Chicken Tikki is easy to make and full of beautiful flavors'",
        "ingredients": [
          {
            "name": "boneless, skinless chicken",
            "original": "28 oz chicken breasts"
          },
          {
            "name": "plain yogurt",
            "original": "1/2 cup plain yogurt"
          },
          {
            "name": "minced garlic",
            "original": "1 1/2 tbsp Minced Garlic"
          },
          {
            "name": "minced ginger",
            "original": "1 tbsp Minced Ginger"
          },
          {
            "name": "garam masala",
            "original": " 2 tsp Garam Masala"
          },
          {
            "name": "turmeric",
            "original": "1 tsp turmeric"
          },
          {
            "name": "ground cumin",
            "original": "1 tsp Ground cumin"
          },
          {
            "name": "red chili powder",
            "original": "1 tsp red chili powder"
          },
          {
            "name": "salt",
            "original": "1 tsp salt"
          },
          {
            "name": "olive oil",
            "original": "2 tbsp olive oil"
          },
          {
            "name": "ghee",
            "original": "2 tbsp ghee"
          },
          {
            "name": "onion",
            "original": "1 onion"
          },
          {
            "name": "garlic",
            "original": "1.5 tbsp garlic"
          },
          {
            "name": "ginger",
            "original": "1 tbsp ginger"
          },
          {
            "name": "ground cumin",
            "original": "1.5 tsp ground cumin"
          },
          {
            "name": "garam masala",
            "original": "1.5 tsp garam masala"
          },
          {
            "name": "coriander",
            "original": "1 tsp coriander"
          },
          {
            "name": "crushed tomatoes",
            "original": "14 oz crushed tomatoes"
          },
          {
            "name": "red chilli powder",
            "original": "1 tsp red chilli powder"
          },
          {
            "name": "salt",
            "original": "1.25 tbsp salt"
          },
          {
            "name": "heavy cream",
            "original": "heavy cream"
          },
          {
            "name": "sugar",
            "original": "1 tbsp sugar"
          },
          {
            "name": "kasoori methi",
            "original": "1/2 tsp kasoori methi"
            
          }
        ],
        "Equipment": [
          {
            "name": "large bowl"
          },
          {
            "name": "skillet/pot"
          },
          {
            "name": "pan"
          },
          {
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
        "readyInMinutes": 30,
        "difficultyLevel": "Easy",
        "summary": "Lemon butter chicken is gewd",
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
            "name": "skillet"
          },
          {
            "name": "mixing bowl"
          },
          {
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
        "title": "Grilled Bacon Jalapeno Wraps",
        "image": "https://images.unsplash.com/photo-1592005243970-8e62149fde11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1296&q=60",
        "servings": 6,
        "readyInMinutes": 20,
        "difficultyLevel": "easy",
        "summary": "Jalapenos are stuffed with cream cheese, wrapped with bacon, and barbecued on the grill.",
        "ingredients": [
          {
            "name": "jalapeno peppers",
            "original": "6",
          },
          {
            "name": "cream cheese",
            "original": "8 ounces",
          },
          {
            "name": "bacon",
            "original": "12 slices",
          }
        ],
        "Equipment": [
          {
            "name": "grill"
          },
          {
            "name": "kebab sticks"
          },
          {
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
        "title": "Chicken Sushi Burrito",
        "image": "https://healthynibblesandbits.com/wp-content/uploads/2016/02/Sushi-Burrito-10.jpg",
        "servings": 2,
        "readyInMinutes": 55,
        "difficultyLevel": "medium",
        "summary": "These chicken sushi burritos are great for lunch or dinner. This recipe makes 4 burritos and each burrito can serve 1 to 2 people",
        "ingredients": [
          {
            "name": "Rice",
            "original": "5 cups cooked rice"
          },
          {
            "name": "Seasoning",
            "original": "4 tablespoons sushi seasoning"
          },
          {
            "name": "kosher salt",
            "original": "pinch of kosher salt",
          },
          {
            "name": "Chicken",
            "original": "1 1/4 pounds chicken breast"
          },
          {
            "name": "kosher salt",
            "original": "generous pinch of kosher salt"
          },
          {
            "name": "chili powder",
            "original": "1 teaspoon chili powder"
          },
          {
            "name": "cajun seasoning",
            "original": "1 teaspoon of cajun seasoning"
          },
          {
            "name": "granulated garlic",
            "original": "1/2 teaspoon granulated garlic"
          },
          {
            "name": "Guacamole",
            "original": "1 large avocado"
          },
          {
            "name": "Lime juice",
            "original": "1 tbspn lime juice"
          },
          {
            "name": "garlic clove",
            "original": "1 garlic clove",
          },
          {
            "name": "Chopped red onion",
            "original": "2 tbspn chopped red onion",
          },
          {
            "name": "Red Pepper",
            "original": "1 small red pepper",
          },
          {
            "name": "carrot",
            "original": "1 carrot, peeled and cut to matchsticks",
          },
          {
            "name": "Persian Cucumber",
            "original": "1 persian cucumber, cut to matchsticks",
          },
          {
            "name": "Roasted suhi seasweed (nori)",
            "original": "4 sheets of roasted sushi seaweed (nori)",
          }
        ],
        "Equipment": [
          {
            "name": "sushi mat"
          },
          {
            "name": "pan"
          },
          {
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
        "title": "Deviled Eggs Recipe",
        "image": "https://embed.widencdn.net/img/mccormick/k8zkuxfqsq/1365x1365px/easy_deviled_eggs_5347.jpg?crop=true&anchor=342,0&q=80&color=ffffffff&u=o2hyef",
        "servings": 2,
        "readyInMinutes": 34,
        "difficultyLevel": "easy",
        "summary": "Deviled eggs are hard boiled eggs where the yolk is mixed with mayonnaise, mustard, vinegar, salt and pepper. The little sprinkle of paprika on top is the perfect finishing touch.",
      
        "ingredients": [
          {
            "name": "Large eggs",
            "original": "6 large eggs"
          },
          {
            "name": "mayonnaise",
            "original": "3 tbsp mayonnaise"
          },
          {
            "name": "Dijon Mustard",
            "original": "1 tsp Dijon mustard"
          },
          {
            "name": "apple cider vinegar",
            "original": "1 tsp apple cider vinegar"
          },
          {
            "name": "salt and pepper",
            "original": "salt and pepper, to taste"
          },
          {
            "name": "paprika",
            "original": "1 tbsn paprika, for garnish"
          }
        ],
        "Equipment": [
          {
            "name": "pot"
          },
          {
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
        "title": "Perfect Fish Tacos",
        "image": "https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        "servings": "8",
        "readyInMinutes": 35,
        "difficultyLevel": "easy",
        "summary": "Love fish tacos? Well, these are the end-all be-all. Read on to see what makes these tacos so special. The fish—we use cod, but any flaky variety works—marinates in a mixture of lime juice, chili powder, and cumin that will become your standard. (Seriously, steak or chicken marinated in this will also taste bomb.) But the real gem of this recipe is the cabbage slaw—don't skip it. It takes just a few minutes to toss together and it's brightness is the perfect condiment to the spiced cod. ",
        "ingredients": [
          {
            "name": "extra-virgin olive oil",
            "original": "3 tbsp. extra-virgin olive oil"
          },
          {
            "name": "lime",
            "original": "Juice of 1 Lime"
          },
          {
            "name": "chili powder",
            "original": "2 tsp. chili powder"
          },
          {
            "name": "paprika ",
            "original": "1 tsp. paprika"
          },
          {
            "name": "ground cumin",
            "original": "1/2 tsp. ground cumin"
          },
          {
            "name": "ayenne pepper",
            "original": "1/2 tsp. cayenne pepper"
          },
          {
            "name": "cod",
            "original": "1 1/2 lb. cod",
            "originalName": "cod",
            "unit": "lbs",
            "amount": 1.5
          },
          {
            "name": "vegetable oil",
            "original": "1/2 tbsp. vegetable oil"
          },
          {
            "name": "Kosher salt",
            "original": "Kosher salt to taste"
          },
          {
            "name": "8 corn tortillas",
            "original": "corn tortillas"
          },
          {
            "name": "avocado",
            "original": "1 diced avocado",
            "originalName": "avocado",
            "unit": "",
            "amount": 1
          },
          {
            "name": "Lime wedges",
            "original": "Lime wedges, for serving",
            "originalName": "Lime wedges",
            "unit": "",
            "amount": 1
          },
          {
            "name": "Sour cream",
            "original": "1 cup Sour cream"
          },
          {
            "name": "mayonnaise",
            "original": "1/4 cup mayonnaise"
          },
          {
            "name": "lime",
            "original": "1 lime"
          },
          {
            "name": "freshly chopped cilantro",
            "original": "2 tbsp. freshly chopped cilantro"
          },
          {
            "name": "honey",
            "original": "1 tbsp. honey"
          },
          {
            "name": "shredded purple cabbage",
            "original": "2 cup shredded purple cabbage"
          },
          {
            "name": "corn kernels",
            "original": "1 cup corn kernels"
          },
          {
            "name": "jalapeño",
            "original": "1 minced jalapeño"
          }
        ],
        "Equipment": [
          {
            "name": "Bowl"
          },
          {
            "name": "Whisk"
          },
          {
            "name": "Skillet"
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
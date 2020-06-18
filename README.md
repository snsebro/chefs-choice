# chefs-choice

# PROJECT 3 PLANNING WORKSHEET README TEMPLATE <!-- omit in toc -->

The Project Planning section **should be completed** before you complete this project to ensure your team is aligned as you kick off. We recommend that you use Trello or Github Projects to create a project plan and assign tasks to each member of the team.

## Overview

**Chefs Choice** 

Add your project description.

### Team Members

- [Shean Johnson](https://github.com/sheanj)
- [Bryce Langille](https://github.com/brycelangille)
- [Gerand McDowell](https://github.com/deucemac)
- [Jack South](https://github.com/jackksouth) 
- [Shayne Sebro](https://github.com/snebro) (Team Leader) 

## Group Expectations


#### Project Timeline

- Thursday - (React Flowchart, Priortity Matrix, Base API Schema, initialize code base and have all members pull down)  
- Friday - (Establishing boiler-plate connections for database and proper installs. Express, MongoDB, Mongoose, deploying to Heroku, Atlas.)
- Saturday - (Distribute work for frontend development. Front End CRUD. Completing the front-end visuals, like blog-post info.)
- Sunday - (continue work on individual frontend assignment)
- Monday - (Pull to dev branch, make sure we have functioning full-stack web app, troubleshooting)
- Tuesday - (Styling)
- Wednesday - (Debugging)
- Thursday - (Final Isuues, Deploy, Prepare Presentation)
- Friday - (Review and Presentation Prep)

#### Team Goals & Values

1) Functional Code
2) Interactive UI
3) Thorough Communication Between Teammates
4) Each member should have comprehensive knowledge of the Back-End 
5) Have a resume worthy project to present

#### Communication Preferences

- Push changes at the same time
- Direct communication through zoom.  Resort Slack if zoom is not available
- Respond to all messages within an hour before 8pm.
- Use the team Kanban board and update as tasks are started and completed.
- Notify team lead when pull request is ready to be merged

#### GitHub Norms

 - List Your GitHub norms here.

#### Further Information / Preferences

  - Communication strongly preferred before 8pm

<br>

## Sprint 1

> Sprint 1 should result in a well-planned and easily-communicated project, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

**Chefs Choice** lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

### Goals

- _Lorem ipsum, dolor sit amet,_
- _consectetur adipiscing elit._
- _Phasellus dapibus fermentum risus vitae bibendum._
- _Integer vel ipsum mollis odio sollicitudin ornare eu vel ex._
- _etc._

<br>

### Client (Front End)

#### Wireframes


#### Component Hierarchy

Use [Whimsical](https://whimsical.com/) to create your diagram.

<br>

### Server (Back End)

#### Database Schema 

```
const Name = new Schema (
  {
    first: {type: String, required: true},
    last: {type: String, required: true}
  }
    )

const Review = new Schema(
  {
    name: [Name],
    imgURL: { type: String, required: true },
    review: { type: String, required: true },
    starCount: {type: num, required: true},
    featuredChef: {type: boolean, required: true}
  },
  {timestamps: true}
)
```

#### Express Routes

router.get('/reviews', controllers.getReviews)
router.get('/reviews/:id', controllers.getReview)
router.post('/reviews', controllers.createReview)
router.put('/reviews/:id', controllers.updateReview)
router.delete('/reviews/:id', controllers.deleteReview)

<br>

### Libraries

> Use this section to list all supporting libraries and dependencies and their role in the project.

|    Library     | Description                                |
| :------------: | :----------------------------------------- |
|     React      | _Lorem ipsum dolor sit amet, consectetur._ |
|  React Router  | _Lorem ipsum dolor sit amet, consectetur._ |
|    Express     | _Lorem ipsum dolor sit amet, consectetur._ |
| Express Router | _Lorem ipsum dolor sit amet, consectetur._ |
|    Mongoose    | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

***

## Plan Your Next Sprint

> Use this section to document ideas you've had that would be fun (or necessary) for your next sprint. This will be helpful when you return to your project after graduation!

***

## Code Issues & Resolutions

> Use this section to document and keep track of all major issues encountered and their resolution, if you'd like.

***

## Change Log

> Use this section to document and keep track of any changes that need to be made to your planned Sprint and provide reasons.
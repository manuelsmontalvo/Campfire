# Campfire

## Overview
  Campfire is a social discussion website that allow users to create communities (campsites) based on their interests, create posts (light a fire), like posts, as well as comment. Registered users submit content to the site such as links and text posts.
<br>

## MVP
The Campfire MVP is a milti-page bloging site with full CRUD capabilities. Users will be able to create communities, posts and comments. As well as like posts they are interested in, edit thier past posts and delete them.
<br>

### Goals
- Edit & delete posts
- Comments and sub comments functionality
- Create communities based on interests
- Search based on topics
- Responsive design
<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front end.                                 |
|   React Router   | Handle routes.                             |
| React SemanticUI | For the UI of posts and comments.          |
|  Ruby on Rails   | Back-end.                                  |
|  Pry - Rails     | Allows us to use pry insetad of IRB.       |
| react-flip-move  | Animation for when new posts are created/deleted |
| react-parallax   | parallax package                           |
<br>

## Client (Front End)

#### Wireframes
Figma: https://www.figma.com/file/F62mttxfyr8pEWiaQc85D0/Campfire?node-id=0%3A1

#### Component Tree
Component Tree: https://whimsical.com/p4-48VghggHeRevpAmLnWLGuw

#### Component Architecture
``` structure

src
|__ assets/
      |__ fonts
      |__ graphic
|__ screens/
      |__ EditPost.jsx
      |__ PostDetails.jsx
      |__ MainFeed.jsx
      |__ Profile.jsx
      |__ CampsiteFeed.jsx
      |__ SignIn.jsx
      |__ SignOut.jsx
|__ container/
      |__ MainContainer.jsx
|__ layout/
      |__ Layout.jsx
|__ sevices
      |__ AuthHelper.js
      |__ Auth.js
      |__ Campsites.js
      |__ Posts.js
      |__ Comments.js

```

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Models & Routes     |    H     |     3 hrs      |      hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |      hrs     |     TBD     |
| Auth controllers    |    H     |     3 hrs      |      hrs     |     TBD     |
| Table Controllers   |    H     |     3 hrs      |      hrs     |     TBD     |
| CORS                |    H     |     1 hrs      |      hrs     |     TBD     |
| Routes              |    H     |     2 hrs      |      hrs     |     TBD     |
| Join Tables         |    H     |     2 hrs      |      hrs     |     TBD     |
| Screens             |    H     |     4 hrs      |      hrs     |     TBD     |
| Main Container      |    M     |     3 hrs      |      hrs     |     TBD     |
| Auth Services       |    M     |     4 hrs      |      hrs     |     TBD     |
| API helper          |    M     |     2 hrs      |      hrs     |     TBD     |
| Services for tables |    L     |     4 hrs      |      hrs     |     TBD     |
| CSS animation       |    L     |     2 hrs      |      hrs     |     TBD     |
| Styling of pages    |    M     |     4 hrs      |      hrs     |     TBD     |
| TOTAL               |          |    40 hrs      |      hrs     |     TBD     |

<br>

### Server (Back End)

#### ERD Model
draw.io: https://drive.google.com/file/d/1ArvE_cFk2NVMvxs2Tkb03mFQzyCenz7R/view?usp=sharing
<br>

***

## Post-MVP

- Sub-Comments
- Bookmarking campsites
- Bookmarking posts
- Search for campsites

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

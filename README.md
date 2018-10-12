# Company Project: Workout more – support your local youth sports club!

So far, in the team projects, we've built a feature page, a career page, and an online newspaper. We've yet to really flex our React muscles and build an app!

The collaboration partner for this print is [Svenska Spel](https://karriar.svenskaspel.se/)! Each year, Svenska Spel gives away 50 million kronor to youth sports clubs all around the country. As a Svenska Spel player you get to vote on how the distribution between the clubs should be divided - each player has three points to give different teams. This initiative is called [Gräsroten](https://www.svenskaspel.se/grasroten). In this project we will do our own version of Gräsroten, not based on voting but on physical activity. We have worked with Svenska Spel for many years now and really appreciate how much they love sports and how health and physical activity is a big part of their working culture. So this seemed as a great project for them!

In this project you will build a React app that both encourage you to be more active and raise money for your local youth sports club. You will build a “Workout tracker” that collects points for physical activity. You decide the point system. In the app you can represent any youth sports club of your choice, we will use Svenska Spels internal API to search youth clubs around Sweden. By being physical active you collect points to that team which by the end of the year will be translated into money - or at least we wish it to be ;) 

A rough sketch of how the main screen could potentially look is something like this:

![Imgur](https://i.imgur.com/O4GLtbd.jpg)

The scope, app design, and general functionality of this app is very undefined, and down to your team to figure out! You definitely will need a planning session for this one.


## Design

First of all, focus on the functionality parts of this project. Remember that you are not designers you are developers. For the demo we also want to see more code than design from now on.

The app will need a few "screens" at the least; a view to find and select your sport club, a form to enter exercises and points, some sort of calendar view to mark a day as either completed or not completed, and some sort of way of navigating through time in the calendar so the user can look at their history and see final points that she has raised for her team.

To be useful, it would be really good for the app to have some form of gamification—something to make the user feel good for completing a goal, and something to make them keep coming back and using the app.

You'll need to decide how you want the calendar view to be designed; should it show a week? A month? A year? How should the user complete a day?

This kind of workout tracker is fairly commonly seen in notebooks in a month-based format - [examples](https://www.pinterest.se/search/pins/?q=workout%20tracker&rs=typed&term_meta[]=workout%7Ctyped&term_meta[]=tracker%7Ctyped). Whereas mobile apps tend to take a more week-based approach, perhaps because of the constraints of the screen.

### Tech Specifications

The project should be built in React and SASS. It should also be responsive and work well on mobile, tablet and desktop. Your code should conform to the Technigo eslint rules, too.

The code folder in this repository contains a copy of the Technigo React Starter project. You should use this as a base for your project.

You will use Svenska Spel API to serach for teams. They have written a short doumentation on how you access it and how to use it. [Go to Svenska Spel API.](https://docs.google.com/document/d/1iyHJyfBIRDoCiib3lL4Mq61rIZ_u-NYINWYNaFKPIjE/edit?usp=sharing)

## How to approach this as a team

The first step, as always, should be to sketch out your application and decide how things should look, but also what kind of components you'd like. Give thought - as a team - as to what components you might need, and what naming you should use.
Once you have an idea of the design of the app, and what kind of components you'll need, you should consider how the data should be stored. One idea to get you started (but is not necessarily the correct way) is to have an object with the goal names as keys, and an array of completed dates as values. When the user completes a day, add it to the array. Then when building the calendar, you just need to check if that date is in the array or not to determine if the day is "complete" or not..

You will store data locally in the browser, so that when the user comes back to the page, their data will still be there.

## 💥 Success!

At the end of this sprint, you and your team should be beginning to feel more comfortable with React, and feel more confident with coming up with app structure and components, from a blank slate.
You should also be really getting the hang of working in small teams on complex projects; from planning, to implementation and tracking down bugs.

Finally, on a more technical level, you should get a chance to work with some external libraries, persisting data locally with LocalStorage, and working with data in the context of calendars. Perhaps even a little data visualization, too!

## 🏃 Stretch Goals
Done with the main task? Try to come up with some fun stretch goals within your company. Here's some ideas:
1. Build some sort of statistics page which shows how many exercies have been completed per week, or renders some charts
2. Package the app as a Chrome extension, or make it run as an electron app.

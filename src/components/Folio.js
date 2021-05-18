import React from "react";

// Components
import Project from "./Project.js";

// Material UI
import {
    Grid
} from '@material-ui/core';

export default function Folio() {
    const projectData = [
        { key: 5,
            image: 'https://github.com/espoldi/Takeoff/raw/main/client/public/images/TakeoffDesktopScreenshot.png',
            title: 'TakeOff',
            description: 'TakeOff is a travel planning and blog application. Users can keep track of current and past trips. The itinerary creator allows the user to keep track of planned events or outings. Since traffic and weather conditions can affect your plans, with a travel itinarary on hand you can be more flexible. Users can also create blogs of their favorite travel memories and list destinations for their future adventures.',
            github: 'https://github.com/espoldi/TakeOff',
            live: 'https://takeoff123.herokuapp.com/' },
        { key: 4,
            image: 'https://github.com/espoldi/BigMood/raw/main/public/assets/img/big_mood_app_signup.png',
            title: 'BigMood Mood Tracker',
            description: `The "BigMood" web app gives users an easy way to track their mood throughout the day. After they are asked to create an account, users will log in to the app and create a new entry where they are prompted to report how they are feeling on a 1-5 scale (their mood), and what their current activity is. They will also be presented with a randomly chosen inspirational quote. On subsequent logins, in addition to recording their current mood and activity, users will be able to view all past entries, see a graph displaying their average mood, view their most used activity, and change the theme of the app.`,
            github: 'https://github.com/espoldi/BigMood',
            live: 'https://bigmoodapp.herokuapp.com/' },
        { key: 3,
            image: 'https://github.com/espoldi/EmployeeTracker/raw/main/employeetracker.png',
            title: 'Employee Tracker Database',
            description: `The following application uses a mixture of javascript, MySQL, and Inquirer to create a question driven CLI to keep track of your company team. It allows the user to input departments, roles, and employee information into a persistent database that is housed locally on the user's machine.`,
            github: 'https://github.com/espoldi/EmployeeTracker',
            live: 'https://github.com/espoldi/EmployeeTracker' },
        { key: 2,
            image: 'https://github.com/espoldi/recipe-shopper/raw/master/Assets/recipeshopper.png',
            title: 'Recipe Shopper',
            description: `The following project is a recipe search page that allows the user to search for recipes that use certain ingredients and add the ingredients needed to make those recipes to a shopping list. It uses a css library called picnic to provide a responsive layout. Using JQuery and local storage, we are able to take the shopping list of ingredients and save it to the local computer so that the shopper doesn't have to worry about their list being deleted if they refresh the page. We also use an API for some food trivia so that each time a user goes to the site, they are presented with a little piece of knowledge about food that they may not have known before.`,
            github: 'https://github.com/espoldi/recipe-shopper',
            live: 'https://espoldi.github.io/recipe-shopper' },
        { key: 1,
            image: 'https://github.com/espoldi/weather/raw/main/screenshot.png',
            title: 'Weather Forcast App',
            description: 'This application uses jquery and the open weather API to produce the current and future weather for a city that the user inputs. It has a running history of past searches that the user can click on and refresh that city and view again.',
            github: 'https://github.com/espoldi/weather',
            live: 'https://espoldi.github.io/weather' },
        { key: 0,
            image: 'https://github.com/espoldi/pop-quiz/raw/main/screenshot.jpeg',
            title: 'Javascript Pop Quiz',
            description: 'My creation uses JQuery to make a short dynamic quiz about Javascript. By removing buttons from view, I allow the rest of the program to use event listeners to test whether the answers are right or wrong. Afterwards, using a prompt to get the initials of the user to generate a high scores section where you can see who had which scores.',
            github: 'https://github.com/espoldi/pop-quiz',
            live: 'https://espoldi.github.io/pop-quiz' },
    ];
    return (
        <Grid container align="center">
            {projectData.map((data) => {
                return (
                    <Project data={data} />
                );
            })}
        </Grid>
    );
}

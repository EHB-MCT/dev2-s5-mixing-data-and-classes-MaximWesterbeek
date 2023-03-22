"use strict";

import Joke from './Joke.js';
console.log(Joke);

const app = {
    items: [],

    init() {
        this.getData();
    },

    getData() {
        fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10&type=twopart')
            .then((response) => {
            return response.json();
        })
        .then((json) => {
            json.jokes.forEach((jokeData) => {
                const joke = new Joke(jokeData.category, jokeData.setup, jokeData.delivery);
                console.log(joke);

                app.items.push(joke);
            });

            app.render();
        });

        
    },

    onSearch() {
    },

    render() {
        console.log(app.items);
        document.querySelector('#list').innerHTML = app.items[0].html();
    }

};

app.init();
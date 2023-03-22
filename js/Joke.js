"use strict";

export default class Joke {
    constructor(category, setup, delivery) {
        this.category = category;
        this.setup = setup;
        this.delivery = delivery;
    }

    html() {
        return `
        <div id="list">
            <div class="item">
                <div>
                    <div class="item-field">${this.setup}</div>
                    <div class="item-field">${this.delivery}</div>
                </div>

                <div>
                    <img
                    src="https://opendata.brussels.be/explore/dataset/street-art/files/9876c9a3f300f29c8ee619765c1ad768/300/" />
                </div>

            </div>
        </div>`;
    }
}





//const Joke1 = new Joke ("Misc", "Why was the mushroom always invited to parties?", "Cause he's a fungi.");


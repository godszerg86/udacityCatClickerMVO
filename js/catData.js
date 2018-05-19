class Cats {
    constructor(catName, catUrl) {
        this.name = catName;
        this.img = catUrl;
        this.counter = 0;
    }

    increaseCounter() {
        this.counter++;
    }
}

let catsModel = [new Cats('Winston', 'img/winston.jpg'), new Cats('Rick', 'img/rick.jpg'), new Cats('Morty', 'img/morty.jpg'), new Cats('Moon Cake', 'img/moon.jpg'), new Cats('Wraped Cat', 'img/wrap.jpg')]

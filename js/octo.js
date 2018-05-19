let octopus = {
    catIndex: 0,
    displayRender(index) {
        this.catIndex = index;
        displayView.render(catsModel[this.catIndex].name,catsModel[this.catIndex].img,catsModel[this.catIndex].counter);
    },
    init() {
        nameListView.init();
        nameListView.render();
        displayView.render(catsModel[this.catIndex].name,catsModel[this.catIndex].img,catsModel[this.catIndex].counter);
        addField.init();
        adminView.init(catsModel[this.catIndex].name, catsModel[this.catIndex].img, catsModel[this.catIndex].counter);
        nameListView.makeLiSelected(this.catIndex);
    },
    h3Render() {
        
        displayView.h3Render(catsModel[this.catIndex].counter,catsModel[this.catIndex].name);
    },
    counterIncrease(){
        catsModel[this.catIndex].increaseCounter();

    },
    selectedLi() {
        nameListView.makeLiSelected(this.catIndex)
    },
    addNewCat(catName, catUrl) {
        catsModel.push(new Cats(catName, catUrl));
        nameListView.init();
        nameListView.render();
        addField.reset();
    },
    adminCancel() {
        adminView.cancel();
    },
    adminSave(newName, newUrl, newCounter) {
        catsModel[this.catIndex].name = newName;
        catsModel[this.catIndex].img = newUrl;
        catsModel[this.catIndex].counter = newCounter;
        this.h3Render();
        nameListView.init();
        nameListView.render();
    },
    adminRender() {
        let name = catsModel[this.catIndex].name;
        let url = catsModel[this.catIndex].img;
        let counter = catsModel[this.catIndex].counter;
        adminView.render(name, url, counter);
    },
    adminCounterUp() {
        let counter = catsModel[this.catIndex].counter;
        adminView.counterUp(counter)

    },
    liBuild(){
        let htmlStr = '';
        catsModel.forEach((cat) => {
            htmlStr += `<li>${cat.name}</li>`
        });
        return htmlStr;
    }
};

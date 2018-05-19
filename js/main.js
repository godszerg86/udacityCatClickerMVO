let displayView = {

    divWrapper: document.querySelector('#display'),
    render(catName, catUrl, catCounter) {
        this.divWrapper.innerHTML = `<h3>${catName}: ${catCounter}</h3>
        <img src="${catUrl}" alt="image of ${catName}">`;
        document.querySelector('img').addEventListener('click', (event) => {
            octopus.counterIncrease();
            octopus.h3Render();
            octopus.adminCounterUp();
        });
    },
    h3Render(catCounter, catName) {
        document.querySelector('h3').innerText = `${catName}: ${catCounter}`;
    }
};

let nameListView = {
    oderedList: document.querySelector('#names-list'),
    init() {
        this.oderedList.innerHTML = octopus.liBuild();
    },
    render() {

        this.oderedList.childNodes.forEach((li, index) => {
            li.addEventListener('click', (event) => {
                octopus.displayRender(index);
                octopus.selectedLi();
                octopus.adminRender();
            });
        });
    },
    makeLiSelected(outerIndex) {
        this.oderedList.childNodes.forEach((li, index) => {
            if (outerIndex === index) {
                li.setAttribute('class', 'selected');
            } else {
                li.setAttribute('class', '');
            }
        });
    }
};

let addField = {
    init() {
        document.querySelector('#my-button').addEventListener('click', () => {
            octopus.addNewCat(document.querySelector('#cat-name').value, document.querySelector('#cat-url').value);
        });
    },
    reset() {
        document.querySelector('#cat-name').value = '';
        document.querySelector('#cat-url').value = '';
    }
};

let adminView = {
    catNameAdmin: document.querySelector('#cat-name-admin'),
    catUrlAdmin: document.querySelector('#cat-url-admin'),
    catClicksAdmin: document.querySelector('#cat-clicks-admin'),
    init(setName, setUrl, setClicks) {
        document.querySelector('#admin').addEventListener('click', () => {
            document.querySelector('#admin-panel').classList.toggle('hide');
        });
        document.querySelector('#admin-save').addEventListener('click', () => {
            this.save();
        });
        document.querySelector('#admin-cancel').addEventListener('click', () => {
            this.cancel();
        });
        this.catNameAdmin.value = setName;
        this.catUrlAdmin.value = setUrl;
        this.catClicksAdmin.value = setClicks;

    },
    save() {
        let newName = this.catNameAdmin.value;
        let newUrl = this.catUrlAdmin.value;
        let newCounter = this.catClicksAdmin.value;
        octopus.adminSave(newName, newUrl, newCounter);
    },
    cancel() {

    },
    counterUp(setClicks) {
        this.catClicksAdmin.value = setClicks;
    },
    render(setName, setUrl, setClicks) {
        this.catNameAdmin.value = setName;
        this.catUrlAdmin.value = setUrl;
        this.catClicksAdmin.value = setClicks;
    }

};
octopus.init();

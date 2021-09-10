import Items from "/js/components/Items.js";

class App {
    constructor() {
        const $app = document.querySelector('#app');
        new Items($app);
    }
}

new App();
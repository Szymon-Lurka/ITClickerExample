export default class Clicker {
    constructor() {
        this.clicker = document.querySelector('.clicker');
        this.clickerCounter = document.querySelector('.clicker__clicks');
        this.clickerCps = document.querySelector('.clicker__cps');
        this.counter = 0;
        this.cps = 0;
        this.clickerCounter.textContent = this.counter;
        this.clickerCps.textContent = this.cps;
    }
    counterUp() {
        this.clicker.addEventListener('click', () => {
            ++this.counter;
            this.clickerCounter.textContent = this.counter;
        })
    }
    listenToUpgrade(price, cps) {
        this.counter = this.counter - price;
        this.cps += cps;
        this.clickerCounter.textContent = this.counter;
        this.clickerCps.textContent = this.cps;
    }

    updateCps() {
        this.counter = this.counter + this.cps;
        this.clickerCounter.textContent = this.counter;
        this.clickerCps.textContent = this.cps;
    }
}
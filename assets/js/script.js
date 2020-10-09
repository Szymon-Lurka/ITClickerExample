import Clicker from './modules/clicker.js';
import Upgrade from './modules/upgrade.js';
import Timer from './modules/timer.js';
const upgrades = document.querySelector('.upgrades');

const itClicker = new Clicker();
const timer = new Timer();
const html = new Upgrade("HTML", 5, 1);
const test = new Upgrade("CSS", 10, 3);
const javaScr = new Upgrade('JavaScript', 20, 7);
const typeScr = new Upgrade('TypeScript', 30, 10);
const python = new Upgrade('Python', 100, 30);
const php = new Upgrade('PHP', 200, 50);
const testArray = [html, test, javaScr, typeScr, python, php];

testArray.forEach(item => {
    item.addUpgrade(upgrades);
    item.handleClick(itClicker);
});

timer.startTimer(itClicker.updateCps.bind(itClicker));
itClicker.counterUp();


//Uzywamy modułów, na discordzie tłumaczyłem dlaczego - pilnuj tego.
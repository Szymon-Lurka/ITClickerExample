export default class Timer {
  constructor() {
    this.start;
    this.counter = 0;
  }
  startTimer(targetTrigger) {
    this.counter++;
    this.start = requestAnimationFrame(() => this.startTimer(targetTrigger));
    if (this.counter >= 60) {
      targetTrigger();
      this.counter = 0;
    }
  }
}


//PIOTREK - Narazie tego nie wdrażamy.
export default class Upgrade {
    constructor(name, initialPrice, initialCps) {
        this.price = initialPrice;
        this.cps = initialCps;
        this.name = name;
        this.level = 1;
    }
    addUpgrade(parentElement) {
        this.d = document.createElement("div");
        this.d.classList.add('upgrade');
        this.d.setAttribute('onselectstart', 'return false;');
        this.d.textContent = `${this.name} poziom ${this.level}`;
        this.p = document.createElement("p");
        this.p.textContent = `Cena: ${this.price}`;
        this.d.appendChild(this.p);
        parentElement.appendChild(this.d);
    }
    handleClick(targetObject) {
        this.d.addEventListener('click', () => {

            if (targetObject.counter >= this.price) {
                targetObject.listenToUpgrade(this.price, this.cps);
                this.level++;
                this.price = this.price * 2;
                this.d.textContent = `${this.name} poziom ${this.level}`;
                this.p.textContent = `Cena: ${this.price}`;
                this.d.appendChild(this.p)
            }
        })
    }
}

//Narazie tylko zwiekszamy cenę po każdym zakupie, CPS'em zajmiemy się w weekend jak będziesz miał czas, żeby ogarnąć temat.
//Docelowo będziemy się starać zmieniać cenę troszeczke zmieniając przelicznik, bo *2 jest zbyt dużo już po kilku zakupach - ale testowo narazie zostanie.
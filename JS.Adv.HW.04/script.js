function CoffeeMake(coffee) {
    this.coffee = coffee;
}

CoffeeMake.prototype.on = function () {
    console.log(`Start making ${this.coffee}`)
}

CoffeeMake.prototype.off = function () {
    console.log(`Stop making ${this.coffee}`)
}
let cm = new CoffeeMake('some coffee');
cm.on();
cm.off();
//---------------------------------------------------------
function DropsCoffeeMake(coffee) {
    this.coffee = coffee;
}
//наслідування від CoffeeMake
DropsCoffeeMake.prototype = CoffeeMake.prototype;
// і свої методи:
DropsCoffeeMake.prototype.filter = function () {
    console.log(`Make ${this.coffee}`)
};
DropsCoffeeMake.prototype.thrash = function () {
    console.log(`Thrash grains for ${this.coffee}`)
};

let dcm = new DropsCoffeeMake('coffee in DropsCoffeeMake');
dcm.on();
dcm.off();
dcm.filter();
dcm.thrash();
// ----------------------------------------------------------
function HornCoffeeMake(coffee) {
    this.coffee = coffee;
}
// тут наслідування від DropsCoffeeMake (попередньої)
HornCoffeeMake.prototype = DropsCoffeeMake.prototype;
// і свої методи:
HornCoffeeMake.prototype.different = function (kind) {
    console.log(`Make ${kind} in HornCoffeeMake`)
};
HornCoffeeMake.prototype.foam = function (someFoam) {
    console.log(`Make coffee with ${someFoam} in HornCoffeeMake`)
};

let hcm = new HornCoffeeMake('coffee in HornCoffeeMake');
hcm.on();
hcm.off();
hcm.filter();
hcm.thrash();
hcm.different('capuchino');
hcm.foam('foam');
// -----------------------------------------------------------
function MachineCoffeeMake(coffee) {
    this.coffee = coffee;
}
// тут наслідування лише від CoffeeMake
MachineCoffeeMake.prototype = CoffeeMake.prototype;
// і свої методи:
MachineCoffeeMake.prototype.addIngredient = function (ingredient) {
    console.log(`Make coffee with ${ingredient} in MachineCoffeeMake`)
};
MachineCoffeeMake.prototype.strongness = function (howStrong) {
    console.log(`Make ${howStrong} in MachineCoffeeMake`)
};


let mcm = new DropsCoffeeMake('coffee in MachineCoffeeMake');
mcm.on();
mcm.off();
mcm.addIngredient('milk');
mcm.strongness('not very strong coffee');

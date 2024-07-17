// Enum: in enums we use first letter capital. it is the replacement of union
enum Color {
    Red,
    Yellow,
    Green
}

let trafficLight = Color[0];
console.log(trafficLight);

enum Food {
    Biryani,
    Pulao,
    Pizza,
    Zinger,
    Karahi,
    Qurma
}

let lunch = Food.Zinger;
let dinner = Food[0];
console.log(lunch);
console.log(dinner);
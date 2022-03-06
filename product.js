const product = class{
    constructor(id, category, name, image, price){
        this.id = id;
        this.category = category;
        this.name = name;
        this.image = image;
        this.price = price;
    }

    get log(){
        console.log(`Name: ${this.name}\nID: ${this.id}\nCategory: ${this,this.category}\nImage: ${this.image}\nPrice: ${this.price} Euro`.toUpperCase());
    }
};
//enter data in this format
//(id, category, name, image, price)
let p1 = new product(2022, "drinks", "viski", "viski_img.jpg", 19);
let p2 = new product(2023, "met", "salami", "salami_img.jpg", 4.5);
let p3 = new product(2024, "sweets", "chocolate", "chocoboco_img.jpg", 6.66);
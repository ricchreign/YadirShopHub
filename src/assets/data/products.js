

const products = [
    {
        id : 1,
        name : "Gbolly Reign Music",
        price : "99.99",
        image : "/image/Grey.jpeg",
        description : "Listen to songs to keep your soul, mind and life feeling blessed."
    },
    {
        id : 2,
        name : "Yosy's Lipgloss",
        price : "15.00",
        image : "/image/Yosy.jpeg",
        description : "Lipgloss to keep your lips sassy."
    },
    {
        id : 3,
        name : "Yadir Clothes",
        price : "23.00",
        image : "/image/yadir.jpeg",
        description : "making the ordinary become extraordinary"
    },
    {
        id : 4,
        name : "Fade Aladire",
        price : "22.50",
        image : "/image/adire.jpeg",
        description : "clothes to keep you comfortable in traditional attires"
    },
    {
        id : 5,
        name : "Emayo Water",
        price : "100.00",
        image : "/image/emaayo.jpeg",
        description : "drink emayo ajoke water everyday"
    },
    {
        id : 6,
        name : "Gadget",
        price : "99.44",
        image : "/image/gadget.jpeg",
        description : "you deserve to use the best gadget"
    },
    {
        id : 7,
        name : "Wristwatch",
        price : "150.04",
        image : "/image/watch.jpeg",
        description : "wear comfort today"
    },
    {
        id : 8,
        name : "Skincare",
        price : "40.89",
        image : "/image/skincare.jpeg",
        description : "use skincare to make you comfortable in your skin"
    },
    {
        id : 9,
        name : "work of art",
        price : "799.44",
        image : "/image/art.jpeg",
        description : "an art gallery of the best artist from africa"
    },
    {
        id : 10,
        name : "Gracious Fashion Home",
        price : "50.94",
        image : "/image/sewing.jpeg",
        description : "Your beauty is our work"
    },
    {
        id : 11,
        name : "JBL wireless Headphones",
        price : "199.44",
        image : "/image/headphone.jpeg",
        description : "premium wireless headphones with noise cancellation"
    },
    {
        id : 12,
        name : "Car Rentals",
        price : "309.04",
        image : "/image/car.jpeg",
        description : "safe, secure and best place to get your cars rented at"
    },
    {
        id : 13,
        name : "Cement",
        price : "44.44",
        image : "/image/cement.jpeg",
        description : "building materials to use in building a home"
    },
    {
        id : 14,
        name : "Adfen Prime Construction Services",
        price : "100.04",
        image : "/image/adfen.jpeg",
        description : "Where your dream building is brought into reality"
    },
    {
        id : 15,
        name : "Rita Make-Up kit",
        price : "15.44",
        image : "/image/makeup.jpeg",
        description : "To be the best looking lady at that party, let's modify your beauty"
    },
    {
        id : 16,
        name : "Nescafe",
        price : "20.14",
        image : "/image/nescafe.jpeg",
        description : "Take nescafe for the sleepless night and energy regain"
    },
    {
        id : 17,
        name : "Jersey",
        price : "23.14",
        image : "/image/Jersey.jpeg",
        description : "buy jersey of the team you support"
    },
    {
        id : 18,
        name : "Perfume",
        price : "51.04",
        image : "/image/perfume.jpeg",
        description : "The scent that makes everyone wonder your magnificent presence"
    },
    {
        id : 19,
        name : "Bicycle",
        price : "34.94",
        image : "/image/bycycle.jpeg",
        description : "something to ride along with"
    },
    {
        id : 20,
        name : "Woship GOD Today",
        price : "1000.00",
        image : "/image/GOD.jpg",
        description : "Stay Close To GOD"
    },
    
];

export function getProducts(){
    return products;
}

export function getProductById(id){
    return products.find((p) => p.id === Number(id));
}
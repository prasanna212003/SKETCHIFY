let prices = [
    {
        name: "Basic",
        price: 500,
        point1: "5 B&W Sketches",
        point2: "2 Vector Sketches",
        point3: "1 month duration"
    },

    {
        name: "Standard",
        price: 1000,
        point1: "10 B&W Sketches",
        point2: "4 Vector Sketches",
        point3: "2 months duration"
    },

    {
        name: "Premium",
        price: 1500,
        point1: "15 B&W Sketches",
        point2: "6 Vector Sketches",
        point3: "3 months duration"
    },
];

let pricing_tables = document.querySelector(".pricing_tables")

let generatePriceTables = () => {
    return (
        pricing_tables.innerHTML = prices.map((price) => {
            return (
                `<div class="pricing_table">
                    <h2>${price.name}</h2>
                    <h1>₹${price.price}</h1>
                    <p></p>
                    <ul>
                        <li>${price.point1}</li>
                        <li>${price.point1}</li>
                        <li>${price.point1}</li>
                    </ul>
                    <button type="submit" class="pricing_button">Subscribe</button>
                </div>`
            )
        })
    )
};

generatePriceTables();

let otherprices = [
    {
        img: `./images/other1.jpg`,
        text: "1 B&W Sketch For ₹100"
    },
    {
        img: `./images/other3.jpg`,
        text: "1 Vector Potrait For ₹150"
    }
];

let other_tables = document.querySelector(".other_offers_cards");

let generateOthers = () => {
    return (
        other_tables.innerHTML = otherprices.map((other) => {
            return (
                `<div class="other_offers_card">
                    <div class="other_offers_image">
                    <img src="${other.img}" alt="">
                    </div>
                    <div class="other_offers_text">
                        <h3>${other.text}</h3>
                    </div>
                </div>`
            )
        })
    )
}

generateOthers();
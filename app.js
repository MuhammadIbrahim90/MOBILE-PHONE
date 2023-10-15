const mobilePhones = [
    {
        name: "REALME",
        brand : "9 pro",
        price: 47.999 ,
        specifications: {
            storage: "6GB RAM / 128GB ROM",
        },
        image: "realme.webp"
    },
    {
        name: "INFINIX",
        brand : "hot 10",

        price: 24.999,
        specifications: {
            storage: "4GB RAM / 64GB ROM",
        },
        image: "hot.webp"
    }, {
        name: "TECNO",
        brand : "comon 17",

        price: 31.999,
        specifications: {
            storage: "6GB RAM / 128GB ROM",
        },
        image: "comon.png"
    }, {
        name: "REDMI",
        brand : "note 11",

        price: 54.999,
        specifications: {
            storage: "6GB RAM / 128GB ROM",
        },
        image: "red.png"
    },
    {
        name: "OPPO ",
        brand : "f21 pro",

        price: 95.999,
        specifications: {
            storage: "8GB RAM / 128GB ROM",
        },
        image: "oppo.webp"
    },
    {
        name: "VIVO ",
        brand : "y27",

        price: 63.999 ,
        specifications: {
            storage: "8GB RAM / 128GB ROM",
        },
        image: "vivo.png"
    },
    {
        name: "ITEL",
        brand : "vision plus 3",

        price: 21.999 ,
        specifications: {
            storage: "4GB RAM / 64GB ROM",
        },
        image: "itel.png"
    },
    {
        name: "SUMSUNG",
        brand : "galaxy A 10",

        price: 34.999 ,
        specifications: {
            storage: "4GB RAM / 64GB ROM",
        },
        image: "sumsung.png"
    },
];

const div = document.querySelector('.container'); // Select the container div

for (let i = 0; i < mobilePhones.length; i++) {
    div.innerHTML +=
        `<div class="card">
            <img class="boximg" src="${mobilePhones[i].image}" alt="">
            <h3 class="mobName">${mobilePhones[i].name}</h3>
            <p>Brand: ${mobilePhones[i].brand}</p>

            <p>${mobilePhones[i].specifications.storage}</p>
            <p>Rs: ${mobilePhones[i].price}/-</p>
            <button onclick="addCard(${i})" class="btn">Add to cart</button>
        </div>`;
}

const phoneCart = [];

function addCard(index) {
    if (phoneCart.includes(mobilePhones[index]) === true) {
        phoneCart[index].quantity += 1;
        console.log(phoneCart[index]);

    } else {
        mobilePhones[index].quantity = 1;
        phoneCart.push(mobilePhones[index]);
      
    }
    console.log(phoneCart);
}


function checkpage() {
    const cart = JSON.stringify(phoneCart);
    localStorage.setItem("cartList",cart)
    window.location = "cart.html"
}
const cars = [
    {
        id: 1,
        name: 'Ford Focus RS',
        image: '/foo/images/ford.jpg',
        price: 55000
    },
    {
        id: 2,
        name: 'Pagani Huayra',
        image: '/foo/images/pagani.jpg',
        price: 390000
    },
    {
        id: 3,
        name: 'Aston Martin Vantage',
        image: '/foo/images/aston.jpg',
        price: 149995
    }
]

function renderOption(option) {
    return `
        <a href="/${option.id}" type="button" option="${option.id}">
            <img class="thumbnail" src="${option.image}" />
        </a>
    `;
}

function renderCar(car) {
    return `
        <div class="container">
            <img src="${car.image}" />
            <div class="p-2 text-center">
                <h4>${car.name}</h4>
                <div id="options">
                    ${cars.map(renderOption).join('')}
                </div>
                <bar-buy price="${car.price}">
                    <!--#include virtual="/bar-buy?price=${encodeURIComponent(car.price)}" -->
                </bar-buy>
            </div>
        </div>
    `;
}

export function render(option = 1) {
    const car = cars.find(car => car.id === option) || cars[0];
    return `
        <div class="container">
            <div class="main m-2 bg-2 p-3">
                <div class="header">
                    <h3>The foo store</h3>
                    <bar-basket>
                        <!--#include virtual="/bar-basket" -->
                    </bar-basket>
                </div>
                ${renderCar(car)}
            </div>
            <div class="sidebar m-2 p-3">
                <bar-ads></bar-ads>
            </div>
        </div>
    `;
}
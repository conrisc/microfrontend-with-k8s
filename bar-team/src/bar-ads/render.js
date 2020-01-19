const ads = [
    {
        id: 1,
        image: '/bar/images/ads/audi.jpg'
    },
    {
        id: 2,
        image: '/bar/images/ads/mrc.jpg'
    },
    {
        id: 3,
        image: '/bar/images/ads/lada.jpg'
    },
    {
        id: 4,
        image: '/bar/images/ads/rover.jpg'
    },
    {
        id: 5,
        image: '/bar/images/ads/tesla.jpg'
    },
];

function renderAd(ad) {
    return `<img class="ad" src="${ad.image}" />`;
}

export function render() {
    const variant = Math.floor(Math.random()*5);
    const adsToDisplay = [
        ads[variant],
        ads[(variant + 1) % 5],
        ads[(variant + 2) % 5],
    ];
    return `
        ${
            adsToDisplay.map(renderAd).join('')
        }
    `;
}
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const countries = [
    {
        id: 1,
        title: "South Korea",
        subtitle: "Seoul",
        description: "South Korea, officially the Republic of Korea (ROK), is a country in East Asia, constituting the southern part of the Korean Peninsula and sharing a land border with North Korea. Its western border is formed by the Yellow Sea, while its eastern border is defined by the Sea of Japan. South Korea claims to be the sole legitimate government of the entire peninsula and adjacent islands. It has a population of 51.75 million, of which roughly half live in the Seoul Capital Area, the fifth largest metropolis in the world. Other major cities include Incheon, Busan, and Daegu.",
        img: "./img/korea1.jpg",
    },
    {
        id: 2,
        title: "Taiwan",
        subtitle: "Taipei",
        description: "Taiwan, officially the Republic of China (ROC), is a country in East Asia, at the junction of the East and South China Seas in the northwestern Pacific Ocean, with the People's Republic of China (PRC) to the northwest, Japan to the northeast, and the Philippines to the south. The territories controlled by the ROC consist of 168 islands, with a combined area of 36,193 square kilometres (13,974 sq mi). The main island of Taiwan, formerly known as Formosa, has an area of 35,808 square kilometres (13,826 sq mi), with mountain ranges dominating the eastern two-thirds and plains in the western third, where its highly urbanised population is concentrated. The capital, Taipei, forms along with New Taipei City and Keelung the largest metropolitan area of Taiwan. Other major cities include Kaohsiung, Taichung, Tainan, and Taoyuan. With 23.45 million inhabitants, Taiwan is among the most densely populated countries in the world.",
        img: "./img/taiwan1.jpg",
    },
    {
        id: 3,
        title: "Philippines",
        subtitle: "Manila",
        description: "The Philippines, officially the Republic of the Philippines, is an archipelagic country in Southeast Asia. It is situated in the western Pacific Ocean and consists of around 7,641 islands that are broadly categorized under three main geographical divisions from north to south: Luzon, Visayas, and Mindanao. The Philippines is bounded by the South China Sea to the west, the Philippine Sea to the east, and the Celebes Sea to the southwest. It shares maritime borders with Taiwan to the north, Japan to the northeast, Palau to the east and southeast, Indonesia to the south, Malaysia to the southwest, Vietnam to the west, and China to the northwest.",
        img: "./img/philippines1.jpg",
    },
    {
        id: 4,
        title: "Indonesia",
        subtitle: "Jakarta",
        description: "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. Indonesia is the world's largest island country and the 14th-largest country by area, at 1,904,569 square kilometres (735,358 square miles). With over 270 million people, Indonesia is the world's fourth-most populous country and the most populous Muslim-majority country. Java, the world's most populous island, is home to more than half of the country's population.",
        img: "./img/indonesia1.jpg",
    },
    {
        id: 5,
        title: "Japan",
        subtitle: "Tokyo",
        description: "Japan is an island country in East Asia. It is situated in the northwest Pacific Ocean, and is bordered on the west by the Sea of Japan, while extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south. Japan is a part of the Ring of Fire, and spans an archipelago of 6,852 islands covering 377,975 square kilometers (145,937 sq mi); the five main islands are Hokkaido, Honshu, Shikoku, Kyushu, and Okinawa. Tokyo is the nation's capital and largest city, followed by Yokohama, Osaka, Nagoya, Sapporo, Fukuoka, Kobe, and Kyoto.",
        img: "./img/japan1.jpg",
    }
];

const gallery = [
    {
        id: 1,
        img1: "./img/sk1.jpg",
        img2: "./img/sk2.jpg",
        img3: "./img/sk3.jpg",
        img4: "./img/sk4.jpg",
        img5: "./img/sk5.jpg",
        img6: "./img/sk6.jpg",
    },
    {
        id: 2,
        img1: "./img/tw1.jpg",
        img2: "./img/tw2.jpg",
        img3: "./img/tw3.jpg",
        img4: "./img/tw4.jpg",
        img5: "./img/tw5.jpg",
        img6: "./img/tw6.jpg",
    },
    {
        id: 3,
        img1: "./img/ph1.jpg",
        img2: "./img/ph2.jpg",
        img3: "./img/ph3.jpg",
        img4: "./img/ph4.jpg",
        img5: "./img/ph5.jpg",
        img6: "./img/ph6.jpg",
    },
    {
        id: 4,
        img1: "./img/ind1.jpg",
        img2: "./img/ind2.jpg",
        img3: "./img/ind3.jpg",
        img4: "./img/ind4.jpg",
        img5: "./img/ind5.jpg",
        img6: "./img/ind6.jpg",    
    },

    {
        id: 5,
        img1: "./img/jap1.jpg",
        img2: "./img/jap2.jpg",
        img3: "./img/jap3.jpg",
        img4: "./img/jap4.jpg",
        img5: "./img/jap5.jpg",
        img6: "./img/jap6.jpg",
    },
]

const currentCountryImg = document.querySelector(".countryImg");
const currentCountryTitle = document.querySelector(".countryTitle");
const currentCountrySubtitle = document.querySelector(".countrySubtitle");
const currentCountryDescription= document.querySelector(".countryDescription");

const currentGalleryImg1 = document.querySelector(".galleryImg1");
const currentGalleryImg2 = document.querySelector(".galleryImg2");
const currentGalleryImg3 = document.querySelector(".galleryImg3");
const currentGalleryImg4 = document.querySelector(".galleryImg4");
const currentGalleryImg5 = document.querySelector(".galleryImg5");
const currentGalleryImg6 = document.querySelector(".galleryImg6");

// changing the country
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    
        // change the chosen country
        chosenCountry = countries[index];

        // change text of current country
        currentCountryTitle.textContent = countries[index].title;
        currentCountrySubtitle.textContent = "Capital: " + countries[index].subtitle;
        currentCountryDescription.textContent = countries[index].description;
        currentCountryImg.src = countries[index].img;

        // change gallery img of current country
        currentGalleryImg1.src = gallery[index].img1;
        currentGalleryImg2.src = gallery[index].img2;
        currentGalleryImg3.src = gallery[index].img3;
        currentGalleryImg4.src = gallery[index].img4;
        currentGalleryImg5.src = gallery[index].img5;
        currentGalleryImg6.src = gallery[index].img6;
    });
})

// navbar for mobile
const navbarMenu = document.querySelector(".navbarMenu");
const mobileMenu= document.querySelector("#mobileMenu");

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("show-navbarMenu");
});


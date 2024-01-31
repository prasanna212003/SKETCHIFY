let menu = document.querySelector(".bars");
let list = document.querySelector(".nav_links_container");
let close = document.querySelector(".fa-times");

menu.addEventListener("click", () => {
    list.classList.toggle("show");
})

close.addEventListener("click", () => {
    list.classList.toggle("show");
})

document.addEventListener('scroll', () => {
    const dropped = document.querySelector("#dropped");
    if (window.scrollY > 0) {
        dropped.classList.add("white");
    }
    else {
        dropped.classList.remove("white");
    }
})

let services = [
    {
        id: 1,
        name: "Color Potraits",
        desc: "Color portrait sketching is a form of art where an artist creates a representation of a persons face using various colors, typically in a loose and expressive style. Unlike a highly detailed and realistic portrait, a color portrait sketch aims to capture the essence and character of the subject rather than every fine detail.",
        icon: "fa-pen-nib"
    },
    {
        id: 2,
        name: "B&W Potraits",
        desc: "Black and white portrait sketching is a form of visual art that involves creating monochromatic drawings of individuals or subjects, emphasizing their facial features and expressions.This traditional artistic technique has been practiced for centuries and continues to be popular due to its ability to capture",
        icon: "fa-swatchbook"
    },
    {
        id: 3,
        name: "Vector Potraits",
        desc: "Vector portrait sketching is a digital art form that involves creating a portrait using vector graphics software.Unlike traditional sketching methods that use paper and pencils,vector portrait sketching is done entirely on a computer using software like Adobe Illustrator, CorelDRAW, or Inkscape in vector sketch.",
        icon: "fa-compass-drafting"
    },
];

let services_section = document.querySelector(".services_cards");

let generateServices = () => {
    return (
        services_section.innerHTML = services.map((service) => {
            return (
                `<div class="service_card">
                <div class="service_card_icon">
                    <i class="fa-solid ${service.icon}"></i>
                </div>
                <div class="service_card_info">
                    <div class="service_card_info_heading">
                        <h1>${service.name}</h1>
                    </div>
                    <div class="service_card_info_text">
                        <p>${service.desc}</p>
                        <button type="button" class="service_button">Know More</button>
                    </div>
                </div>
            </div>`
            )
        })
    )
}

generateServices();

let artists = [
    {
        id: 1,
        img: `./images/person1.avif`,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi corporis maxime accusantium ab dicta repellendus illum quos.Omnis vero magnam, facere repellendus doloribus, quo dolor possimus ipsam modi magni atque!"
    },

    {
        id: 2,
        img: `./images/person2.avif`,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut laudantium tenetur officia facilis vero dolor perferendis quis in pariatur aperiam voluptas, aspernatur quod nemo modi temporibus? Deleniti assumenda maxime facere!"
    }
]

let artistsection = document.querySelector(".artist_section");

let generateArtists = () => {
    return (
        artistsection.innerHTML = artists.map((artist) => {
            return (
                `<div class="campus-col">
                    <img src="${artist.img}" alt="">
                    <div class="layer">
                        <h3>${artist.desc}</h3>
                    </div>
                </div>`
            )
        })
    )
}

generateArtists();

let teamcards = document.querySelector(".team_cards");

let teams = [
    {
        id: 1,
        name: "Mohith Bayya",
        pos: "Technical Team",
        img: `./images/team1.jpeg`
    },
    {
        id: 2,
        name: "Vighnesh Vejendla",
        pos: "Sketch Artist",
        img: `./images/team2.jpeg`
    },
    {
        id: 1,
        name: "Manogna Chitti",
        pos: "Vector Artist",
        img: `./images/team3.1.jpg`
    },
];

let generateTeams = () => {
    return (
        teamcards.innerHTML = teams.map((team) => {
            return (
                `<div class="team_card">
                    <div class="team_card_heading">
                        <p>${team.name}</p>
                    </div>
                    <div class="team_card_title">
                        <p>${team.pos}</p>
                    </div>
                    <div class="team_card_image">
                        <img src="${team.img}" alt="">
                    </div>
                </div>`
            )
        })
    )
};

generateTeams();

let testimonials = [
    {
        id: 1,
        img: `./images/team1.jpeg`,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsum hic, mollitia cum earum maiores libero veritatis laborum pariatur iure soluta facilis ipsam ad corrupti accusamus delectus vel? Quibusdam, in!",
        name: "Vamsi Krishna"
    },
    {
        id: 2,
        img: `./images/team2.jpeg`,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsum hic, mollitia cum earum maiores libero veritatis laborum pariatur iure soluta facilis ipsam ad corrupti accusamus delectus vel? Quibusdam, in!",
        name: "Vighnesh"
    },
    {
        id: 3,
        img: `./images/team3.1.jpg`,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ipsum hic, mollitia cum earum maiores libero veritatis laborum pariatur iure soluta facilis ipsam ad corrupti accusamus delectus vel? Quibusdam, in!",
        name: "Mohith Krishna"
    }
];

let testimonials_section = document.querySelector(".testimonialsec");

let generateTestimonials = () => {
    return (
        testimonials_section.innerHTML = testimonials.map((testimonial) => {
            return (
                `<div class="testimonial-col">
                <img src="${testimonial.img}" alt="">
                <div>
                    <p>${testimonial.desc}</p>
                    <h3>${testimonial.name}</h3>
                </div>
            </div>`
            )
        })
    )
};

generateTestimonials();

let footerIcons = [
    {
        id: 1,
        icon: "facebook"
    },
    {
        id: 2,
        icon: "instagram"
    },
    {
        id: 3,
        icon: "twitter"
    },
    {
        id: 4,
        icon: "linkedin"
    },
    {
        id: 5,
        icon: "google"
    },
];

let footer_icons = document.querySelector(".footer_icons");

let generateFootericons = () => {
    return (
        footer_icons.innerHTML = footerIcons.map((footerIcon) => {
            return (
                `<i class="fa-brands fa-${footerIcon.icon}"></i>`
            )
        })
    )
};

generateFootericons();

let timeline = [
    {
        id: 1,
        year: "2019-2020",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum beatae molestias esse numquam ut.Culpa, praesentium."
    },
    {
        id: 2,
        year: "2020-2021",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum beatae molestias esse numquam ut.Culpa, praesentium."
    },
    {
        id: 3,
        year: "2021-2022",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum beatae molestias esse numquam ut.Culpa, praesentium."
    },
    {
        id: 4,
        year: "2022-2023",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum beatae molestias esse numquam ut.Culpa, praesentium."
    }
];

let artistsof = [
    {
        id: 1,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quod unde veniam deleniti accusantium tenetur animi, neque fuga voluptatibus soluta?",
        name: "Full Stack Developer",
        img: `./images/job1.avif`
    },
    {
        id: 2,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quod unde veniam deleniti accusantium tenetur animi, neque fuga voluptatibus soluta?",
        name: "Vector Sketch Artist",
        img: `./images/job2.avif`
    },
    {
        id: 3,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quod unde veniam deleniti accusantium tenetur animi, neque fuga voluptatibus soluta?",
        name: "B&W Sketch Artist",
        img: `./images/job3.avif`
    }
];
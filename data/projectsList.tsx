import { Project } from "../models/project";

export const projectsList: Project[] = [
    {
        id: 1,
        name: "Sharik",
        description: "A service providing project that consists of Customer and Service provider mobile apps. It was developed using Flutter as a front end and Firebase as a backend It was the first project of the company.",
        date: new Date("2022-06-7"),
        logo: "/images/shrek.png",
        screenshots: ["/screenshots/shrek/1.jpg", "/screenshots/shrek/2.jpg", "/screenshots/shrek/3.jpg", "/screenshots/shrek/4.jpg", "/screenshots/shrek/5.jpg",
        "/screenshots/shrek/6.jpg", "/screenshots/shrek/7.jpg", "/screenshots/shrek/8.jpg", "/screenshots/shrek/9.jpg", "/screenshots/shrek/10.jpg",
        "/screenshots/shrek/11.jpg", "/screenshots/shrek/12.jpg"],
    },
    {
        id: 2,
        name: "Rayid",
        description: "An ecommerce project that consists of Customer, Store and driver mobile apps. The source code was purchased from codaneyon and It was developed using Flutter and Php-Laravel as a backend.",
        date: new Date("2022-05-18"),
        logo: "/images/rayid.png",
        screenshots: ["/screenshots/rayid/1.jpg", "/screenshots/rayid/2.jpg", "/screenshots/rayid/3.jpg", "/screenshots/rayid/4.jpg", "/screenshots/rayid/5.jpg", 
        "/screenshots/rayid/6.jpg", "/screenshots/rayid/7.jpg", "/screenshots/rayid/8.jpg", "/screenshots/rayid/9.jpg", "/screenshots/rayid/10.jpg", 
        "/screenshots/rayid/11.jpg", "/screenshots/rayid/12.jpg", "/screenshots/rayid/13.jpg"],
    },
    {
        id: 3,
        name: "Foodo",
        description: "A remaining food selling project that consisted of Customer app and a dashboard. It was developed using Flutter and firebase as a backend.",
        date: new Date("2022-12-14"),
        logo: "/images/foodo.png",
        screenshots: ["/screenshots/foodo/1.png", "/screenshots/foodo/2.png", "/screenshots/foodo/3.png", "/screenshots/foodo/4.png", "/screenshots/foodo/5.png",
        "/screenshots/foodo/6.png", "/screenshots/foodo/7.png", "/screenshots/foodo/8.png", "/screenshots/foodo/9.png"],
    },
    {
        id: 4,
        name: "Simsimy",
        description: "A parenting control system that consisted of a mobile app for the parents and a tablet home launcher for the kids. It was developed using Android native (Java) and python - django as a backend.",
        date: new Date("2019-09-18"),
        logo: "/images/simsimy.png",
        screenshots: ["/screenshots/simsimy/1.JPG", "/screenshots/simsimy/2.JPG", "/screenshots/simsimy/3.JPG", "/screenshots/simsimy/4.JPG",
        "/screenshots/simsimy/5.JPG", "/screenshots/simsimy/6.JPG", "/screenshots/simsimy/7.JPG", "/screenshots/simsimy/8.JPG",],
    },
];
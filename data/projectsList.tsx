import { Project } from "../models/project";

export const projectsList: Project[] = [
    {
        id: 1,
        name: "Sharik",
        description: "A service providing project that consists of Customer and Service provider mobile apps. It was developed using Flutter as a front end and Firebase as a backend It was the first project of the company.",
        date: new Date("2022-06-7"),
        logo: "/images/shrek.png",
    },
    {
        id: 2,
        name: "Rayid",
        description: "An ecommerce project that consists of Customer, Store and driver mobile apps. The source code was purchased from codaneyon and It was developed using Flutter and Php-Laravel as a backend.",
        date: new Date("2022-05-18"),
        logo: "/images/rayid.png",
    },
    {
        id: 3,
        name: "Foodo",
        description: "A remaining food selling project that consisted of Customer app and a dashboard. It was developed using Flutter and firebase as a backend.",
        date: new Date("2022-12-14"),
        logo: "/images/foodo.png",
    },
    {
        id: 4,
        name: "Simsimy",
        description: "A parenting control system that consisted of a mobile app for the parents and a tablet home launcher for the kids. It was developed using Android native (Java) and python - django as a backend.",
        date: new Date("2019-09-18"),
        logo: "/images/simsimy.png",
    },
];
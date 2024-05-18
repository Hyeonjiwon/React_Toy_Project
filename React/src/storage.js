import { createPastDate } from "./helpers.js";

const storage = {
    userData: [
        {
            "id": 1,
            "name": "John Doe",
            "age": 30,
            "email": "john@example.com"
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "age": 25,
            "email": "jane@example.com"
        },
        {
            "id": 3,
            "name": "Mike Johnson",
            "age": 35,
            "email": "mike@example.com"
        }
    ],

    countriesData: [
        {
            id: 1,
            name: "United States",
            capital: "Washington, D.C.",
            population: "331,449,281",
            area: "9,826,675 km²",
            language: "English"
        },
        {
            id: 2,
            name: "China",
            capital: "Beijing",
            population: "1,444,216,107",
            area: "9,596,961 km²",
            language: "Chinese"
        },
        {
            id: 3,
            name: "India",
            capital: "New Delhi",
            population: "1,393,409,038",
            area: "3,287,263 km²",
            language: "Hindi, English"
        },
        {
            id: 4,
            name: "Brazil",
            capital: "Brasília",
            population: "213,993,437",
            area: "8,515,767 km²",
            language: "Portuguese"
        },
        {
            id: 5,
            name: "Pakistan",
            capital: "Islamabad",
            population: "220,892,340",
            area: "881,913 km²",
            language: "Urdu, English"
        },
    ],
};

export default storage;
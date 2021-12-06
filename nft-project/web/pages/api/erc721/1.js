
const metadata = {
    1: {
        attributes: [
            {
                trait_type: "Shape",
                value: "Circle",
            },
            {
                trait_type: "Mood",
                value: "Sad",
            },
        ],
        description: "A sad circle.",
        image: "https://i.ibb.co/0hH5CfR/nemo.jpg",
        name: "Edna Moda",
    },
    2: {
        attributes: [
            {
                trait_type: "Shape",
                value: "Rectangle",
            },
            {
                trait_type: "Mood",
                value: "Angry",
            },
        ],
        description: "An angry rectangle.",
        image: "https://i.imgur.com/SMneO6k.jpeg",
        name: "Angry Rectangle",
    },
    3: {
        attributes: [
            {
                trait_type: "Shape",
                value: "Triangle",
            },
            {
                trait_type: "Mood",
                value: "Bored",
            },
        ],
        description: "An bored triangle.",
        image: "https://i.ibb.co/PFdKS14/cars-Hippie.jpg",
        name: "Bored Triangle",
    },
};

export default function handler(req, res) {
    res.status(200).json(metadata[req.query.id] || { "Error": "No id provided" });
}
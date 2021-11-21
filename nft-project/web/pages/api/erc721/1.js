const metadata = {
1: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Rare",
    },
],
    description: "Peace and Love",
    image: "https://i.ibb.co/PFdKS14/cars-Hippie.jpg",
    name: "Cars Hippie George Carlin"
},
2: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Rare",
    },
],
    description: "I never look back, darling. It’s distract from the now",
    image: "https://i.ibb.co/4SKgg7V/ednaModa.jpg",
    name: "Edna Moda"
},
3: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Triangle",
    },
],
    description: "Nemo",
    image: "https://i.ibb.co/0hH5CfR/nemo.jpg",
    name: "Nemo"
},
4: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Basic",
    },
],
    description: "Russell, the main character in the Up movie",
    image: "https://i.ibb.co/9wkSmn6/up-Main-Character.jpg",
    name: "Russell"
},
5: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Common",
    },
],
    description: "Girl in up the movie",
    image: "https://i.ibb.co/QbfWMrY/up2.png",
    name: "Girl from Up the movie"
},
6: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Common",
    },
],
    description: "Carl the old man from up",
    image: "https://i.ibb.co/88pxHk4/up1.png",
    name: "Carl"
},
7: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Basic",
    },
],
    description: "The house from Up",
    image: "https://i.ibb.co/NZPSkxL/up.jpg",
    name: "The House"
},
8: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Common",
    },
],
    description: "Ka-chow!",
    image: "https://i.ibb.co/DYB36FP/lightning-Mcqueen.jpg",
    name: "Lightning McQueen"
},
9: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Rare",
    },
],
    description: "The villain from Riding Hood Villain",
    image: "https://i.ibb.co/7WxQ0B0/little-Red-Riding-Hood-Villian.png",
    name: "Red Riding Hood Villain"
},
10: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Rare",
    },
],
    description: "baby Syndrome, the  villain from the incredibles movie",
    image: "https://i.ibb.co/wgskmXt/the-Increibles-Villian.png",
    name: "Baby Syndrome"
},
11: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Rare",
    },
],
    description: "God thrown son. That’s my boy!",
    image: "https://i.ibb.co/zfLh4vX/toy-Story3-Villian.png",
    name: "Zurg"
},
12: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Epic",
    },
],
    description: "Idiots! Children destroy toys",
    image: "https://i.ibb.co/RzwKnqw/toy-Story-Villian.png",
    name: "Stinky Pete"
},
13: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Epic",
    },
],
    description: "Let us toast your non-idiocy.",
    image: "https://i.ibb.co/sQh5rYs/ratatouille-Villian.png",
    name: "Chef Skinner"
},
14: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Epic",
    },
],
    description: "And when everyone’s super… no one will be.",
    image: "https://i.ibb.co/hWrSs8s/syndrome.jpg",
    name: "Syndrome"
},
15: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Epic",
    },
],
    description: "Happy Halloween",
    image: "https://i.ibb.co/WWj75Vd/bad-Mickey.jpg",
    name: "Halloween Mickey"
},
16: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Basic",
    },
],
    description: "It’s him! The chicken man",
    image: "https://i.ibb.co/pRQdCBp/chicken-Al.jpg",
    name: "Chicken Al"
},
17: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Basic",
    },
],
    description: "You have save our lives, we are eternally grateful",
    image: "https://i.ibb.co/q1pwbZp/green-Little-Man.jpg",
    name: "Green Little Man Vinylmation"
},
18: {
    attributes: [
    {
            trait_type:"Tier",
            value: "Common",
    },
],
    description: "1 of 100000",
    image: "https://i.ibb.co/SvZvb0W/stormtrooper.jpg",
    name: "Stormtrooper"
},
19: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Epic",
    },
],
    description: "The greatest teacher, failure is",
    image: "https://i.ibb.co/SyPCHtF/yoda.jpg",
    name: "Yoda"
},
20: {
    attributes: [
    {
            trait_type: "Tier",
            value: "Legendary",
    },
],
    description: "Luke, im your father",
    image: "https://i.ibb.co/pRbYfcW/darth-Vader.jpg",
    name: "Darth Vader"
}
}

export default function handler(req, res) {
    res.status(200).json(metadata[req.query.id] || {});
  }

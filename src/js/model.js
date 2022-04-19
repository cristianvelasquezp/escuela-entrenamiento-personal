import { images } from "./helpers.js";

export const state = {
    video : {
        lastVideos: [
            {name: 'Booty & Abs', hardness: 'Intermedio', date: 'Domingo 27 de febreo', image: images['image1.jpg']},
            {name: 'Hipopresivos dinámicos', hardness: 'Intermedio', date: 'Domingo 27 de febreo', image: images['image2.jpg']},
            {name: 'Yoga', hardness: 'Intermedio', date: 'Domingo 27 de febreo', image: images['image3.jpg']},
        ],
        categories : [
            {name: 'Boxeo', image: images['image4.jpg']},
            {name: 'Gym', image: images['image5.jpg']},
            {name: 'Dance', image: images['image6.jpg']},
            {name: 'Running', image: images['image7.jpg']},
            {name: 'Karate', image: images['image8.jpg']},
            {name: 'MMA', image: images['image9.jpg']},
        ]
    },
}
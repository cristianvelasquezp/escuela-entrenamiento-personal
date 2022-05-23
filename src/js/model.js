import { images, getJSON, getDate } from "./helpers.js";

export const state = {
    workout : {
        videos:[],
        categories : [
            {name: 'Boxeo', thumbnail: images['image4.jpg']},
            {name: 'Gym', thumbnail: images['image5.jpg']},
            {name: 'Dance', thumbnail: images['image6.jpg']},
            {name: 'Running', thumbnail: images['image7.jpg']},
            {name: 'Karate', thumbnail: images['image8.jpg']},
            {name: 'MMA', thumbnail: images['image9.jpg']},
        ]
    },
}

export const loadWorkoutsVideo = async function() {
    try {
        const data = await getJSON('http://127.0.0.1:3000/api/v1/workout/');
        state.workout.videos = data.data.workouts.map( workout => {
            return {
                id: workout._id,
                name: workout.name,
                hardness: workout.hardness,
                date: getDate(workout.date),
                thumbnail: workout.thumbnail,
                thumbnail2x: workout.thumbnail2x
            }
        })
    } catch (err) {
        console.log(err);
        throw err;
    }
};
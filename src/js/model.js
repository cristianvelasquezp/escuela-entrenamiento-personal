import { API_URL } from './config.js';
import { images, getJSON, getDate } from "./helpers.js";

export const state = {
    workout : {
        videos:[],
        categories : []
    },
}

export const loadWorkoutsVideo = async function() {
    try {
        const data = await getJSON(`${API_URL}workout/`);
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

export const loadWorkoutCategories = async function () {
    try {
        const data = await getJSON(`${API_URL}category/`);
        state.workout.categories = data.data.categories.map( category => {
            return {
                id: category._id,
                name: category.name,
                thumbnail: category.thumbnail,
                thumbnail2x: category.thumbnail2x
            }
        })
    } catch (err) {
        console.log(err);
        throw err;
    }
}
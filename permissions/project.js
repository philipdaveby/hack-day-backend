const canViewProject = (user, project) => {
    return (project.userID = user.id);
}

const scopedWorkouts = (user, workouts) => {
    return workouts.filter(workout => workout.user === user);
}

const scopedExercises = (user, exercises) => {
    return exercises.filter(exercise => exercise.user === user || exercise.user === 'all');
}

module.exports = {
    canViewProject,
    scopedWorkouts,
    scopedExercises
}
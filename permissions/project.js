const canViewProject = (user, project) => {
    return (project.userID = user.id);
}

const scopedWorkouts = (user, workouts) => {
    return workouts.filter(workout => workout.user === user);
}

module.exports = {
    canViewProject,
    scopedWorkouts
}
/**
 * TDD Opdracht: WorkoutCard Component
 * 
 * Een card die 1 workout toont met delete functionaliteit
 * Run: npm test opdracht-13
 */

function WorkoutCard({ workout, onDelete }) {
  const handleDelete = () => {
    if (onDelete) {
      onDelete(workout._id);
    }
  };

  return (
    <div className="workout-card">
      <h3>{workout.title}</h3>
      <p>{workout.reps} reps</p>
      <p>{workout.load} kg</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default WorkoutCard;

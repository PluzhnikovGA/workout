import Auth from '../components/screens/Auth/Auth';
import Home from '../components/screens/Home/Home';
import ListWorkouts from '../components/screens/ListWorkouts/ListWorkouts';
import NewExercise from '../components/screens/NewExercise/NewExercise';
import NewWorkout from '../components/screens/NewWorkouts/NewWorkout';
import Profile from '../components/screens/Profile/Profile';
import Workout from '../components/screens/Workout/Workout';

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: true
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		isAuth: true
	},
	{
		path: '/workouts/:id',
		component: Workout,
		isAuth: true
	},
	{
		path: '/workouts',
		component: ListWorkouts,
		isAuth: true
	}
];

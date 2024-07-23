import Auth from '../components/screens/Auth/Auth';
import Home from '../components/screens/Home/Home';
import NewExercise from '../components/screens/NewExercise/NewExercise';
import NewWorkout from '../components/screens/NewWorkouts/NewWorkout';
import Profile from '../components/screens/Profile/Profile';

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
	}
];

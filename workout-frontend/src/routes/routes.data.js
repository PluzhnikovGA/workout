import Auth from '../components/screens/Auth/Auth';
import Home from '../components/screens/Home/Home';
import NewWorkout from '../components/screens/NewWorkouts/NewWorkout';
import Profile from '../components/screens/Profile/Profile';

export const routes = [
	{
		path: '/',
		component: Home,
		auth: false
	},
	{
		path: '/auth',
		component: Auth,
		auth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		auth: true
	},
	{
		path: '/profile',
		component: Profile,
		auth: true
	}
];

import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { TOKEN } from '../app.constants';

import { useAuth } from './useAuth';

export default function useCheckToken() {
	const { isAuth, setIsAuth } = useAuth();
	const { pathname } = useLocation();

	useEffect(() => {
		if (!Cookies.get(TOKEN)) setIsAuth(false);
	}, [pathname, isAuth]);
}

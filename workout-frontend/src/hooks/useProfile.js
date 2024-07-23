import { useQuery } from '@tanstack/react-query';

import UserServices from '../services/user.services';

export default function useProfile() {
	return useQuery(['getProfile'], () => UserServices.getProfile(), {
		select: ({ data }) => data
	});
}

import { LOGIN_SUCCESS } from './constants';

export function login() {
  return {
    type: LOGIN_SUCCESS,
    user: {
      firstName: 'Nutchanon',
      lastName: 'Pho-ngoen',
    },
  };
}

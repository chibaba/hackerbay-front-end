// @flow
export const getSession = () => localStorage.getItem('session');

export const setSession = (val: string) => localStorage.setItem('session', val)
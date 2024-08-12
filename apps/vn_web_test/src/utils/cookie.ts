import Cookies from 'js-cookie';

export function localSetItem(key: string, value: string) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function localGetItem(key: string) {
  const value = localStorage.getItem(key);

  return value ? JSON.parse(value) : '';
}

export function setCommonCookie(name: string, value: string, expires: number): any {
  return Cookies.set(name, value, { expires: expires });
}
export function getCommonCookie(name: string): any {
  return Cookies.get(name);
}

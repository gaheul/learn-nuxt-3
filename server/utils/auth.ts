import type { H3Event } from 'h3';

export function getUserFromEvent(e: H3Event) {
  const userJsonString = getCookie(e, '__user');

  if (!userJsonString) {
    return null;
  }

  const user = JSON.parse(userJsonString);
  return user;
}

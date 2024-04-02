import { getUserFromEvent } from '~/server/utils/auth';

export default defineEventHandler((e) => {
  const user = e.context.user;

  if (!user) {
    return { user: null };
  }

  return {
    user,
  };
});

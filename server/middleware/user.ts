export default defineEventHandler((e) => {
  const user = getUserFromEvent(e);
  console.log('middleware', user);
  if (user) {
    e.context.user = user;
  }
});

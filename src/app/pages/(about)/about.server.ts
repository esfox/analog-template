export const load = async () => {
  console.debug('i am running on the server...?');
  await new Promise((resolve: any) => {
    setTimeout(() => resolve(), 3000);
  });
  return {
    message: 'Hello About',
  };
};

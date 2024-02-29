export const load = async () => {
  console.debug(process.env['DB_CONNECTION']);

  console.debug('i am running on the server...?');
  await new Promise((resolve: any) => {
    setTimeout(() => resolve(), 1000);
  });
  return {
    message: 'Hello About',
  };
};

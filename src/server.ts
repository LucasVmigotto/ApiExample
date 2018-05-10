import app from './app'

const server = app.listen(app.get('port'), (err: Error) => {
  if (err) {
    console.log('\n****\tA error occurred while running the application.\n' +
      `****\tError description: ${err.message}`);
  }
  console.log('\n****\tApplication running.\n' +
    `\t\tURL: https://localhost:${app.get('port')}\n` +
    `\t\tEnvironment: ${app.get('env')}`);
});

export default server;

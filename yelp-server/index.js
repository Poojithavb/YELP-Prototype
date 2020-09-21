const app = require('./app');
const login = require('./routes/login');
const signup = require('./routes/signup');

app.use('/yelp/login', login);
app.use('/yelp/signup', signup);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

module.exports = app;

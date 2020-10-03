const app = require('./app');
const login = require('./routes/login');
const signup = require('./routes/signup');
const images = require('./routes/images');
const uploads = require('./routes/upload');
const events = require('./routes/events');
const menuItem = require('./routes/menuitem');
const customerProfile = require('./routes/customerProfile');
const restaurantProfile = require('./routes/restaurantProfile');

app.use('/yelp/login', login);
app.use('/yelp/signup', signup);
app.use('/yelp/upload', uploads);
app.use('/yelp/images', images);
app.use('/yelp/events', events);
app.use('/yelp/menuitem', menuItem);
app.use('/yelp/profile/customer', customerProfile);
app.use('/yelp/profile/restaurant', restaurantProfile);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});

module.exports = app;

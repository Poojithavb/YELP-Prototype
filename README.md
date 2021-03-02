# Prototype of yelp application
## Steps to deploy the application
Install node.js

### Back End
Git clone the yelp-server(backend) folder.
Open the terminal in the folder "yelp-server".
Execute "npm install" to install all the dependencies.
Create database in MySQL and import Yelpdbdump.sql.
Update pool.js file in yelp-server folder with database name and connection details.
Update the app.js file in yelp-server folder with frontend server's IP address and port.
Run node index.js

### Front End
Git clone the yelp-client(frontend) folder.
Open the terminal in the folder "yelp-client".
Update the webConfig.js file in yelp-client/src folder with the backend server's IP address and port.
Execute "npm start" to run the front end server. Run npm start.

This will launch the application

Open the browser and navigate to Front end server's IP address with Port number (Eg: 127.0.0.1:3000)

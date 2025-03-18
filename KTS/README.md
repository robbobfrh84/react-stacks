## "Kiss the Sky" A Web App Ambience Game
- **Full-Stack MERN Application:** 
  - Combines MongoDB, Express, React, and Node.js for a robust web application.
- **MVC Back-End Design Pattern:** 
  - Implements Model, View, and Controller separation to streamline business logic and data management.
- **RESTful API Integration:** 
  - Enables CRUD operations and efficient data flow.
- **Authentication with Passport.js:** 
  - Manages secure user authentication and session handling.
- **Responsive UI/UX:** 
  - Leverages React for dynamic, interactive interfaces.
- **Deployment Ready:** 
  - Supports easy setup, testing, and production deployment.

# Development Setup Notes
* NOTE: Last reviewed on new MacBook air (2023 M2 chip) in March 2025.

### Overview
This is a MERN (Mongodb, Express, React, Node) Application, and here are the required installations...
- Node JS: https://nodejs.org/en/download/
- MongoDb:
  - Download: https://treehouse.github.io/installation-guides/mac/mongo-mac.html
    - This guide may be a bit out of date for newer macs. (note: 03/25)
  - Info: https://www.mongodb.com/
  - Recommended software for visualizing database (not required)
    - Robo 3T: https://robomongo.org/download
  - Recommended software for testing API requests
    - postman: https://www.getpostman.com/

### Installing mongo DB using brew

Start by updating brew: $`brew update`, then...
- $`brew tap mongodb/brew`
- $`brew install mongodb-community`
- $`brew services start mongodb-community` (optional)

Create a local folder to store local database content for testing
- Either
  - $`mkdir -p /data/db` for Intel macs
- OR
  - $`mkdir -p ~/data/db` for Silicon Macs (M1,M2,etc...)

### Getting Started
Once you have all the required software installed. We now need to start a Mongo DB Daemon running in the background of your os for node JS to interact with. To boot that up run...
- Either
  - $`mongod` for Intel macs
- OR
  - $`mongod --dbpath ~/data/db` for Silicon Macs (M1,M2,etc...)
- This start the mongod db daemon!
- In a new window, run $`mongosh` to test that it's running
  - If setup correctly, your command line will now show the `>` symbol. If not. something wasn't set up correctly :(.
  - From here, you can run mongodb commands. 
  - Close this cli with `exit()`
  - NOTE, running $`mongosh` is a way to test your mongodb deamon, you likely wont do any work directly in this command line, and can close it while developing. BUT leave the $`mongod` window running. 

Open a new terminal window to install the app dependencies and create the build environment.
- Navagate into this folder at this root level using $`cd`, then...
  - $`npm install`
  - $`npm run seed all` (Optional: If you want to start with all seed data)
  - $`npm start` 🔥 should open a new tab in your browser. 

### Seeding your database
The application may behave oddly if you haven't seeded any data.
- SEED ALL From the within the `KTS` folder, run $`npm run seed all`
- REMOVE all data with $`npm run seed delete`.
- See: `seed/index.js` for more seeding options.
- WARNING! You will lose any saved data locally when running these commands.

Your Front End should now be serving to `http://localhost:3003`

Test API Get requests at `http://localhost:3004`
- Example: `http://localhost:3004/api/manifest`

### Potential issues

Port in use error.
- To kill a port that is stuck in use
  - Run $`lsof -i :3003` (Or whatever port you need).
- This will show a list of services using that port.
- Find the `PID` number associated with the port you want to kill
  - Run $`kill -QUIT PID`
  - Example: $`kill -QUIT 23451` (NOTE: number character length may vary.)


----
# Resources

See outdated live version of webapp (Front end only):
- https://matthewmain.github.io/kiss_the_sky/

Favicon Generator:
- https://realfavicongenerator.net/favicon_result?file_id=p1d6lj02mpfts1l8i1voptk91iaa6#.XJZg1-tKjOR
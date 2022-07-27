# BookingSystem

Run the following cmd in the project directory:
  npm i yarn ,
  yarn , 
  yarn install , 
  yarn start

In case you have an error related to execution policies which is unable to run scripts:
  Step 1: run Powershell with Run As Administrator
  Step 2: enter 'set-executionpolicy remotesigned'
  Step 3: press 'y' and enter (Basically saying yes)

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

Optional:
  libs to install:
  - express -> add type model in package.json
  - yarn install
  - yarn add nodemon
  - yarn add dotenv
  - yarn add mongoose
  - yarn add bcryptjs
  - yarn add jsonwebtoken
  - yarn add cookie-parser
  - yarn add cors

  create secret keys: -> to check if admin or not
  - openssl rand -base64 32 

  MongoDB acc:
  - tbs - tbs123
  - ip: 0.0.0.0/0
  - add connection string into .env

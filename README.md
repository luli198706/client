## Getting Started 

* The project is created in VS code
* Install the related packages if you do not have them: Jest, ts-jest, Express, and Supertest
    `npm install --save-dev jest @types/jest ts-jest typescript express supertest @types/node`

### Jest Unit Test for request testing
* The unit test code in src/index.test.ts
    * Running test file via `npx jest`; 
    * If want to check the error, use the command `npx jext --detectOpenHandles`
    * Do not run the project when you want to test it via jest

### Running Code
* `npm run start`
* As two users infor are pre-stored:
    {surName: "Harris", firstName: "Dava", emailAddress: "dava.ha@demo.com"},
    {surName: "Smith", firstName: "Ramon", emailAddress: "ramon.sm@demo.com"}

   * Then using the following url to get the user info with user surName is Harris:
     `http://localhost:3000/users?surName=Harris`
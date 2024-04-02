import express, {Request, Response} from 'express';
const app = express();
const port = 3000;

interface User {
    surName: string;
    firstName: string;
    emailAddress: string;
}
//Define two users with all infor
let users: User[] = [
    {surName: "Harris", firstName: "Dava", emailAddress: "dava.ha@demo.com"},
    {surName: "Smith", firstName: "Ramon", emailAddress: "ramon.sm@demo.com"}
];
//Retrieve the user info if the requested surName is matching
app.get('/users', (req: Request, res: Response) => {
    const {surName} = req.query;
    if (typeof surName !== 'string') {
        return res.status(400).json({error: 'Invalid query'});
    }
    const findUsers = users.filter(user => user.surName === surName);
    res.json(findUsers);
});

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

export default server;
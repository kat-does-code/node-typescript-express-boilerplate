import express, { Express, Request, Response } from 'express';


const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req : Request, res : Response) => {
   res.send("Server operational")
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
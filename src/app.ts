import express, { Request, Response } from 'express';

import authRoutes from './routes/auth';

const app = express();
app.use(express.json());
app.use('/api/auth', authRoutes);
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}
console.log(process.env.DATABASE_URL);


export default app;

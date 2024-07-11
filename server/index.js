import express from 'express';
import cors from 'cors';
import empRoutes from './routes/empRoutes.js';

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', empRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
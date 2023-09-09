import dotenv from 'dotenv';
import express from 'express';
import viewEngine from 'jsx-view-engine';
import mongoose from 'mongoose';
import cors from 'cors'; // Added CORS for cross-origin requests
import bodyParser from 'body-parser'; // Added body-parser for parsing JSON request bodies
import pokemonRouter from './routes/pokemon.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

// Use CORS middleware for cross-origin requests
app.use(cors());

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'jsx');
app.engine('jsx', viewEngine());

// Define a custom middleware for logging requests
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

app.use('/pokemon', pokemonRouter);

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the Pokemon App!</h1>
    <a href='/pokemon/'>View Pokemon</a>
  `);
});

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

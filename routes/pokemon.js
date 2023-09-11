import express from 'express';
import { Pokemon } from '../models/pokemon.mjs'; 

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const pokemon = await Pokemon.find({});
    res.status(200).render('Index', { pokemon });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ message: error.message });
  }
});

router.get('/new', (req, res) => {
  res.render('New');
});

router.post('/', async (req, res) => {
  try {
    await Pokemon.create(req.body);
    res.status(201).redirect('/pokemon');
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    res.status(200).render('Show', { pokemon: req.pokemon });
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ message: error.message });
  }
});

router.param('id', async (req, res, next, id) => {
  req.pokemon = await Pokemon.findById(id);
  next();
});

export default router;

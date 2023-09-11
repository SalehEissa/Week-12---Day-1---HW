const express = require('express');
const router = express.Router();
const Pokemon = require('../models/pokemonModel'); 
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const pokemon = await Pokemon.findById(id);

    if (!pokemon) {
      res.status(404).send('Pokemon not found');
      return;
    }

    res.status(200).render('Show', { pokemon });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

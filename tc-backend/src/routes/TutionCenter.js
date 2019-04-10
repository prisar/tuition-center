const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// get 
router.get('/', async (req, res) => {
    const tution_centers = await loadTutionCentersCollection();

    res.send(await tution_centers.find({}).toArray());
});

// post
router.post('/', async (req, res) => {
    const tution_centers = await loadTutionCentersCollection();
    await tution_centers.insertOne({
        text: req.body.text,
        createdAt: new Date()
    })
    res.status(201).send();
});

//delete
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
  });

async function loadTutionCentersCollection() {
    const client = await mongodb.MongoClient.connect(
        'url', {
            useNewUrlParser: true
        }
    );

    return client.db('tution_center').collection('tution_centers');
}

module.exports = router;

const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');
// post route to add aperson
router.post('/', async (req, res) => {
   try{
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log('data saved successfully');
    res.status(200).json(response);
   } catch(err){
    console.error('Error saving person:', err);
    res.status(500).send({ error: 'Internal server error' });
   }
});
// Get route to fetch all persons
router.get('/', async (req, res) => {
    try {
        const persons = await Person.find();
        console.log('data fetched successfully');
        res.status(200).json(persons);
    } catch (err) {
        console.error('Error fetching persons:', err);
        res.status(500).send({ error: 'Internal server error' });
    }
});

router.get('/:worktype', async (req, res) => {
    try {
    const worktype = req.params.worktype;
    if(worktype == 'chef' || worktype == 'waiter' || worktype == 'manager'){
        const response = await Person.find({ work: worktype });
        console.log('data fetched successfully');
        res.status(200).json(response);
    } else{
        res.status(400).send({ error: 'Invalid work type' });
    }
} catch (err) {
    console.log('err');
    res.status(500).send({ error: 'Internal server error' });
}
});
// router.put('/:id',(req,res)=>{
//     try {
//         const personId = req.params.id;
//         const updatedPersonData = req.body;
//         const response = Person.findByIdAndUpdate(personId, updatedPersonData, {
//              new: true,
//                 runValidators: true,
//              });
//              if (!updatedPersonData) {
//                 return res.status(404).send({ error: 'Person not found' });
//             }
//         console.log('data updated successfully');
//         res.status(200).json(response);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send({ error: 'Internal server error' });

//     }
// });
router.put('/:id', async (req, res) => {
    try {

        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(
            personId,
            updatedPersonData,
            {
                new: true,
                runValidators: true
            }
        );

        if (!response) {
            return res.status(404).json({
                error: 'Person not found'
            });
        }

        console.log('data updated successfully');

        res.status(200).json(response);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            error: err.message
        });

    }
});
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        console.log('data deleted successfully');
        res.status(200).json({ message: 'Person deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
module.exports = router;
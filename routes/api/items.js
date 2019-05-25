const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/Items');

//@route GET api/items
//@desc Create an item
//@access Public

router.get('/',(req, res) => {
    Item.find()
        .sort({ date: -1 })   //sorting by date requires 'date : -1' for ascending 1date: 1'
        .then(items => res.json(items));
});

//@route POST api/items
//@desc Create a post
//@access Public

router.post('/',(req, res) => {
   const newItem = new Item({
       name: req.body.name
   });
   newItem.save()
    .then(item => res.json(item));
});

//@route DELETE api/items/:id
//@desc Delete a post
//@access Public

router.delete('/:id',(req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));

});



module.exports = router;
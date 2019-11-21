const express = require('express');
const router = express.Router();
const withCatch = require('../../utils/withCatch.js');
const isEmptyObj = require('../../utils/isEmptyObj.js');

const Trucks = require('./trucks-model');
const Operators = require('../operators/operator-model');

/**
*@api {get} /trucks
*@apiName Gettrucks
*@apiGroup trucks
**/

router.get('/', async (req, res) => {

    const [err, trucks] = await withCatch(Trucks.getTrucks()) 

    if (err) res.status(500).json(err)
    else if (err || isEmptyObj(trucks)) res.status(404).json({ error: "No trucks available."})
    else res.status(200).json(trucks)
})

/**
*@api {get} /trucks/:operator_id
*@apiName GetTrucksByOperatorId
*@apiGroup trucks
**/

router.get('/:operators_id', async (req, res) => {

    const [err, trucks] = await withCatch(Operators.getTrucksById(req.params.operators_id))

    if (err) res.status(500).json(err)
    else if (err || isEmptyObj(trucks)) res.status(404).json({ error: "There are no trucks registered with this Operator yet."})
    else res.status(200).json(trucks)

})



/**
*@api {post} /trucks
*@apiName PostTrucks
*@apiGroup trucks
**/

router.post('/', async (req, res) => {

    const [err, trucks] = await withCatch(Trucks.create(req.body))

    if (err) res.status(500).json(err)
    else res.status(201).json({ created: `following truck with id of ${trucks}`, trucks: req.body})
})

/**
*@api {put} /trucks/:truck_id
*@apiName PutTrucks
*@apiGroup trucks
*@apiParam {Number} id truck's unique ID.
**/

router.put('/:id', async (req, res) => {

    const [err, trucks] = await withCatch(Trucks.update(req.params.id, req.body)) 
   
    if (err) res.status(500).json(err)
    else res.status(200).json({ updated: `following TRUCK with id of ${req.params.id}`, newJob: req.body})
})

/**
*@api {delete} /truck/:truck_id
*@apiName DeleteTrucks
*@apiGroup trucks
**/

router.delete('/:id', async (req, res) => {

    const [err, count] = await withCatch(Trucks.remove(req.params.id))

    if (err) res.status(500).json(err)
    else res.status(200).json({ deleted: `${count} Truck(s) of id ${req.params.id}`})
    
})

module.exports = router;
const express = require('express');
const router = express.Router();
const withCatch = require('../../utils/withCatch.js');
const isEmptyObj = require('../../utils/isEmptyObj.js');

const Operators = require('./operator-model');

/**
*@api {post} / operators
*@apiName PostOperators
*@apiGroup Operators
**/

router.post('/', async (req, res) => {

    const [err, operator] = await withCatch(Operators.create(req.body))

    if (err) res.status(400).json(err)
    else res.status(201).json({ created: `the following operator with the id ${operator}`, operator_info: req.body})

})

/**
*@api {get} /Operators
*@apiName GetOperators
*@apiGroup Operators
**/

router.get('/', async (req, res) => {

    const [err, operators] = await withCatch(Operators.get())

        if (err) res.status(500).json(err)
        res.status(200).json(operators)
    
})

/**
*@api {get} /operator/:operator_id
*@apiName GetOperatorsTrucks
*@apiGroup Operators
* @apiParam {Number} id coperator's unique ID.
**/

router.get('/:operator_id', async (req, res) => {

    const [err, operator] = await withCatch(Operators.getById(req.params.operator_id))
        
        if (err) res.status(500).json(err)
        else if (err || isEmptyObj(operator)) res.status(404).json({ error: "There is no operator with this id"})
        else res.status(200).json(operator)

})
/**
*@api {get} /operators/:operator_id/trucks/:truck_id
*@apiName Getoperators trucks
*@apiGroup operators
* @apiParam {Number} id trucks's unique ID.
**/
router.get('/:operator_id/trucks/:truck_id', async (req, res) => {
    
    const [err, truck] = await withCatch(Operators.getTrucksById(req.params.truck_id)) 

    if (err) res.status(500).json(err)
    else if (err || isEmptyObj(truck)) res.status(404).json({ error: "There are no trucks associated with this id"})
    else res.status(200).json(truck)
})

/**
*@api {put} /operators/:operator_id
*@apiName PutOperators
*@apiGroup Operators
*@apiParam {Number} id operator's unique ID.
**/

router.put('/:id', async (req, res) => {

    const [err, operator] = await withCatch(Operators.update(req.params.id, req.body))

    if (err) res.status(500).json(err)
    else res.status(200).json({success: `The operator with id ${req.params.id} was updated with the following changes`, operator})

})

/**
*@api {delete} /operators/:operator_id
*@apiName DeleteOperators
*@apiGroup Operators
**/

router.delete('/:id', async (req, res) => {

    const [err, count] = await withCatch(Operators.remove(req.params.id))
    console.log(count)
        if (err) res.status(500).json(err)
        else res.status(200).json({ deleted: `${count } operator of id ${req.params.id}`})

})



module.exports = router;
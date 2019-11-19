const express = require('express');
const router = express.Router();
const withCatch = require('../../utils/withCatch.js');
const isEmptyObj = require('../../utils/isEmptyObj.js');
const Diners = require('./diners-model');
const checkRole = require('../../middleware/check-department.js');


/**
*@api {post} /diners
*@apiName Postdiners
*@apiGroup diners
**/

router.post('/', async (req, res) => {
    
   const [err, diners] = await withCatch (Diners.create(req.body))

   if (err) res.status(500).json(err)
   else res.status(201).json({ created: `following Diner with id of ${diners.id}`, diners: req.body})
})

/**
*@api {get} /diners
*@apiName GetDiners
*@apiGroup Diners
**/

router.get('/', checkRole("operator"), async (req, res) => {

    const [err, diners] = await withCatch (Diners.get())

    if (err) res.status(500).json(err)
    else if (err || isEmptyObj(diners)) res.status(404).json({ error: "There are no diners available yet."})
    else res.status(200).json(diners)
})

router.get('/:diner_id', async (req, res) => {

    const [err, diner] = await withCatch(Diners.getById(req.params.diner_id))
        
        if (err) res.status(500).json(err)
        else if (err || isEmptyObj(Diner)) res.status(404).json({ error: "There is no Diner by this id"})
        else res.status(200).json(Diner)

})

/**
*@api {put} /diners/:diners_id
*@apiName PutDiners
*@apiGroup Diners
*@apiParam {Number} id diner's unique ID.
**/

router.put('/:id', async (req, res) => {

    const changes = req.body;

    const [err, diner] = await withCatch (Diners.update(req.params.id, changes))

    if (err) res.status(500).json({message: "there was a problem with the request", err})
    else if (err || isEmptyObj(diner)) res.status(404).json({ error: "There is no diner available yet."})
    else res.status(200).json(diner)

})

/**
*@api {delete} /diners/:diners_id
*@apiName DeleteDiners
*@apiGroup Diners
**/

router.delete('/:id', async (req, res) => {

    const [err, count] = await withCatch (Diners.remove(req.params.id))
    
    if (err) res.status(500).json(err)
    else res.status(200).json({ deleted: `${count} Diner with the id of ${req.params.id}`})
})

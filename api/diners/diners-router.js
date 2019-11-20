const express = require('express');
const router = express.Router();
const withCatch = require('../../utils/withCatch');
const isEmptyObj = require('../../utils/isEmptyObj');
const Diners = require('./diners-model');
// const checkRole = require('../middleware/checkRole');


/**
*@api {post} /diners
*@apiName Postdiners
*@apiGroup diners
**/

router.post('/', async (req, res) => {
    
   const [err, diners] = await withCatch (Diners.create(req.body))

   if (err) res.status(500).json(err)
   else res.status(201).json({ created: `following Diner with id of ${diners}`, diners_info: req.body})
})

/**
*@api {get} /diners
*@apiName GetDiners
*@apiGroup Diners
**/
router.get('/', async (req, res) => {

    const [err, diners] = await withCatch(Diners.get())

        if (err) res.status(500).json(err)
        res.status(200).json(diners)
    
})

// router.get('/', checkRole("diner"), async (req, res) => {

//     const [err, diners] = await withCatch (Diners.get())

//     if (err) res.status(500).json(err)
//     else if (err || isEmptyObj(diners)) res.status(404).json({ error: "There are no diners available yet."})
//     else res.status(200).json(diners)
// })

router.get('/:diners_id', async (req, res) => {

    const [err, diners] = await withCatch(Diners.getById(req.params.diners_id))
        
        if (err) res.status(500).json(err)
        else if (err || isEmptyObj(diners)) res.status(404).json({ error: "There is no Diner with this id"})
        else res.status(200).json(diners)

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

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

    const [err, trucks] = await withCatch(trucks.getTrucks()) 

    if (err) res.status(500).json(err)
    else if (err || isEmptyObj(trucks)) res.status(404).json({ error: "No trucks available."})
    else res.status(200).json(trucks)
})

/**
*@api {get} /jobs/:company_id
*@apiName GetJobsByCompanyId
*@apiGroup Jobs
**/

router.get('/:company_id', async (req, res) => {

    const [err, jobs] = await withCatch(Companies.getJobsById(req.params.company_id))

    if (err) res.status(500).json(err)
    else if (err || isEmptyObj(jobs)) res.status(404).json({ error: "There are no jobs available at this company yet."})
    else res.status(200).json(jobs)

})

/**
*@api {post} /jobs
*@apiName PostJobs
*@apiGroup Jobs
**/

router.post('/', async (req, res) => {

    const [err, job] = await withCatch(Jobs.create(req.body))

    if (err) res.status(500).json(err)
    else res.status(201).json({ created: `following job with id of ${job}`, job: req.body})
})

/**
*@api {put} /jobs/:job_id
*@apiName PutJobs
*@apiGroup Jobs
*@apiParam {Number} id job's unique ID.
**/

router.put('/:id', async (req, res) => {

    const [err, job] = await withCatch(Jobs.update(req.params.id, req.body)) 
   
    if (err) res.status(500).json(err)
    else res.status(200).json({ updated: `following job with id of ${req.params.id}`, newJob: req.body})
})

/**
*@api {delete} /jobs/:job_id
*@apiName DeleteJobs
*@apiGroup Jobs
**/

router.delete('/:id', async (req, res) => {

    const [err, count] = await withCatch(Jobs.remove(req.params.id))

    if (err) res.status(500).json(err)
    else res.status(200).json({ deleted: `${count} job(s) of id ${req.params.id}`})
    
})

module.exports = router;
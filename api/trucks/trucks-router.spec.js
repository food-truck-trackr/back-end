const db = require('../../database/db');
const request = require('supertest');
const server = require('../../api/server.js')
const getType = require('jest-get-type');

describe('GET /trucks', () => {

    it('it should return data in json format', async () => {
        const response = await request(server).get('/api/trucks')
        expect(getType(response)).toBe('object')
    })
})

// describe('POST /trucks', () => {
//     beforeEach(async() => {
//         await db('trucks')
//             .truncate();
//         })
//     it('should save new truck correctly to db', async () => {        
//         const newTruck = await request(server).post('/api/trucks')
//             .send({truck_name: 'Chipotle in a truck' , location_lat: 14256854 , location_lon: 1245638, food_type:'tex-mex', operators_id:1, departing_time: '10:30' })
//             expect(newTruck.body.truck_name).toMatch('Chipotle in a truck')
        
//     })
// })

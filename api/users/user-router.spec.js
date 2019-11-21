const db = require('../../database/db');
const request = require('supertest');
const server = require('../../api/server.js')
const getType = require('jest-get-type');

describe('GET /users', () => {

    it('it should return data in json format', async () => {
        const response = await request(server).get('/api/users')
        expect(getType(response)).toBe("object")
    })
})

describe('POST /register', () => {
    beforeEach(async() => {
        await db('users')
            .truncate();
    })

    it('should save new user name correctly to db', async () => {        
        const newUser = await request(server).post('/api/register')
            .send({ username: 'jimmy', password: 'johns', role: 'diner' })
            expect(newUser.body.username).toMatch("jimmy")
        
    })

    it('should return a status of 201', async () => {
        const response = await request(server).post('/api/register')
        .send({ username: 'Nadine', password: 'surf10', role:'diner' })
        expect(response.status).toBe(201)
    })

})
import express from 'express'
import fs from 'fs'
import cors from 'cors'
import MOCK_DATA from './MOCK_DATA.json' with { type: 'json' }

const users = MOCK_DATA

const app = express()
app.use(cors())
app.use(express.json())

const myLogger = function (req, res , next ) {
    console.log('LOGGED')
    next()
}
app.use(myLogger)

// restfull api
// get method
app.get('/api/users', (req, res)=>{
    return res.json(users)
})
// post method
app.post('/api/users', (req, res)=>{

    if(!req.body|| !req.body.first_name|| !req.body.last_name|| !req.body.email || !req.body.gender){
        return res.status(400).json({error: 'Missing required fields'})
    }

    const lastUser = users[users.length - 1]
    const lastId = lastUser? lastUser.id + 1 : 1

    const newUser = {
        id: lastId,
        ...req.body
    }
    users.push(newUser)

    fs.writeFile('MOCK_DATA', JSON.stringify(users), (err) => {
        if (err) {
            console.error(err)
            return res.status(500).json({error: 'Internal server error'})
        }
    })
    return res.status(201).json(newUser)
})
// get put patch  delete with id 

app.route('/api/users/:id')
    .get((req, res)=>{
        const id = Number(req.params.id)
        const user = users.find(user => user.id == id)
        if(!user){
            return res.status(404).json({error: 'User not found'})
        }
        return res.status(200).json(user)
    })
    .put((req, res)=>{
        const id = Number(req.params.id)
        const index = users.findIndex(user => user.id == id)
        if(index == -1){
            return res.status(404).json({error: 'User not found'})
        }

        users[index] ={
            id: id,
            ...req.body
        }
        fs.writeFile('MOCK_DATA', JSON.stringify(users), (err) => {
            if (err) {
                console.error(err)
                return res.status(500).json({error: 'Internal server error'})
            }
        })
        return res.status(201).json(users[index])
    })
    .patch((req, res)=>{
        const id = Number(req.params.id)
        const user = users.find(user => user.id == id)
        if(!user){
            return res.status(404).json({error: 'User not found'})
        }
        Object.assign(user, req.body)
        fs.writeFile('MOCK_DATA', JSON.stringify(users), (err) => {
            if (err) {
                console.error(err)
                return res.status(500).json({error: 'Internal server error'})
            }
        })
        return res.status(201).json(user)
    })
    .delete((req, res)=>{
        const id = Number(req.params.id)    
        const index = users.findIndex(user => user.id == id)
        if(index == -1){
            return res.status(404).json({error: 'User not found'})
        }
        users.splice(index, 1)
        fs.writeFile('MOCK_DATA', JSON.stringify(users), (err) => {
            if (err) {
                console.error(err)
                return res.status(500).json({error: 'Internal server error'})
            }
        })
        return res.status(200).json({message: 'User deleted'})
    })
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})

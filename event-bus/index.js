const express = require('express')
const axios = require('axios')

const app = express()

app.use(express.json())

const events = []

app.post('/events', (req,res) => {
    const event = req.body

    events.push(event)

    axios.post('http://posts-clusterip-serve:4000/events', event).catch(err => console.log(err))
    axios.post('http://comments-srv:4001/events', event).catch(err => console.log(err))
    axios.post('http://query-srv:4002/events', event).catch(err => console.log(err))
    axios.post('http://moderation-srv:4003/events', event).catch(err => console.error(err))

    res.send({ status: 'OK'})
})

app.get("/events", (req, res) => {
    res.send(events)
})

app.listen(4005, () => {
    console.log('listening on 4005')
})

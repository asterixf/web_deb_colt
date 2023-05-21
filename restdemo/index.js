const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let comments = [
    {
        id: 1,
        username: 'Todd',
        comment: 'lol that is so funny!',
    },
    {
        id: 2,
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog',
    },
    {
        id: 3,
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd',
    },
    {
        id: 4,
        username: 'onlysayswoof',
        comment: 'woof woof woof',
    },
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({ username, comment })
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params
    const comment = comments.find((c) => c.id === parseInt(id))
    res.render('comments/show', { ...comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params
    const comment = comments.find((c) => c.id === parseInt(id))
    res.render('comments/edit', { ...comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    const newCommentText = req.body.comment
    const comment = comments.find((c) => c.id === parseInt(id))
    comment.comment = newCommentText
    res.redirect('/comments')
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params
    comments = comments.filter((c) => c.id !== parseInt(id))
    res.redirect('/comments')
})

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response')
})

app.post('/tacos', (req, res) => {
    res.send('POST /tacos response')
})

app.listen(3000, () => {
    console.log('ON PORT 3000')
})

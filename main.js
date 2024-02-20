const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var user = [
    { name: 'Vikas', email: 'Vikas@gmail.com', address: 'Adajan', gender: 'Male', compony: 'Myntra', Salary: '10000' },
    { name: 'Om', email: 'om@gmail.com', address: 'Parvatgam', gender: 'Male', compony: 'Wipro', Salary: '50000' },
    { name: 'Kashyap', email: 'kashyap@gmail.com', address: 'Udhna', gender: 'Male', compony: 'Flifcart', Salary: '45000' },
    { name: 'Riya', email: 'riya@gmail.com', address: 'Vesu', gender: 'Female', compony: 'Amazon', Salary: '35000' },
    { name: 'Heet', email: 'heet@gmail.com', address: 'Katargam', gender: 'Male', compony: 'Snapdeal', Salary: '65000' }
]

app.get('/', function (req, res) {
    res.render('../view/pages/Home')
})
app.get('/about', function (req, res) {
    res.render('../view/pages/About')
})
app.get('/user', function (req, res) {
    res.render('../view/pages/User', { User: user })
})
app.get('/adduser', function (req, res) {
    res.render('../view/pages/AddUser')
})
app.post('/adduser', function (req, res) {
    user.push(req.body)
    res.redirect('/user')
})
app.get('/updateuser/:id', function (req, res) {
    var id = req.params.id
    var student = user[id]
    res.render('../view/pages/UpdateUser', { user: student })
})
app.post('/updateuser/:id', function (req, res) {
    var id = req.params.id;
    user[id] = req.body
    res.redirect('/user')
})
app.get('/deleteuser/:id', function (req, res) {
    var id = req.params.id
    user.splice(id, 1)
    res.redirect('/user')
})
app.listen(8000, () => {
    console.log('App is running on port 8000..');
});

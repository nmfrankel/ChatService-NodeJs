const express = require('express')
const app = express()
const methodOverride = require('method-override');
const port = process.env.PORT || 8080

// parse request bodies (req.body)
app.use(express.urlencoded({ extended: true }))

// allow overriding methods in query (?_method=put)
app.use(methodOverride('_method'));

/* ROUTER:START */
/* ROUTER:START */

// static pages load from /public
app.use(express.static('public'))

// api endpoint
app.use('/api', require('./api.js'))


/* ROUTER:END */
/* ROUTER:END */

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

/*
app.use(express.static('public')) // just middleware
app.use('/static', express.static('public'))// middleware with a defined path

app.use('/birds', require('./birds.js'))

app.get('/', (req, res) => {
	res.send('Hello World!')
})
*/
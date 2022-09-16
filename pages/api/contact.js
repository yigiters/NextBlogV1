export default async function(req, res) {
    fetch(`${process.env.API_HOST}/api/contact?name=${req.body.name}&mail=${req.body.mail}&text=${req.body.text}`)
    .then(data => data.json())
    .then(json => {if(json.status == '200') {
        res.redirect('/contact')
    }})
}
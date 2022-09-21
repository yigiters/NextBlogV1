export default async function (req,res) {
    var kw = req.body.search
    var kw = kw.replace('İ', 'i')
    var kw = kw.replace('ğ', 'g')
    var kw = kw.replace('Ğ', 'g')
    var kw = kw.replace('I', 'i')
    var kw = kw.replace('ı', 'i')
    res.redirect(`/search/${kw}`)
}
export default async function (req,res) {
    var kw = req.body.search
    var kw = kw.replace('İ', 'i')
    var kw = kw.replace('ğ', 'g')
    var kw = kw.replace('Ğ', 'g')
    var kw = kw.replace('I', 'i')
    var kw = kw.replace('ı', 'i')
    var kw = kw.replace('Ö', 'o')
    var kw = kw.replace('ö', 'o')
    var kw = kw.replace('Ü', 'u')
    var kw = kw.replace('ü', 'u')
    var kw = kw.replace('Ç', 'c')
    var kw = kw.replace('ç', 'c')
    var kw = kw.replace('Ş', 's')
    var kw = kw.replace('ş', 's')
    
    res.redirect(`/search/${kw}`)
}
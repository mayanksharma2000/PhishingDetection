const phishingDetector = require('node-virustotal');

const request = phishingDetector.makeAPI().setKey(process.env.API_KEY);

const checkUrl = async (req, res, next) => {
    const url = req.body.url;
    request.urlLookup(url, (err, result) => {
        if(err){
            return res.status(500).json({message: 'Something went Wrong'});
        }
        const urlData = JSON.parse(result);
        console.log(urlData);
        return res.json({result});
    } );
};

module.exports = {
    checkUrl
}

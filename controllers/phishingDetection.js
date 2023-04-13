const phishingDetector = require('node-virustotal');

const request = phishingDetector.makeAPI().setKey(process.env.API_KEY);

const checkUrl = async (req, res, next) => {
    const url = req.body.url;
    const hashed = phishingDetector.sha256(url);
    await request.urlLookup(hashed, function (err, result) {
        if(err){
            console.log(err);
            return res.status(500).json({message: 'Something went Wrong'});
        }
        const urlData = JSON.parse(result);
        let isSecure = false;

        if(urlData.data.attributes.last_analysis_results.Avira.result == 'clean'){
            isSecure = true;
        }
        return res.json({isSecure});
    } );
};

module.exports = {
    checkUrl
}

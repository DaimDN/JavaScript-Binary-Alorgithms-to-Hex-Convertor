const https = require('https');
const fs = require('fs');

 
(function executor(){
    var url = "https://www.sap.com/belgique/index.html";
    var chunks = [];
    https.get(url, function(response){
        response.on('data', function(Rawdata){
            chunks.push(Rawdata);        
        }).on('end', function(data){
            data = Buffer.concat(chunks);
            data = data.toString('utf8');
           var newdata =  replace(data);
            writer(newdata);
        })
    })
}
)();
function replace(d){
    var keyword = "Odoo";
    var target = "SAP";
    d = d.split(target).join(keyword);
    return d;
}
async function writer(data){
   
    try {
        fs.writeFileSync('file.html', data)
        console.log("File written succesfull");        
    } catch (error) {
        console.log(error);
        
    }

}
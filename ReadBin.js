const fs = require('fs');
const path = require('path');

var chunks = [];
var array1 =[];
var array2 = [];
function hex2a(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2) str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}


function reader(file){
    file =   'input.bin';
    fs.readFile(file, function(err, data){
        if(err ) throw err;   
        var newdata = data.toString('hex');
        chunks = newdata.split(/(..)/g).filter(s => s);
       
        for(var a =0; a < chunks.length; a ++){

            var dataset1 = chunks[a].charAt(1);
            var dataset2 = chunks[a].charAt(0);

            array1.push(dataset2);
            
            
           
           if(isNaN(Number(dataset1))){
              var dataarray = "abcdefghijklmnopqrstuvwxyz";
              dataarray = [...dataarray];
              var index = dataarray.indexOf(dataset1);
              var newindex = index + 1;

              array2.push(dataarray[newindex]);

           }else{
               var increment = Number(dataset1) + 1;
               array2.push(increment);
           }

        }      
        var str = "";
        
        for(var v =0; v < array2.length; v++){
            str = str + array1[v] + ""+ array2[v];
        }

        
        var newxstr = str.toString();
        
        var payload = hex2a(newxstr);
        var outputfile = 'output.bin';
        
        fs.writeFile(outputfile, payload, function (err) {
            if (err) return console.log(err);
            console.log(payload+ 'has been written successfully');
          });

        
    })
}


reader();




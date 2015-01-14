/*
    Usage
    $ node package.js  <configPath> <params>
    * configPath (optional) - The path to the .cnf file to provide module options
    * mmodules (optional) -The module arguments to provide the build tool without using a .cnf file.
 */

var fs = require('fs');
var oDependencies = {
    'line' : ['xy'],
    'line3d' 	: ['3d','line'],
    'area' : ['xy'],
    'area3d' : ['3d','area'],
    'vbar' : ['xy'],
    'vbar3d' : ['3d','vbar'],
    'hbar' : ['yx'],
    'hbar3d' : ['3d','hbar'],
    'scatter' : ['xy'],
    'bubble' : ['xy'],
    'pie' : ['r'],
    'pie3d' : ['3d','pie'],
    'nestedpie' : ['r'],
    'gauge' : ['r'],
    'vbullet' : ['vbar'],
    'hbullet' : ['hbar'],
    'vfunnel' : ['xy'],
    'hfunnel' : ['yx'],
    'piano' : ['xy'],
    'radar' : ['r'],
    'range' : ['xy'],
    'stock' : ['xy','vbar'],
    'venn' : ['r']
};

var sBuild = fs.readFileSync('../modules/zingchart-core-min.js', 'utf8');

//Obtain module list

//From command line
var aParams = (process.argv).splice(2,2);
if(aParams.length ==0){
    console.log("Please specify either a path to the cnf file or arguments of modules.")
    process.exit(1);
}

//Check if a config file was provided
if(aParams[0].indexOf('.cnf') > -1){
    var configFilePath = aParams.splice(0,1)[0];
    //From config file
    try{
        var sFile = fs.readFileSync(configFilePath, 'utf8');
        var _oModules = JSON.parse(sFile);
        aParams = aParams.concat(_oModules.modules);
    }
    catch(e){
        console.log("Error: No config file found");
    }
}

//Inject dependencies, using an object
var oModules = {};
for(var i =0; i < aParams.length; i ++){
    oModules[aParams[i]] = "";
    if(oDependencies[aParams[i]]){
        for(var k=0; k < oDependencies[aParams[i]].length; k++){
            oModules[oDependencies[aParams[i]][k]] = "";
        }
    }
}

//Convert object to array
var aModules = [];
for(var key in oModules){
    aModules.push(key);
}
var sModules = JSON.stringify({modules : aModules});

//Read each file, and append it to the
for(var file = 0; file< aModules.length; file++){
    try{
        var sFile = fs.readFileSync('../modules/zingchart-'+aModules[file]+'.min.js', 'utf8');
        var startPos = sFile.indexOf('*/');
        if(startPos > -1){
            //Extract file header comments
            sBuild += sFile.substring(startPos+2);
        }
        else{
            sBuild += sFile;
        }
    }
    catch(e){
        console.log("Error: No such module " + aModules[file]);
        process.exit(1);
    }
}


fs.writeFileSync('zingchart.min.js', sBuild);
fs.writeFileSync('zingchart.cnf', sModules);

console.log("ZingChart custom build completed")

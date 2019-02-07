
let mo = require('./zodiacQuestion.js');

mo.zodiac();

var dateb = []

function ask(i){
    process.stdout.write( zodiacQ[i] )
}

process.stdin.on('data' , function(data){
    dateb.push(data.toString().trim())
    if(dateb.length <2 ){
        ask(dateb.length)
    }
    else{
        process.exit()
    }
  
})

process.on('exit',function(){
    console.log('\n\n----------------------------------------------------------\n')
    if(dateb[0]<32 && dateb[0]>0 && dateb[1]==1 || dateb[1]=='January'){
        console.log("You are Capricornus.")
    }
    else if(dateb[0]<29 && dateb[0]>0 && dateb[1]==2 || dateb[1]=='February'){
        console.log("You are Aquarius.")
    }
    else if(dateb[0]<32 && dateb[0]>0 && dateb[1]==3 || dateb[1]=='March'){
        console.log("You are Pisces.")
    }
    else if(dateb[0]<31 && dateb[0]>0 && dateb[1]==4 || dateb[1]=='April'){
        console.log("You are Arius.")
    }
    else if(dateb[0]<32 && dateb[0]>0 && dateb[1]==5 || dateb[1]=='May'){
        console.log("You are Taurus.")
    }
    else if(dateb[0]<31 && dateb[0]>0 && dateb[1]==6 || dateb[1]=='June'){
        console.log("You are Gemini.")
    }
    else if(dateb[0]<32 && dateb[0]>0 && dateb[1]==7 || dateb[1]=='July'){
        console.log("You are Cancer.")
    }
    else if(dateb[0]<32 && dateb[0]>0 && dateb[1]==8 || dateb[1]=='August'){
        console.log("You are Leo.")
    }
    else if(dateb[0]<31 && dateb[0]>0 && dateb[1]==9 || dateb[1]=='September'){
        console.log("You are Virgo.")
    }
    else if(dateb[0]<32 && dateb[0]>0 && dateb[1]==10 || dateb[1]=='October'){
        console.log("You are Libra.")
    }
    else if(dateb[0]<31 && dateb[0]>0 && dateb[1]==11 || dateb[1]=='November'){
        console.log("You are Scorpius.")
    }
    else if(dateb[0]<32 && dateb[0]>0 && dateb[1]==12 || dateb[1]=='December'){
        console.log("You are Sagittarius.")
    }
    else{
        console.log("Sorry, You have wrong input.")
    }
    console.log('\n----------------------------------------------------------\n')
})
ask(0)

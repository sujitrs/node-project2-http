const http = require('http');
const PORT=5000;
const myLife={
    "mychikumama":"sanjana",
    "mygodumama":"shruti",
    "myloveoflife":"arti"
}

const server = http.createServer((req,res)=>{ 
    let {method,url}=req;
    let code=404;
    let response={
        success:false,
        data:null
    }
    

    if(method==='GET' && url==='/life'){
        response.success=true;
        response.data=myLife;
        code=200;
    }
    res.writeHead(code,{'Content-Type':'application/json'});
    res.end(JSON.stringify({
        response
    }));
  
    
// Writing Header
    
// Writing Response
    

});


server.listen(PORT,()=>console.log(`Server running on ${PORT}`));

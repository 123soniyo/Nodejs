const http = require('http')

const server=http.createServer((req,res)=>{
    // console.log(req.url,req.method,req.headers)
    const url = req.url;
    if(url ==='/home'){
       res.write('<html><h1>Welcome Home</h1></html>') 
    }
    else if(url ==='/about'){
       res.write('<html><h1> Welcome to About Us page</h1></html>') 
    }
    else if(url ==='/node'){
       res.write('<html><h1>Welcome to my Node Js project</h1></html>') 
    }


    // ++++++ send a response +++++++++++
    // res.setHeader('content-type','text')
    // res.write('welcome to my first server')

    // res.setHeader('content-type','text/html')
    // res.write('<html>')
    // res.write('<body><h1>Welcome To My Node.js Server!! </h1></body>')
    // res.write('</html>')
    // res.end();

    // console.log("My Name is Shruti!!")
    // process.exit();
   


})

server.listen(4000);



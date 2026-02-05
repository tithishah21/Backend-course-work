const fs = require('fs');
const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    //to return a greeting text to /
    if(url==='/'){
        res.setHeader('Content-Type','text/html'); 
        res.write('<html>');
        res.write('<head><title>Greetings!!!</title></head>');
        res.write('<body>Many many happy returns fo the day dear! <form action="create-user" method="POST">username: <input type="text" name="username"> <button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end(); 
    }
    if(url==='/users'){
        req.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>List of dummy users</title></head>');
        res.write('<body><ul> <li>User 1</li> <li>User 2</li> <li>User 3</li> </ul></body>');
        res.write('</html>');
        return res.end(); 
    }
    if (url==='/create-user' && method==='POST'){
        const body = []; //request body that we're working with , an array
        req.on('data', (chunk)=> {
            console.log(chunk); // to see what's inside ths chunk
            body.push(chunk); //pushes the chunk of data into the body array to be executed
        });
    
        //now to be able to work with the chunk we need to buffer them
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString(); //add all chunks from body to it
            //converted to string
            console.log(parsedBody); 
            const message = parsedBody.split('=')[1];
            fs.writeFile('practice_message.txt', message, (err) => {
                // AFTER file is written → redirect
                res.statusCode = 302; //status code 302 stands for redirection
                res.setHeader('Location', '/');
                return res.end(); // so that we don't exeute the below lines
            });
        });  
    }
}; 

module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
};

//creating httpserver:

const http = require('http');

http.createServer((req, res) => {
    // res.writeHead(200,{'content-Type':'text/html'});//(200 is the status ,{} inside curly bracis there is )
    if (req.url === "/") {
        res.write(`
            <h1>HTTP - Server :</h1>
            <div>I Added Route To This Server ... You Can Try</div>
            <h5>By following below Steps:</h5>
            <ul>
              <li>"Localhost:8080/<b>home</b> "- <strong>Redirect to Home-Page</strong></li><br/>
              <li>"Localhost:8080/<b>about</b> "- <strong>Redirect to About-page</strong></li>
            </ul><br/>
            <h4>NODE-JS:</h4>
            <ol>
               <li>Node is Not a Library or a FrameWork</li><br/>
               <li>Node is an <b>run time Environment</b></li></br>
               <li>we can say Node is an <strong>Extended(Advanced) Version of JavaScript</strong></li><br/>
               <li><strong>Node-Js is a stand alone programing language.</strong></li><br/>
               <li>NodeJs also created based on V8 engine</li>
            </ol>
            `)
        res.end();
    }
    else if (req.method === 'GET' && req.url === '/home') {
        res.write('HOME_PAGE');
        res.write(JSON.stringify([1, 2, 3, 4, 5, 6]));
        res.end();
    }
    else if (req.method === 'GET' && req.url === '/about') {
        res.write('ABOUT_PAGE')
        res.write(JSON.stringify([
            {
                "name": "name",
                "id": "32431413",
                "course": "MERN",
                "batch": "EA28",
                "place": "Mumbai"
            }
        ]))
        res.end();
    }
}).listen(8080)//port number
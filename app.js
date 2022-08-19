var express = require('express');
var app = express();
const email = require('node-email-extractor').default;
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const got = (...args) => import('got').then(({default: got}) => got(...args)); 
let xxxxx = [],linkacze = [], awesomes = [];
const router = express.Router();
var validator = require("node-email-validation");



list = require('request').Request; // see  template
app.use(express.static('./'));
app.use(bodyParser.urlencoded({extended: true}));
let port = process.env.PORT || 80
app.listen(port);


let url;
app.post('/request', function (req, res) {
    const extractLinks = async (url) => {
        try {
          // Fetching HTML
          const response = await got(url);
          const html = response.body;
      
          // Using cheerio to extract <a> tags
          const $ = cheerio.load(html);
      
          const linkObjects = $('a');
          // this is a mass object, not an array
      
          // Collect the "href" and "title" of each link and add them to an array
          const links = [];
          linkObjects.each((index, element) => {
            links.push($(element).attr('href'));
          });
          linkacze = links;
          // do something else here with these links, such as writing to a file or saving them to your database
        } catch (error) {
          console.log(error.response.body);
        }
      };
    console.log(req.body.a);
    url = "";
    url = req.body.a;
    const axios = require('axios');
    let ccc = [];
    let final = [];
    let mika = 0;
    let kaka = 0;
    let tennumer = 999999999;
    let menisa = 0;
    extractLinks(url);
    setTimeout(function(){ 
        linkacze.forEach(element => {
            console.log(typeof(element));
            if(typeof(element)!=='undefined'){
        if(element[0]!='/' && element[0]!='#' && element[0]!='t' && element[0]!='m' && element[0]!='['){
        (async () => {
            xxxxx = await email.url(element);
            console.log(element);
            console.log(xxxxx);
            if(xxxxx.emails!=undefined && xxxxx.emails!=['']) {
                console.log(xxxxx.emails);
                awesomes.push(xxxxx.emails);
            }
            xxxxx = [];
        })()
        
    }
    }
    })},3000);
    axios(url)
        .then(response => {
            let html = [];
            html = response.data;
            function extractEmails ( text ){
              return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
              }
               
             
            awesomes.push(extractEmails(html));
            let a = html.length;
            console.log(a);
        });
    if(1==2){
    axios(url)
        .then(response => {
            let html = [];
            html = response.data;
            function extractEmails ( text ){
              return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
              }
               
             
            console.log(extractEmails(html).join('\n'));
            let a = html.length;
            console.log(a);
            for (var i = 0; i < html.length; i++) {
                if (menisa == 0) {
                    if (html[i].indexOf('<') != -1) {
                        if (html[i + 1].indexOf('b') != -1) {
                            if (html[i + 2].indexOf('o') != -1) {
                                if (html[i + 3].indexOf('d') != -1) {
                                    kaka = 1;
                                    menisa = 1;
                                    tennumer = i;
                                }
                            }
                        }
                    }
                }

                if (kaka == 1) {
                  
                    if (tennumer < i && html[i].indexOf('@') != -1 && html[i - 1] != '\n' && html[i - 1] != '\t' && html[i - 1] != ',' && html[i - 1] != ' ' && html[i] != [0-9]) {
                        if (html[i - 1] != '"' && html[i] != ' ') {
                            for (var j = 25; j > -35; j--) {
                                if (html[i - j] != " " && html[i - j] != "," && html[i - j] != '"' && html[i - j] != '\t' && html[i - j] != '\n') 
                                    ccc.push(html[i - j]);

                                }
                            let papi = [];
                            console.log(ccc);
                            papi = ccc.join('');
                            let malpka;
                            console.log(papi.length);
                            for (let i = 0; i < papi.length; i++) {
                                if (papi[i] == '@') 
                                    malpka = i;
                                }
                            console.log(malpka);
                            final.push(papi);
                            console.log(final.length);
                            if (papi[malpka - 1] == '}' || papi[malpka - 1] == '"') 
                                final.pop();
                            console.log(final.length);
                            console.log(papi);
                            papi = [];
                            mika = mika + 1;
                            ccc = [];
                        }
                    }
                }
            }
            let finals = final;
            
            console.log(final.length);
            console.log(tennumer);
        })
        .catch(console.error);
    }

});

app.get('/request', function (req, res) {
    // run your request.js script when index.html makes the ajax call to
    // www.yoursite.com/request, this runs you can also require your request.js as a
    // module (above) and call on that:
    let mastershef = [];
    awesomes.forEach(element => {
        if(element!=null){
        if(element.length!=0){
        if(element.length>0){
            element.forEach(e=>{
                mastershef.push(e);
                
            })
        } else {
            mastershef.push(element);
            
        }
    }
}
    });
    console.log(mastershef);
    console.log('wysłane');
    res.send(mastershef); // try res.json() if getList() returns an object or array
    awesomes = [];
});


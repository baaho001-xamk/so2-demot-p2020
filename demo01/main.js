const http = require("http"); //tehdään olio joka käyttää http protokollaa
const url = require("url"); //muuttuja joka lukee selaimen urlin

const portti = 3001; //portti jota käytetään

const serveri = http.createServer((req, res) => { //luo serverin

    if (req.url != "/favicon.ico") {

        let tiedot = url.parse(req.url, true).query;
    
        let nimi = (tiedot.nimi) ? tiedot.nimi : "tuntematon";
    
        res.writeHead(200, { "Content-type" : "text/html; charset=utf-8" });
        res.write(`<h1>Demo 1: Node.js -palvelinohjelmoinnin perusteita</h1>`);
        res.write(`<h2>Heippa, ${nimi}!</h2>`);
        res.end();

    }

});

serveri.listen(portti, () => { //palvelimen käynnistyessä tulostus konsoliin
    console.log(`Palvelin käynnistyi porttiin ${portti}`);   
});

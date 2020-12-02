const express = require('express');
const ejs = require('ejs');
const cors = require('cors');

const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs);
// server.use(cors({origin: 'http://localhost:8080'}));
server.use(cors({origin: 'https://crowded-toes.surge.sh'}));

const PORT = process.env.PORT || 2357;

server.get('/', ( req , res ) => {
  res.render('home.ejs')
});

server.get('/trigonometryPart', ( req , res ) => {
  res.render('trigonometry.ejs')
});

server.get('/trigonometry', (req, res) => {
  const { trigonometry } = require('./functions/trigonometry');
  const data = trigonometry(req.query.degree);
  res.json(data)
});

server.get('/functionPart', (req, res) => {
  res.render('function.ejs');
});

server.get('/plot', (req, res) => {
  const { funPoint } = require('./functions/plot');
  const data = funPoint(req.query.xS,req.query.xL);
  res.send(data)
});

server.get('/primePart', (req, res) => {
  res.render('prime.ejs');
});

server.get('/prime', (req, res) => {
  const {IsPrime, Divisions_FM, Primes, memory} = require('./functions/prime');
  const number = Number(req.query.pCheck);
  let isPrime=0;

  if (IsPrime(number) === number && number !== 1){
    isPrime = 'prime';
  }else{
    isPrime = 'not a prime'
  };

  const data = {
    isPrime: isPrime,
    divisions: Divisions_FM(number),
    Primes: Primes(number)
  }

  res.json(data)
});

server.get('/primeCheck', (req,res) => {
  const {IsPrime} = require('./functions/prime');
  const number = Number(req.query.pCheck);

  if (IsPrime(number) === number && number !== 1){
    res.send('Prime');
  }else{
    res.send('Not a Prime');
  };
})

server.get('/primeDivisions', (req,res) => {
  const {Divisions_FM} = require('./functions/prime');
  const number = Number(req.query.pCheck);
  res.send(Divisions_FM(number));
})

server.get('/primes_to_a_number', (req,res) => {
  const {Primes} = require('./functions/prime');
  const number = Number(req.query.pCheck);
  res.send(Primes(number));
})

server.get('/primes_in_bound', (req,res) => {
  const {MakePrimeByBound} = require('./functions/prime');
  const rangeS = Number(req.query.rangeS);
  const rangeE = Number(req.query.rangeE);

  res.send(MakePrimeByBound(rangeS,rangeE));
})

server.get('/primes_is_sophie', (req,res) => {
  const {IsSophiePrime} = require('./functions/prime');
  const number = Number(req.query.pCheck);
  res.send(IsSophiePrime(number));
})

server.get('/primes_is_mersenne', (req,res) => {
  const {IsMersennePrime} = require('./functions/prime');
  const number = Number(req.query.pCheck);
  res.send(IsMersennePrime(number));
})

server.get('/primes_has_twin', (req,res) => {
  const {IsTwinPrime} = require('./functions/prime');
  const number = Number(req.query.pCheck);
  res.send(IsTwinPrime(number));
})

server.get('/primes_is_isolated', (req,res) => {
  const {IsIsolatedPrime} = require('./functions/prime');
  const number = Number(req.query.pCheck);
  res.send(IsIsolatedPrime(number));
})

server.listen(PORT, () => console.log(`
  .--------------------------------------------------.\n
  |--------------------------------------------------|\n
  |                I like Prime numbers              |\n
  |--------------------------------------------------|\n
  .--------------------------------------------------.\n
  |     The server is on http://localhost:${PORT}/      |\n
  .--------------------------------------------------.\n
`))

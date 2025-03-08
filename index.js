const express = require("express")
const app=express()
app.use(express.json());
app.get("/helloword",(req,res)=>{
    res.send('hello yanis beniken')
})
app
.use(favicon(__dirname + '/favicon.ico'))
.use(bodyParser.json())
.use(cors())

app.get("/HI",(req,res)=>{
    res.send('tu es dans hi')
})
app.get("/test",(req,res)=>{
    res.send('tu es dans test')
})

app.get("/get", (req, res) => {
    let number = "";
    for (let i = 0; i <= 100; i++) {  
        number += i + "-";
    }
    res.sendFile(__dirname+"/view/number.html");
});
app.listen(3000,()=>{
    console.log('tu travaille sur le port 3000')
})
    app.get("/Api/:number1/:number2",(req,res)=>{
        const Num1 = req.params.number1;
        const Num2 = req.params.number2;
        const totale= Number(Num1) +Number(Num2) ;
    
        res.send(` ${totale}`);
    })
    module.exports = (app) => {
        app.post('/api/pokemons', auth, (req, res) => {
          Pokemon.create(req.body)
            .then(pokemon => {
              const message = `Le pokémon ${req.body.name} a bien été crée.`
              res.json({ message, data: pokemon })
            })
            .catch(error => {
              if(error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error });
              }
              if(error instanceof UniqueConstraintError) {
                return res.status(400).json({ message: 'error.message', data: error });
              }
              const message = `Le pokémon n'a pas pu être ajouté. Réessayez dans quelques instants.`
              res.status(500).json({ message, data: error })
 
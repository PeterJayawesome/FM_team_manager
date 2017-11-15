
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var session = require('express-session');
app.listen(8000, function() {
 console.log("listening on port 8000");
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({secret: 'codingdojorocks'}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './static')));
app.use(express.static(path.join(__dirname, './public/dist')));


var PlayerSchema = new mongoose.Schema({
    name:{type:String, minlength:4, required:true},
    position:{type:String, minlength:4, required:true},
    status:{type: String, default:"Undecided"},
    game:{type:Number}
},{timestamps:true});

mongoose.model("Player",PlayerSchema);
var Player = mongoose.model('Player');

app.get('/players', function(req, res){
    Player.find({}).sort({createdAt:'desc'}).exec(function(err, players){
        if(err){
            console.log("error 1")
        }else{
            res.json(players);
        }
    })
})

app.post('/players', function(req, res){
    var player = new Player({name:req.body.name, position:req.body.position, game:Math.floor(Math.random() * 3) + 1});
    player.save(function(err){
        if(err){
            console.log("there is a error for add players.")
        }else{
            res.redirect('/players');
        }
    })
})

app.delete('/players/destroy/:id',function(req,res){
    Player.remove({_id: req.params.id}, function(err){
        if(err){
            console.log("can not delete add player.")
        }else{
            res.redirect(303,'/players');
        }
    })
})

app.get('/players/game/:id', function(req, res){
    Player.find({game: req.params.id},function(err, players){
        if(err){
            console.log("can not find game players.")
        }else{
            res.json(players);
        }
    })
})

app.put('/players/:id', function(req, res){
    Player.findOne({_id: req.params.id}, function(err, player){
        if(err){
            console.log("can not find the game player.")
        }else{
            player.status = req.body.status;
            player.save(function(err){
                if(err){
                    console.log("can not update status.")
                }else{
                    res.redirect(303,'/players');
                }
            })
        }
    })
})

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"));
});
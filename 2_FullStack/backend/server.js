import  express  from "express";

const app = express();
const port = process.env.PORT || 8081;

app.use(express.static('dist'));

// app.get('/',(req,res)=>{
//     res.send("server is ready")
// })

// get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:"a joke",
            content:"this is a joke"
        },
        {
            id:2,
            title:"a second joke",
            content:"this is a joke"
        },
        {
            id:3,
            title:"a third joke",
            content:"this is a joke"
        },
        {
            id:4,
            title:"a fourth joke",
            content:"this is a joke"
        },
        {
            id:5,
            title:"a five joke",
            content:"this is a joke"
        },
    ];
    res.send(jokes);
});


app.listen(port,()=>{
    console.log(`server listening on ${port}`);
});
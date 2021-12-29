import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 5000;

/** middleware */
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/', (request: Request, response: Response)=>{
  console.log(request.url)
  response.json({ message: `Welcome to the home page!` })
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT} 🚀`);
})

const express = require("express");
const cors = require("cors");
const Router = express.Router
const router = Router()
router.get('/', (req, res)=>{
    try {
        console.log('test')
        return res.status(200).json({hello: '5000'})
    } catch (error) {
        console.log(error)
    }
})

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

app.use('/', router);

const start = async () => {
  app.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`);
  });
};

start();

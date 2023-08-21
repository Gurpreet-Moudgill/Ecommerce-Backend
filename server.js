const epxress = require('express'); 
const connectDb = require('./config/dbConnect')
const app = epxress();
const cors = require('cors');
const dotenv = require('dotenv').config();

connectDb();
app.use(cors());
const port = process.env.PORT || 5000;
app.use(epxress.json());
app.set("view engine", "hbs")

app.use("/product", require("./routes/productRoute"));

app.use("/", require("./routes/productRoute"));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});



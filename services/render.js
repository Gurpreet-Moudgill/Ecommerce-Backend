const axios = require("axios")

exports.homeRoutes = async(req, res) => {
    const resp = await axios.get("http://localhost:8081/product/get");
    console.log(resp.data);
    
        res.render('index',{users:resp.data.products});
    
        
}
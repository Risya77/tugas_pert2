const { foods } = require("../models/");

module.exports = {
    getAllFoods: (req, res) => {
        foods.findAll()
            .then((data) => {

                res.send({
                    msg: "success",
                    status: 200,
                    data
                });
            })
            .catch((err) => {
                res.send({
                    msg: "error",
                    status: 500,
                    err,
                });
            });
    },
    postFoods : (req,res)=>{
        let{body} = req;
        foods.create(body)
        .then((data) => {
            res.status(200).send({
                msq: "success post data",
                status : 200,
                data
            })
        })
        .catch((err) => {
            res.status(500).send({
             msg:"failed post data",   
             status :500,
             err,
            });          
        });
    },
    getDataById : (req,res)=>{
        let {id} = req.params;
        foods.findOne({
            where : {id} 
        })
        .then ((data)=> {
            res.status(200).send({
                msg:"Success Get Data By Id",
                status : 200,
                data
            })
        })
        .catch ((err)=> {
            res.status(500).send({
                msg:"failed",
                status :500,
                err,
            })
        })
    },
 updateDataById : async (req, res)=>{
    let{id}=req.params;
    let{body}=req;
    const find = await foods.findOne({
        where : {id}
    })
    if(find === null){
        res.status(404).send({
            msg : "gagal memperbarui daata",
            status : 404,
            error : "data tida ditemukam"
        })
    }
    foods.update(body,{
        where : {id}
    })
    .then((data)=>{
        console.log(find);
        deleteOBJ = {...find.data, ...body};
        res.status(200).send({
            msg : "success",
            status : 200,
            deleteOBJ
        })
    })
    .catch((err)=>{
        res.status(500).send({
            msg : "gagal memperbarui data",
            status : 500,
            err,
        });
    });
},

    deleteData : async(req, res)=>{
        let {id} = req.params;

        const find = await foods.findOne({
            where : {id}
        })
        if(find === null){
            res.status(404).send({
                msg : "gagal menghapus data",
                status : 404,
                error : "data tida ditemukan"
            })
        }
        foods.destroy({
            where : {id}
        })
        .then((data)=>{
            res.status(200).send({
                msg : "success ",
                status : 200,
                find,
            });
        })
        .catch((err)=>{
            res.status(500).send({
                msg : "gagal menghapus daata",
                status : 500,
                err,
            });
        });
    }

};
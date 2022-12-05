const { Ref, Divide } = require("faunadb");
const faunadb = require("faunadb");
const secret = "secret";
const q = faunadb.query;
const client = new faunadb.Client({secret});
module.exports = async (req, res) => {
    var id = req.body.id;
    console.log("dbreq>>>>",  req.body.id)
    try{
        const dbs = await client.query(
            q.Delete(q.Ref(q.Collection("todos"), id))
        );
        res.status(200).json(dbs.data);
    } catch (error) {
        res.status(500).json({error: error.message});
        console.log("error", error)
    }
};

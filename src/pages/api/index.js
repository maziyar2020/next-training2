const Handler = (req,res) => {
    return res.status(200).json({
        users : [
            {name : 'mazi', lastName : 'moosavi'}
        ]
    })
}
 
export default Handler;
const postId = (req, res) => {
    return res.status(200).json({ postId: req.query.postId })
}

export default postId;
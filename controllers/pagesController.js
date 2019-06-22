exports.show = (req, res) => {
    // localhost:4000/ || /about || /contact
    const path = (req.path === '/') ? '/home' : req.path;

    //render the view
    res.render(`pages${path}`); // views/pages/about
};
const Team = require('../models/team');

exports.index = (req, res) => {
  Team.find()
    .then(teams => {
      res.render('teams/index', {
        teams: teams,
        title: 'Teams'
      });
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.show = (req, res) => {
  Team.findById(req.params.id)
  .then(team => {
    res.render('teams/show', {
      team: team,
      title: team.title,
    });
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};

exports.new = (req, res) => {
  res.render('teams/new', {
    title: 'Add New Team'
  });
};

exports.edit = (req, res) => {
  Team.findById(req.params.id)
  .then(team => {
    res.render('teams/edit', {
      team: team,
      title: team.title,
    });
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};

exports.create = (req, res) => {
  Team.create(req.body.team)
    .then(() => {
      res.redirect('/teams');
    })
    .catch(err => {
      console.error(`ERROR: ${err}`);
    });
};

exports.update = (req, res) => {
  Team.updateOne({
    _id: req.body.id
  }, req.body.team, {
    runValidators: true
  })
  .then(() => {
    res.redirect(`/teams/${req.body.id}`);
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};

exports.delete = (req, res) => {
  Team.deleteOne({
    _id: req.body.id
  })
  .then(() => {
    res.redirect('/teams');
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};



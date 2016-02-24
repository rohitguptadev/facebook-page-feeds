Router.route('/', function () {
    this.redirect('/social/GoTMemes');
});

Router.route('/social/:pageName', function () {
    this.render('index', {
        data: function () {
            return {
                pageName: this.params.pageName
            };
        }
    });
}, {
    name: 'index'
});
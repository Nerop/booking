(function() {

    window.App = {
        Models: {},
        Collections: {},
        Views: {}
    };

    window.template = function(id) {
        return _.template($('#' + id).html());
    };

    App.Models.User = Backbone.Model.extend({
        defaults: {
            userID: '1',
            name: 'Vladyslav',
            surname: 'Sazonov',
            login: 'qwerty',
            password: '123',
            amountOfBookings: '0'
        }
    });

    App.Collections.Users = Backbone.Collection.extend({
        model: App.Models.User
    });

    App.Collections.completeUsers = Backbone.Collection.extend({
        model: App.Models.User
    });


    App.Views.Users = Backbone.View.extend({
        tagName: 'tbody',

        //className: 'list-unstyled text-center',

        initialize: function() {
            this.collection.on('add', this.addOne, this);
        },

        render: function() {
            this.collection.each(this.addOne, this);
            return this;
        },

        addOne: function(user) {
            var userView = new App.Views.User({
                model: new App.Models.User()
            });
            this.$el.append(userView.render().el);
        },
    });

    App.Views.User = Backbone.View.extend({
        tagName: 'tr',

        //className: 'user',

        template: _.template(`<td contenteditable="true" class="user-content" name="userID"><%= userID %></td>
        <td contenteditable="true" class="user-content" name="name"><%= name %></td>
        <td contenteditable="true" class="user-content" name="surname"><%= surname %></td>
        <td contenteditable="true" class="user-content" name="login"><%= login %></td>
        <td contenteditable="true" class="user-content" name="password"><%= password %></td>
        <td contenteditable="true" class="user-content" name="amountOfBookings"><%= amountOfBookings %></td>
        <td class="text-center"> <a href="#" class="btn btn-danger btn-xs delete"><span class="glyphicon glyphicon-remove"></span> Удалить</a></td>`),

        initialize: function() {
            this.model.on('change', this.render, this);
            this.model.on('destroy', this.remove, this);
            console.log(this.model.toJSON());
        },

        events: {
            'click .delete': 'destroyUser',
            'blur .user-content': 'updateUser'
        },

        destroyUser: function() {
            this.model.destroy();
        },

        updateUser: function(evt) {
            var val = $(evt.target).html();
            var atrName = $(evt.target).attr('name');
            var map = {};
            map[atrName] = val;
            this.model.set(map);
            console.log(this.model.toJSON());

        },

        remove: function() {
            this.$el.remove();
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });


    App.Views.AddUser = Backbone.View.extend({
        el: '.btn-add',

        events: {
            'click': 'submit',
        },

        submit: function(e) {
            e.preventDefault();
            var newUserName = $(e.currentTarget).find('input[type=text]').val();
            var user = new App.Models.User({
                name: newUserName
            });
            this.collection.add(user);
        }
    });

    var usersCollection = new App.Collections.Users([]);
    var addUserView = new App.Views.AddUser({
        collection: usersCollection
    });
    usersView = new App.Views.Users({
        collection: usersCollection
    });
    $('.object-holder').append(usersView.render().el);
})();

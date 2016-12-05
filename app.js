

new Vue({


    el: '#users',

    data: {
        users: []
    },

    mounted: function () {
        this.fetchUsers();
        console.log('ready ran')
    },

    methods: {

        fetchUsers: function () {
            const usersEndpoint = 'https://jsonplaceholder.typicode.com/users';
            let users = [];
            // this.$set('events', events);
            this.$http.get(usersEndpoint)
                .then(function (users) {
                    this.users = users.body;
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    }
});
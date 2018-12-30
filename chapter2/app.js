var myapp = new Vue({
    el: '#our-app',
    data: {
        name:'Anil kumar' ,
        last: 'verma'
    },
    methods:{
        run: function(message, name, lastName){
            return 'vue js use methods:'+message+ 'name :' +name+ 'LastName :' +lastName;
        }
    }
})
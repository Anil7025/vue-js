var myapp2 = new Vue({
    el: '#newApp2',
    data: {
        author: "Anil Kumar Verma"
    },
    methods:{
        secondApp : function(){
            return "this is a second intance";
        }
    },
    computed: {
        fullName: function(){
            return this.author;
        }
    },
       
});


var myapp1 = new Vue({
    el: '#newApp1',
    data: {
        title: "This learn vue js tutorial",
        author : myapp2.author,
    },
    methods:{
        secondApp : function(){
            return "this is a first intance";
        },
        thirdApp : function(){
            return myapp2.secondApp();
        },
        accessComputedApp2: function(){
            return myapp2.fullName;
        }
    }
       
});


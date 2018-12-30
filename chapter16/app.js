var data= {
    title: "This Is my first vue js tutorial.",
    author: "Anil Kumar Verma"
};

Vue.component("akv",{
    template: "<div><p>this is the vue js Components use.This title is: {{ title }} and Author name : {{ author }} </p><p> This running method : {{ method1() }}</p> <p>computed proporty : {{ computed1 }}, <button @click='fireMe'> change text </button></p> </div>",
    data: function(){
        /* return {
            title: "This Is my first vue js tutorial.",
            author: "Anil Kumar Verma" 
        } */
        return data;
    },
    methods:{
        method1 : function(){
            return "this is vue js";
        },
        fireMe : function (){
            /* return console.log("fire me method"); */
            this.author= "Sanju";
        }
    },
    computed: {
        computed1 :function(){
            return console.log("this the simple message");
        }
    },
});

var myapp1 = new Vue({
    el: '#newApp1',
    data: {

    },
    methods:{
        
    }
       
});

var myapp2 = new Vue({
    el: '#newApp2',
    data: {

    },
    methods:{
        
    }
       
});



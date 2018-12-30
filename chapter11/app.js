var myapp = new Vue({
    el: '#newApp',
    data: {
      firstName: "",
      lastName : "",
      meter: "",
      mathe: "",
      science: "",
      english: ""
    },
    methods:{
        runme : function(){
            console.log("running");
        }
    },
    computed:{
        getfullName: function(){
            return this.firstName +"  "+ this.lastName;
        },
        converToCentimeter: function(){
            return this.meter*100;//1m = 100cm
        },
        totalSubjectMarks: function(){
            return parseInt(this.mathe) + parseInt(this.science) + parseInt(this.english);
        }
    }
    
    
});
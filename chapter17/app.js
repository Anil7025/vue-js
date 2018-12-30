var myapp1 = new Vue({
    el: '#newApp1',
    data: {
        fname: "",
        lname: "",
        cannelName: "AKV"
    },
    methods:{
        
    },
    computed: {
      fullName: {
          get: function(){ //getter function call of fullName
            return this.fname +" "+ this.lname;
          },
          set: function(){ //setter function call of fullName
              //console.log("this function is change");
              this.cannelName = "updated AKV";
          }
      }  
    }
       
});

var myapp2 = new Vue({
    el: '#newApp2',
    data: {

    },
    methods:{
        
    }
       
});



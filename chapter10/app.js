var myapp = new Vue({
    el: '#newApp',
    data: {
      charecter: "" ,
      name: "",
      email:""  
    },
    methods:{
        keypressfunction: function(){
            //console.log("Simple message");
            console.log(event);
            this.charecter = event.key;
        }
    }
    
    
})
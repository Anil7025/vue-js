var myapp1 = new Vue({
    el: '#newApp',
    data: {
        
    },
    methods:{
        btnSubmit : function(){
            //console.log("i am Clicked");
            console.log(this.$refs);
            console.log("name: "+this.$refs.txtName.value);
            console.log("email: "+this.$refs.txtEmail.value);
            console.log("paragraph: "+this.$refs.para.innerHTML);
        }
    },
    computed: {
      
    }
       
});





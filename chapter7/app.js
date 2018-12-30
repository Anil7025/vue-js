var myapp = new Vue({
    el: '#newApp',
    data: {
        
    },
    methods:{
        keypressfunction: function(event){
            //console.log("keypress...");
            console.log(event.key);

        },
        keyupfunction: function(){
            console.log("key up ...");
        },
        keydownfunction: function(event){
            console.log(event);
        }
    }
    
    
})
var myapp = new Vue({
    el: '#newApp',
    data: {
        counter : 0, 
    },
    methods:{
        incrementby1 : function(){
            this.counter++;
        },
        submitClick: function(){
            console.log("clicking");
        },
        parentClass :function(){
            console.log("parent Class...");
        },
        btnClick :function(){
            console.log('Button class...');
        }
    }
    
    
})
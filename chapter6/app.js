var myapp = new Vue({
    el: '#my-newApp',
    data: {
        x:0,
        y:0
    },
    methods : {
        movefunction: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        overfunction: function(){
            console.log('this is mouse over function represent');
        },
        outfunction: function(){
            console.log('this is mouse out function represent');
        }
    }
    
    
})
var myapp = new Vue({
    el: '#my-newApp',
    data: {
        counter: 0
    },
    methods: {
        increment: function(inc){
            //this.counter = this.counter + inc;
            this.counter += inc;
        },
        decrement: function(desc){
            //this.counter = this.counter - desc;
            this.counter -= desc;
        }
    }
    
    
})
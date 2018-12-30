var myapp = new Vue({
    el: '#newApp',
    data: {
        /* isActive: false , */
        isActive: true ,
        count: 0
    },
    methods:{
        incrementCountValue : function(){
            this.count++;
        }
    }
    
    
    
});
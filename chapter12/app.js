var myapp = new Vue({
    el: '#newApp',
    data: {
        isActive: false,
    },
    methods:{
        toggleClass: function(){
            this.isActive = !this.isActive;
        }
    }
    
    
    
});
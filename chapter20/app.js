Vue.directive('custom-directive',function(el, binding){
    console.log(el);
    console.log(binding);
    var dir_arg = binding.arg;
    if(dir_arg=="red"){
        el.style.backgroundColor="red";
        el.style.color="#fff";
        el.style.fontSize="22px";
    }
    if(dir_arg=="blue"){
        var mod = binding.modifiers.change;
        if ( mod == true ) {
            el.style.backgroundColor="orange";
            el.style.color="#fff";
            el.style.fontSize="22px";
        }else{
            el.style.backgroundColor="blue";
            el.style.color="#fff";
            el.style.fontSize="22px";
        }
        
    }
});


var myapp1 = new Vue({
    el: '#newApp',
    data : {
       channelName: "this the define vue js"
    },
    methods :{
        
    },
    computed : {
      
    }
       
});





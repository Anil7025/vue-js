Vue.directive('custom-directive',{
    bind : function(el, binding, vnode){
        console.log(el);//dom element
        el.style.backgroundColor="blue";
        el.style.fontSize="22px";
        el.style.color="#fff";
        el.title="title is now updated";
        console.log(binding);//proparti of directive
        console.log("Value ="+binding.value);
        console.log("name :"+binding.value.name);
    },
    update : function(object1, object2){
        console.log("running...");
        var data = JSON.parse(JSON.stringify(object2));
        console.log(data);
    },
    unbind : function(){

    }
});


var myapp1 = new Vue({
    el: '#newApp',
    data: {
        message : "this is custom call",
    },
    methods:{
        updateValue :function(){
            console.log("updated.....");
            this.message = "value has been Updated now."
        } 
    },
    computed: {
      
    }
       
});





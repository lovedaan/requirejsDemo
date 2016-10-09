define(function(){
    function fnMove (ev,obj,x,y) {
        
        obj.style.left = ev.clientX - x + 'px';
        obj.style.top = ev.clientY - y + 'px';

    }

    return {
        fnMove : fnMove
    };
});
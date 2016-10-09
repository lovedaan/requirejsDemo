define(function(){
    function fnUp () {
        document.onmousemove = document.onmouseup = null;
    }

    return {
        fnUp : fnUp
    };
});
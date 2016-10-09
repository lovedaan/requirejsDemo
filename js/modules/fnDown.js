define(['./fnMove','./fnUp'],function(fnMove,fnUp){
    function fnDown (obj,x,y) {
        obj.onmousedown = function (ev) {
            x = ev.clientX - obj.offsetLeft;
            y = ev.clientY - obj.offsetTop;

            document.onmousemove = function (ev) {
                const oEvent = ev || event;
                fnMove.fnMove(oEvent,obj,x,y);
            }

            document.onmouseup = function () {
                fnUp.fnUp();
            }
            return false;
        }
        
    }

    return {
        fnDown : fnDown
    };
});
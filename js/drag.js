require(['./modules/fnDown','jquery'],function(fnDown,$){
    
    const oBox = document.getElementById('box');
    let disX = 0;
    let disY = 0;
    $("#btn").click(function () {
        alert(123);
    });
    
    //调用拖拽方法
    fnDown.fnDown(oBox,disX,disY);
    
});
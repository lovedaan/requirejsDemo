require(['./modules/click'],function (aM) {
    var oBtn = document.getElementById('btn');

    oBtn.onclick = aM.clickFn;
});
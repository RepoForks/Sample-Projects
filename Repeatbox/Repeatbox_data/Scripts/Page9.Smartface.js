function Page9_RepeatBox1_OnTouch(e){
alert("onTouch is working");
}
function Page9_RepeatBox1_OnTouchEnded(e){
alert("onTocuhEnded is working");
}
function Page9_RepeatBox1_OnRowRender(e){
alert("rows: " + e.rowIndex);
}
function Page9_btnGeri11_OnPressed(e){
     Pages.Page7.show();
}

function Page8_RepeatBox1_OnShow(e){
alert("onShow is working");
}
function Page8_RepeatBox1_OnHide(e){
alert("onHide is working");
}
function Page8_RepeatBox1_OnLongTouch(e){
alert("onLongTouch is working");
}
function Page8_btnGeri11_OnPressed(e){
     Pages.Page7.show();
}
function Page8_ImageButton1_OnPressed(e){
     if(Pages.Page8.RepeatBox1.visible)
     {
          Pages.Page8.RepeatBox1.visible = false;
     }
     else{
         Pages.Page8.RepeatBox1.visible = true;
     }
}
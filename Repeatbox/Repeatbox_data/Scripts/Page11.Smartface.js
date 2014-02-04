function Page11_RepeatBox1_OnSelectedItem(e){
alert("selected item : " + this.selectedItemIndex);
}
function Page11_RepeatBox1_OnSelectionChanged(e){
alert("onSelectionChanged is working");
}
function Page11_btnGeri11_OnPressed(e){
     Pages.Page7.show();
}
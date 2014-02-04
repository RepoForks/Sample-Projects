function Page10_RepeatBox1_OnPullDown(e) {
    alert("onPullDown is working");
}
function Page10_RepeatBox1_OnPullUp(e) {
    alert("onPullup is working");
}
function Page10_RepeatBox1_OnSwipe(e) {
    alert("onSwipe is working");
}
function Page10_btnGeri11_OnPressed(e) {
    Pages.Page7.show();
}
function Page10_ImageButton1_OnPressed(e) {
    Pages.Page10.RepeatBox1.closePullItems();
}
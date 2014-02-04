function Page6_btnGeri11_OnPressed(e) {
    Pages.Page3.show();
}
var i = 1;
var x = 1;
function Page6_RepeatBox1_OnRowRender(e) {
    i++;
    x = x - 0.005;
    Pages.Page6.RepeatBox1.Image11.image = "http://smartface.org/test/image.php?width=400&height=400&it=" + i;
    if (x > 0.1) {
        Pages.Page6.RepeatBox1.Image11.alpha = x;
    } else {
        x = 1 ;
        Pages.Page6.RepeatBox1.Image11.alpha = x;
    }
}
function Global_Events_OnStart(e)
{
    changeLang(Device.language, true);
}
function openToolbar(){
       Pages.Page1.Toolbar.animate({property: 'Y', endValue: '%80', motionEase: 0, duration: 300, onFinish: function(){}});
}
function closeToolbar(){
       Pages.Page1.Toolbar.animate({property: 'Y', endValue: '%90', motionEase: 0, duration: 300, onFinish: function(){}});
}
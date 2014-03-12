function Page2_btnBack_OnPressed(e){
    Pages.back();         
}                  
function Page2_Self_OnShow(e){
    if(Device.deviceOS != "iOS")
{
// Closes the btnBack visiblity for iOS Devices.
 Pages.Page2.cntHeader.btnBack.visible = false;
}
}                         
function Page2_Self_OnKeyPress(e){
// Back key of Android to goes previous page.
    if(e.keyCode == 4 )
{
 Pages.back();
}
}
function Page2_btnShare_OnPressed(e){
// Opens the native share window for both iOS and Android Devices.
    Social.share(Pages.Page2.Container1.CopyofLabel1.text, Pages.Page2.Container1.Label1.text,function(){},function(){});

}
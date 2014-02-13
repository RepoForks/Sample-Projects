var isOpened = false;
var calcPercantage = 0;
var touchXF, touchXE, contX, contWidth;
var halfPercantage = Device.screenWidth / 2;
var calcPercantage = (Device.screenWidth - (Device.screenWidth - Pages.Page1.cntToMove.width)) / 2;
function Page1_cntToMove_OnTouchEnded(e) {                           //calculates the percentage to decide the menu should be opened or not.
    Pages.Page1.Timer1.active = false;
    if ((Pages.Page1.cntToMove.left + Pages.Page1.cntToMove.width) > halfPercantage) {
        Pages.Page1.cntToMove.animate({
            property : 'X',
            endValue : '0%',
            motionEase : SMF.UI.MotionEase.decelerating,
            duration : '300',
            OnFinish : function () {
                isOpened = true;
            }
        });                                 
Pages.Page1.imgMenu.animate({
            property : 'X',
            endValue : '82%',
            motionEase : SMF.UI.MotionEase.decelerating,
            duration : '300',
            OnFinish : function () {
                isOpened = true;
            }
        });
    } else {
        Pages.Page1.cntToMove.animate({
            property : 'X',
            endValue : '-79%',
            motionEase : SMF.UI.MotionEase.decelerating,
            duration : '300',
            OnFinish : function () {
                isOpened = false;
            }
        });
Pages.Page1.imgMenu.animate({
            property : 'X',
            endValue : '2%',
            motionEase : SMF.UI.MotionEase.decelerating,
            duration : '300',
            OnFinish : function () {
                isOpened = false;
            }
        });
    }
}
function Page1_cntToMove_OnTouch(e) {                    // makes the timer active to calculates touched points so the menu can be moved.
    Pages.Page1.Timer1.active = true;
    touchXF = Device.touchX;
    contX = Pages.Page1.cntToMove.left;
    imgX = Pages.Page1.imgMenu.left;
}
function Page1_Timer1_OnTimer(e) {                // calculates the differences of touched points.
    touchXE = Device.touchX;
    var cTouchX = touchXE - touchXF;
    if (cTouchX > 0) {
        if (Pages.Page1.cntToMove.left < 0) {
            Pages.Page1.cntToMove.left = contX + cTouchX;
            Pages.Page1.imgMenu.left = imgX + cTouchX;
        }
    } else {
        calcPercantage = -2 * calcPercantage;
        if (Pages.Page1.cntToMove.left < calcPercantage) {
            Pages.Page1.cntToMove.left = contX + cTouchX;
            Pages.Page1.imgMenu.left = imgX + cTouchX;
        }
    }
}
function Page1_Self_OnShow(e) {
    contWidth = Pages.Page1.cntToMove.width;
}
function Page1_Label5_OnTouchEnded(e){                // closes the menu.
    if (isOpened) {
        Pages.Page1.cntToMove.animate({
            property : 'X',
            endValue : '-79%',
            motionEase : SMF.UI.MotionEase.decelerating,
            duration : '300',
            OnFinish : function () {
                isOpened = false;
            }
        });
        Pages.Page1.imgMenu.animate({
            property : 'X',
            endValue : '2%',
            motionEase : SMF.UI.MotionEase.decelerating,
            duration : '300',
            OnFinish : function () {
                isOpened = false;
            }
        });
    }
}
function Page1_imgMenu_OnTouchEnded(e){
animteObjects(selectAnimation);
}
function Page1_Self_OnKeyPress(e){
    if(e.keyCode==4)
{
    if(isOpened)
{
       animteObjects(selectAnimation);
}
}
}
function Page1_btnAccelarate_OnPressed(e){
 selectAnimation ='accelarate' ;
   animteObjects(selectAnimation);
}
function Page1_btnBounce_OnPressed(e){
   selectAnimation ='bounce' ;
   animteObjects(selectAnimation);
}
function Page1_btnDecelarate_OnPressed(e){
     selectAnimation ='decelarate' ;
   animteObjects(selectAnimation);
}
function Page1_btnPlain_OnPressed(e){
      selectAnimation ='plain' ;
   animteObjects(selectAnimation);
}
function Page1_btnSllowingAfter_OnPressed(e){
     selectAnimation ='slowingAfter' ;
   animteObjects(selectAnimation);
}


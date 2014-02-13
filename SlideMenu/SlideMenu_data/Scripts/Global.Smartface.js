var selectAnimation =  'accelarate';     //variable for selected animation.
//functşon of animations.
function animteObjects(selectAnimation) {
Device.vibrate(500);
Pages.Page1.lblInfo.text = "Active Animation is '" + selectAnimation + "'";
    switch (selectAnimation) {
    case 'accelarate':
        if (isOpened) {
        Pages.Page1.cntToMove.animate({               //         http://docs.smartface.io/?topic=html/M_Documentation_Control_animate.htm
            property : 'X',
            endValue : '-79%',
            motionEase : SMF.UI.MotionEase.accelerating,
            duration : '300',
            OnFinish : function () {
                isOpened = false;
            }
        });
        Pages.Page1.imgMenu.animate({
            property : 'X',
            endValue : '2%',
            motionEase : SMF.UI.MotionEase.accelerating,
            duration : '300',
            OnFinish : function () {
                isOpened = false;
            }
        });
    } else {
        Pages.Page1.cntToMove.animate({
            property : 'X',
            endValue : '0%',
            motionEase : SMF.UI.MotionEase.accelerating,
            duration : '300',
            OnFinish : function () {
                isOpened = true;
            }
        });
        Pages.Page1.imgMenu.animate({
            property : 'X',
            endValue : '82%',
            motionEase : SMF.UI.MotionEase.accelerating,
            duration : '300',
            OnFinish : function () {
                isOpened = true;
            }
        });
    }
break;
    case 'decelarate':
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
    } else {
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
    }
break;
    case 'slowingAfter':
        if (isOpened) {
        Pages.Page1.cntToMove.animate({
            property : 'X',
            endValue : '-79%',
            motionEase : SMF.UI.MotionEase.accelerateAndDecelerate,
            duration : '300',
            OnFinish : function () {
                isOpened = false;
            }
        });
        Pages.Page1.imgMenu.animate({
            property : 'X',
            endValue : '2%',
            motionEase : SMF.UI.MotionEase.accelerateAndDecelerate,
            duration : '300',
            OnFinish : function () {
                isOpened = false;
            }
        });
    } else {
        Pages.Page1.cntToMove.animate({
            property : 'X',
            endValue : '0%',
            motionEase : SMF.UI.MotionEase.accelerateAndDecelerate,
            duration : '300',
            OnFinish : function () {
                isOpened = true;
            }
        });
        Pages.Page1.imgMenu.animate({
            property : 'X',
            endValue : '82%',
            motionEase : SMF.UI.MotionEase.accelerateAndDecelerate,
            duration : '300',
            OnFinish : function () {
                isOpened = true;
            }
        });
    }
break;
    case 'bounce':
        if (isOpened) {
        Pages.Page1.cntToMove.animate({
            property : 'X',
            endValue : '-79%',
            motionEase : SMF.UI.MotionEase.bounce,
            duration : '1000',
            OnFinish : function () {
                isOpened = false;
            }
        });
        Pages.Page1.imgMenu.animate({
            property : 'X',
            endValue : '2%',
            motionEase : SMF.UI.MotionEase.bounce,
            duration : '1000',
            OnFinish : function () {
                isOpened = false;
            }
        });
    } else {
        Pages.Page1.cntToMove.animate({
            property : 'X',
            endValue : '0%',
            motionEase : SMF.UI.MotionEase.bounce,
            duration : '1000',
            OnFinish : function () {
                isOpened = true;
            }
        });
        Pages.Page1.imgMenu.animate({
            property : 'X',
            endValue : '82%',
            motionEase : SMF.UI.MotionEase.bounce,
            duration : '1000',
            OnFinish : function () {
                isOpened = true;
            }
        });
    }
break;
    case 'plain':
        if (isOpened) {
        Pages.Page1.cntToMove.animate({
            property : 'X',
            endValue : '-79%',
            motionEase : SMF.UI.MotionEase.plain,
            duration : '300',
            OnFinish : function () {
                isOpened = false;
            }
        });
        Pages.Page1.imgMenu.animate({
            property : 'X',
            endValue : '2%',
            motionEase : SMF.UI.MotionEase.plain,
            duration : '300',
            OnFinish : function () {
                isOpened = false;
            }
        });
    } else {
        Pages.Page1.cntToMove.animate({
            property : 'X',
            endValue : '0%',
            motionEase : SMF.UI.MotionEase.plain,
            duration : '300',
            OnFinish : function () {
                isOpened = true;
            }
        });
        Pages.Page1.imgMenu.animate({
            property : 'X',
            endValue : '82%',
            motionEase : SMF.UI.MotionEase.plain,
            duration : '300',
            OnFinish : function () {
                isOpened = true;
            }
        });
    }
break;
}
}
function Global_Events_OnStart(e) {
    changeLang(Device.language, true);
}
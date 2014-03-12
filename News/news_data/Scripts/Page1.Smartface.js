function Page1_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
function Page1_Self_OnShow(e) {
//swipe for iOS , longTouch for Android allows user to delete a row.
Pages.Page1.rptNews.allowDeletingItems = true;
//Changes the Statusbar color for iOS 7 devices.
    SMF.UI.StatusBar.color = "#2d3e50";
    if (Device.deviceOS != 'iOS') {
        //Sets the repeatBox height for Android Devices. Because, Statusbar height is changable for Android devices.
        Pages.Page1.rptNews.height = Pages.Page1.rptNews.height + Device.statusBarHeight;
    }
}

function Page1_rptNews_OnSelectedItem(e) {
//Sets the active row.
    Data.Dataset.seek(e.rowIndex);
//Asssigns the contents to the detail page.
    Pages.Page2.Container1.Image2.image = resObj.news[Pages.Page1.rptNews.selectedItemIndex].image;
    Pages.Page2.Container1.Label1.text = resObj.news[Pages.Page1.rptNews.selectedItemIndex].description;
    Pages.Page2.Container1.CopyofLabel1.text = resObj.news[Pages.Page1.rptNews.selectedItemIndex].title;
    Pages.Page2.show(SMF.UI.MotionEase.accelerating, SMF.UI.TransitionEffect.rightToLeft, SMF.UI.TransitionEffectType.push, false, false);
}
function Page1_rptNews_OnRowRender(e) {

//Assigns the contents to the repeatbox.
    Data.Dataset.seek(e.rowIndex);
    Pages.Page1.rptNews.imgNews.changeAnimation = "fade";
 
        Pages.Page1.rptNews.imgNews.image = resObj.news[e.rowIndex].image;
        Pages.Page1.rptNews.lblTitle.text = resObj.news[e.rowIndex].title;
        Pages.Page1.rptNews.lblSpot.text = resObj.news[e.rowIndex].spot;
   
}

function Page1_rptNews_OnPullUp(e) {
//When the user pullUp the repeatBox it runs the webCLient again for updated news.
    newsLength++;
    if (newsLength <= 2) {
        SMF.Net.WebClient.run(true);
    } else {
        Pages.Page1.rptNews.closePullItems();        
    }
 
}

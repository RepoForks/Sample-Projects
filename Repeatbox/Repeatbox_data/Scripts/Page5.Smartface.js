var layout = ["absolute", "linear", "flow"];
var orientationLinear = ["horizontal", "vertical"];
var orientationFlow = ["leftToRight"];
var horizontalalignment = ["left", "right", "center", "justified"];
var verticalalignment = ["top", "bottom", "center", "justified"];
var style = ["plain", "grouped"];
var edge = [0,1,2,3,4,5,6,7];
function Page5_btnGeri1_OnPressed(e) {
    Pages.Page1.show();
}
function Page5_edtWidth_OnExit(e) {
    Pages.Page5.RepeatBox1.width = Pages.Page5.Scrollview1.edtWidth.text;
}
function Page5_edtHeight_OnExit(e) {
    Pages.Page5.RepeatBox1.height = Pages.Page5.Scrollview1.edtHeight.text;
}
function Page5_edtXPosition_OnExit(e) {
    Pages.Page5.RepeatBox1.left = Pages.Page5.Scrollview1.edtXPosition.text;
}
function Page5_edtYPosition_OnExit(e) {
    Pages.Page5.RepeatBox1.top = Pages.Page5.Scrollview1.edtYPosition.text;
}
function Page5_btnVisible_OnPressed(e) {
    if (Pages.Page5.RepeatBox1.visible) {
        Pages.Page5.RepeatBox1.visible = false;
        Pages.Page5.Scrollview1.btnVisible.text = "Visible is inactive";
    } else {
        Pages.Page5.RepeatBox1.visible = true;
        Pages.Page5.Scrollview1.btnVisible.text = "Visible is active";
    }
}
function Page5_btnTouchEnabled_OnPressed(e) {
    if (Pages.Page5.RepeatBox1.touchEnabled) {
        Pages.Page5.RepeatBox1.touchEnabled = false;
        Pages.Page5.Scrollview1.btnTouchEnabled.text = "Touch Enabled is inactive";
    } else {
        Pages.Page5.RepeatBox1.touchEnabled = true;
        Pages.Page5.Scrollview1.btnTouchEnabled.text = "Touch Enabled is active";
    }
}
function Page5_btnBackgroundTransparent_OnPressed(e) {
    if (Pages.Page5.RepeatBox1.backgroundTransparent) {
        Pages.Page5.RepeatBox1.backgroundTransparent = false;
        Pages.Page5.Scrollview1.btnBackgroundTransparent.text = "Background Transparent is inactive";
    } else {
        Pages.Page5.RepeatBox1.backgroundTransparent = true;
        Pages.Page5.Scrollview1.btnBackgroundTransparent.text = "Background Transparent is active";
    }
}
function Page5_btnShowHeader_OnPressed(e) {
    if (Pages.Page5.RepeatBox1.showHeader) {
        Pages.Page5.RepeatBox1.showHeader = false;
        Pages.Page5.Scrollview1.btnShowHeader.text = "Show Header is inactive";
        Pages.Page5.Scrollview1.btnScrollHeader.touchEnabled = false;
    } else {
        Pages.Page5.RepeatBox1.showHeader = true;
        Pages.Page5.Scrollview1.btnShowHeader.text = "Show Header is active";
        Pages.Page5.Scrollview1.btnScrollHeader.touchEnabled = true;
    }
}
function Page5_btnScrollHeader_OnPressed(e) {
    if (Pages.Page5.RepeatBox1.scrollHeader) {
        Pages.Page5.RepeatBox1.scrollHeader = false;
        Pages.Page5.Scrollview1.btnScrollHeader.text = "Scroll Header is inactive";
    } else {
        Pages.Page5.RepeatBox1.scrollHeader = true;
        Pages.Page5.Scrollview1.btnScrollHeader.text = "Scroll Header is active";
    }
}
function Page5_edtBackgroumdImage_OnExit(e) {
    Pages.Page5.RepeatBox1.inactiveItemTemplate.backgroundImage = Pages.Page5.Scrollview1.edtBackgroumdImage.text;
}
function Page5_edtBorderColor_OnExit(e) {
    Pages.Page5.RepeatBox1.borderColor = Pages.Page5.Scrollview1.edtBorderColor.text;
}
function Page5_edtBorderWidth_OnExit(e) {
    Pages.Page5.RepeatBox1.borderWidth = Number(Pages.Page5.Scrollview1.edtBorderWidth.text);
}
function Page5_btnLayout_OnPressed(e) {
    pick(
        layout,
        function (e) {
        Pages.Page5.RepeatBox1.layoutType = "SMF.UI.LayoutType." + layout[e.index];
    },
        function () {},
        function () {});
    alert(Pages.Page5.RepeatBox1.layoutType);
}
function Page5_btnOrientation_OnPressed(e) {
    if (Pages.Page5.RepeatBox1.layoutType = 1) {
        pick(
            orientationLinear,
            function (e) {
            Pages.Page5.RepeatBox1.orientation = "SMF.UI.Orientation." + orientationLinear[e.index];
        },
            function () {},
            function () {});
        alert(Pages.Page5.RepeatBox1.orientation);
    } else if (Pages.Page5.RepeatBox1.layoutType = 2) {
        alert("flow");
        pick(
            orientationFlow,
            function (e) {
            Pages.Page5.RepeatBox1.orientation = "SMF.UI.Orientation." + orientationFlow[e.index];
        },
            function () {},
            function () {});
    }
}
function Page5_btnAlignment_OnPressed(e) {
    if (Pages.Page5.RepeatBox1.orientation = 0) {
        pick(
            horizontalalignment,
            function () {
            Pages.Page5.RepeatBox1.alignment = "SMF.UI.Alignment." + horizontalalignment[e.index];
        },
            function () {},
            function () {});
    }
    if (Pages.Page5.RepeatBox1.orientation = 1) {
        pick(
            verticalalignment,
            function () {
            Pages.Page5.RepeatBox1.alignment = "SMF.UI.Alignment." + verticalalignment[e.index];
        },
            function () {},
            function () {});
    }
    alert(Pages.Page5.RepeatBox1.alignment);
}
function Page5_edtHorizontalGap_OnExit(e) {
    Pages.Page5.RepeatBox1.horizontalGap = Number(Pages.Page5.Scrollview1.edtHorizontalGap.text);
}
function Page5_edtVerticalGap_OnExit(e) {
    Pages.Page5.RepeatBox1.verticalGap = Number(Pages.Page5.Scrollview1.edtVerticalGap.text);
}
function Page5_btnPulldown_OnPressed(e) {
    if (Pages.Page5.RepeatBox1.enablePullDownToRefresh) {
        Pages.Page5.RepeatBox1.enablePullDownToRefresh = false;
        Pages.Page5.Scrollview1.btnPulldown.text = "Pull down is inactive";
    } else {
        Pages.Page5.RepeatBox1.enablePullDownToRefresh = true;
        Pages.Page5.Scrollview1.btnPulldown.text = "Pull down is active";
    }
}
function Page5_btnPullup_OnPressed(e) {
    if (Pages.Page5.RepeatBox1.enablePullUpToRefresh) {
        Pages.Page5.RepeatBox1.enablePullUpToRefresh = false;
        Pages.Page5.Scrollview1.btnPullup.text = "Pull up is inactive";
    } else {
        Pages.Page5.RepeatBox1.enablePullUpToRefresh = true;
        Pages.Page5.Scrollview1.btnPullup.text = "Pull up is active";
    }
}
function Page5_btnType_OnPressed(e) {
    alert("type = " + Pages.Page5.RepeatBox1.type);
}
function Page5_btnAutosize_OnPressed(e) {
    if (Pages.Page5.RepeatBox1.autoSize) {
        Pages.Page5.RepeatBox1.autoSize = false;
        Pages.Page5.Scrollview1.btnAutosize.text = "Autosize is inactive";
    } else {
        Pages.Page5.RepeatBox1.autoSize = true;
        Pages.Page5.Scrollview1.btnAutosize.text = "Autosize is active";
    }
}
function Page5_btnShowscrollbar_OnPressed(e) {
    if (Pages.Page5.RepeatBox1.showScrollBar) {
        Pages.Page5.RepeatBox1.showScrollBar = false;
        Pages.Page5.Scrollview1.btnShowscrollbar.text = "Show Scrollbar is inactive";
    } else {
        Pages.Page5.RepeatBox1.showScrollBar = true;
        Pages.Page5.Scrollview1.btnShowscrollbar.text = "Show Scrollbar is active";
    }
}
function Page5_btnDeletingitems_OnPressed(e) {
    if (Pages.Page5.RepeatBox1.allowDeletingItems) {
        Pages.Page5.RepeatBox1.allowDeletingItems = false;
        Pages.Page5.Scrollview1.btnDeletingitems.text = "Deleting Items is inactive";
    } else {
        Pages.Page5.RepeatBox1.allowDeletingItems = true;
        Pages.Page5.Scrollview1.btnDeletingitems.text = "Deleting Items is active";
    }
}
function Page5_btnEnableScroll_OnPressed(e) {
    if (Pages.Page5.RepeatBox1.enableScroll) {
        Pages.Page5.RepeatBox1.enableScroll = false;
        Pages.Page5.Scrollview1.btnEnableScroll.text = "Enable Scroll is inactive";
    } else {
        Pages.Page5.RepeatBox1.enableScroll = true;
        Pages.Page5.Scrollview1.btnEnableScroll.text = "Enable Scroll is active";
    }

}
function Page5_btnGroupitems_OnPressed(e) {
    if (Pages.Page5.RepeatBox1.groupItems) {
        Pages.Page5.RepeatBox1.groupItems = false;
        Pages.Page5.Scrollview1.btnGroupitems.text = "Group Items is inactive";
        Pages.Page5.Scrollview1.btnGroupStyle.touchEnabled = false;
        Pages.Page5.Scrollview1.edtGroupingData.touchEnabled = false;
    } else {
        Pages.Page5.RepeatBox1.groupItems = true;
        Pages.Page5.Scrollview1.btnGroupitems.text = "Group Items is active";
        Pages.Page5.Scrollview1.btnGroupStyle.touchEnabled = true;
        Pages.Page5.Scrollview1.edtGroupingData.touchEnabled = true;
    }
}
function Page5_btnGroupStyle_OnPressed(e) {
    pick(
        style,
        function () {
        Pages.Page5.RepeatBox1.groupStyle = "SMF.UI.RepeatBoxGroupStyle." + style[e.index];
    },
        function () {},
        function () {});
}
function Page5_edtGroupingData_OnExit(e) {
    Pages.Page5.RepeatBox1.groupingDataField = Pages.Page5.Scrollview1.edtGroupingData.text;
}               
function Page5_btnName_OnPressed(e) {
    alert("name = " + Pages.Page5.RepeatBox1.name);
}
function Page5_btnCount_OnPressed(e) {
    alert("count = " + Pages.Page5.RepeatBox1.count);
}
function Page5_ImageButton3_OnPressed(e) {
    Pages.Page5.RepeatBox1.reset();
}
function Page5_edtFillColor_OnExit(e){
     Pages.Page5.RepeatBox1.inactiveItemTemplate.fillColor = Pages.Page5.Scrollview1.edtFillColor.text;
}
function Page5_btnEdge_OnPressed(e){
     pick(
     edge,
     function(e){ Pages.Page5.RepeatBox1.roundedEdge = edge[e.index]; },
     function(){},
     function(){}
     );
}


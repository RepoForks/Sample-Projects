var imageToProcess;
var iUri;
function Page1_Self_OnKeyPress(e) {
    if (e.keyCode === 4) {
        Application.exit();
    }
}
function Page1_TextButton1_OnPressed(e) {}
function Page1_TextButton2_OnPressed(e) {
    try {
        KOFAX.openCaptureScreen({
            options : {
                stabilityDelay : 50,
                levelIndicator : true,
                doContinuousMode : false,
                setPageDetect : false,
                levelThresholdPitch : 20,
                levelThresholdRoll : 20,
                deviceDeclinationPitch : 7,
                deviceDeclinationRoll : 7,
                flash : 1, // 0 on 1 off 2 auto
                 showFlashControl : false,
                 //overlayImage:"default_androidicon.png"
            },
            onCapture : function (e) {
                Pages.Page1.Image1.image = e.photoUri;
                // or
                iUri = e.photoUri;
                Pages.Page1.ActivityIndicator1.visible = false;
            },
            onCancel : function (e) {
                alert("Cancelled");
            },
            onError : function (e) {
                alert('error: ' + e.message);
                Pages.Page1.ActivityIndicator1.visible = false;
            }
        });
    } catch (ex) {
        alert(ex);
    }
}
function Page1_TextButton3_OnPressed(e) {
    Pages.Page1.ActivityIndicator1.visible = true;
    try {
        KOFAX.processImage({
            image : iUri,
        imagePerfectionProfile : "_DeviceType_2_DoSkewCorrectionAlt__DoCropCorrection__Do90DegreeRotation_4_DoBinarization__DoScaleBWImageToDPI_150__DoSharpen_4",
//imagePerfectionProfile : "_DeviceType_2_DoSkewCorrectionAlt__DoCropCorrection_",
            onSuccess : function (e) {
                try {
                    Pages.Page1.Image1.image = e.photoUri;
                    // or
                    // processedImage = new SMF.Image(e.photoUri);
                    // alert("width: " + e.imageWidth + " height: " + e.imageHeight);
                    alert("metadata json string: " + JSON.stringify(e.metaData));
                    Pages.Page1.ActivityIndicator1.visible = false;
                } catch (ex) {
                    alert(ex);
                }
                // parse json here, metadata includes height, width, dpi, textlines, ocr data etc. values
            },
            onError : function (e) {
                alert('error: ' + e.message);
                Pages.Page1.ActivityIndicator1.visible = false;
            }
        });
    } catch (ex) {
        alert(ex);
    }
}
function Page1_Self_OnShow(e) {
    KOFAX.setSDKLicense("GUlvk=F&cmU0cLn#h&x!4E!6qI,&t#LxD6lPD0(U8H8vAk$5N[fjr,Il^BgO?K7!fW!T9!2N!t8@40D,bp[dFDTJ[fPFvvvzP;dz");
}
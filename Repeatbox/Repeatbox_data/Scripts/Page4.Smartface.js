var layout = ["absolute","linear","flow"];
var orientationLinear = ["horizontal","vertical"];
var orientationFlow = ["leftToRight"];
var horizontalalignment = ["left","right","center","justified"];
var verticalalignment = ["top","bottom","center","justified"];
alert(Pages.Page4.RepeatBox1.alignment);
SMF.UI.RepeatBoxGroupStyle
function Page4_btnLayout_OnPressed(e){
pick(
    layout,
    function(e){ Pages.Page4.RepeatBox1.layoutType = e.index; },
    function(){},
    function(){}
);
alert(Pages.Page4.RepeatBox1.layoutType);
}
function Page4_btnOrientation_OnPressed(e){
if(Pages.Page4.RepeatBox1.layoutType == 1)
{
    pick(
        orientationLinear,
        function(e){ Pages.Page4.RepeatBox1.orientation = e.index; },
        function(){},
        function(){}
    );
    alert
}
if( Pages.Page4.RepeatBox1.layoutType == 2 )
{
    pick(
        orientationFlow,
        function(e){ Pages.Page4.RepeatBox1.orientation = 1; },
        function(){},
        function(){}
    );
}
alert(Pages.Page4.RepeatBox1.orientation);
}
function Page4_btnAlignment_OnPressed(e){
if( Pages.Page4.RepeatBox1.orientation == SMF.UI.Orientation.horizontal )
{
    pick(
        horizontalalignment,
        function(e){ Pages.Page4.RepeatBox1.alignment = 1; },
        function(){},
        function(){}
    );
    alert("horizontal");
}
if( Pages.Page4.RepeatBox1.orientation == SMF.UI.Orientation.vertical )
{
    pick(
        verticalalignment,
        function(e){ Pages.Page4.RepeatBox1.alignment = 1; },
        function(){},
        function(){}
    );
    alert("vertical");
}
if( Pages.Page4.RepeatBox1.orientation == SMF.UI.Orientation.leftToRight )
{
    pick(
        horizontalalignment,
        function(e){ Pages.Page4.RepeatBox1.alignment = 1; },
        function(){},
        function(){}
    );
    alert("flow");
}
}
var resObj = NULL;
var row = NULL;
function Global_Events_OnStart(e) {
    changeLang(Device.language, true);
    //define the length of the news initially.
    newsLength = 0;
    //clears the dataset to get new ones.
    Data.Dataset.clear();
    //runs the JSON WebClient to fetch the news.
    SMF.Net.WebClient.run(true);
}
function arrangeDataset() {
//Arranging Dataset to create rows for repeatBox object.
    var i;
    for (i = 0; i < 10; i++) {
        Data.Dataset.add();
        Data.Dataset.commit();
    }
}

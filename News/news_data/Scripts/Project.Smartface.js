function Project_WebClient_OnSyndicationSuccess(e){
//When the JSON object is fetched, parses the json for repeatbox objects.
    resObj = JSON.parse(SMF.Net.WebClient.responseText);
 arrangeDataset();
}
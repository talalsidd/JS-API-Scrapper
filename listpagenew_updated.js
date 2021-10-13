window.mainurls = ['Your Zillow API urls here']
window.totalpages = 25;
window._jsonData = null;
//window._jsonData = {};
var FailedFetchRequests = [];
window.jsondata = '';
window.jsondata2 = '';
window.purls = [];
window.alldata = ['Headers here'];
window.maindata = []


window.allurls = [];


for (var urlloop = 0; urlloop < window.mainurls.length  ; urlloop++){
		var caturl1 = window.mainurls[urlloop].replace(/.*currentPage%22%3A\d+/,'')
		var caturl2 = window.mainurls[urlloop].replace(/\d+%7D%2C%22usersSearchTerm.*/,'')
		window.Refferer = window.location.href

		var linkslooper = 0;
		for (linkslooper = 0; linkslooper < window.totalpages; linkslooper++){
			window.allurls.push(caturl2 + linkslooper + caturl1);
		}
}


for (var linkslooper = 0; linkslooper < window.allurls.length; linkslooper++){
	doSetTimeout(linkslooper,window.allurls[linkslooper]);
}


function doSetTimeout(linkslooper,currenturl) {
			setTimeout(function() {
				fetchRequestfunction(linkslooper,currenturl);
			}, linkslooper*1500);
		}


fetchRequestfunction = function(linkslooper,currenturl) {
			fetch(currenturl, {
			"headers": {
			"accept": "*/*",
			"accept-language": "en-US,en;q=0.9",
			"sec-ch-ua": "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"",
			"sec-ch-ua-mobile": "?0",
			"sec-ch-ua-platform": "\"Windows\"",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-origin"
		  },
		  "referrer": Refferer,
		  "referrerPolicy": "unsafe-url",
		  "body": null,
		  "method": "GET",
		  "mode": "cors",
		  "credentials": "include"
		})
			.then(response => response.json())
			.then(JSONObject => {
				window.jsondata = JSONObject;
			})
				.then(function() {
                    try{
                        for (var i = 0 ; i < window.jsondata.cat1.searchResults.listResults.length ; i++){
                            var ZPID = window.jsondata.cat1.searchResults.listResults[i].zpid;
                            var PRICE = window.jsondata.cat1.searchResults.listResults[i].price;
                            var ZILLOW_URL = window.jsondata.cat1.searchResults.listResults[i].detailUrl;               
                            window.alldata.push(ZPID + '\t' +ZILLOW_URL +'\t'+ PRICE);
                            window.purls.push(ZPID)
                            
                        }

                    }
                    catch(err){
                        for (var i = 0 ; i < window.jsondata.cat1.searchResults.mapResults.length ; i++){
                            var ZPID = window.jsondata.cat1.searchResults.mapResults[i].zpid;
                            var PRICE = window.jsondata.cat1.searchResults.mapResults[i].price;
                            var ZILLOW_URL = 'https://www.zillow.com/'+window.jsondata.cat1.searchResults.mapResults[i].detailUrl;               
                            window.alldata.push(ZPID + '\t' +ZILLOW_URL +'\t'+ PRICE);
                            window.purls.push(ZPID)
                            
                        }

                    }
					
                    //console.log(alldata);
					console.log(linkslooper);
				});
}
copy(window.alldata.join('\n'))

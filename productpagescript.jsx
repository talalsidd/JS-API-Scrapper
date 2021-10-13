var Refferer = window.location.href
window.purls = ['Your ZillowIDs here'];
window.data2=['Your header names followed \t to make data tab separated']
window.linkslooper2 = 0;
for (window.linkslooper2 = 0; window.linkslooper2 < window.purls.length; window.linkslooper2++){
    doSetTimeout(window.linkslooper2);
}

function doSetTimeout(linkslooper2) {
	setTimeout(function() {
		fetchRequestfunctionPage(linkslooper2);
	}, linkslooper2*1200);
}

fetchRequestfunctionPage = function(linkslooper2) {
                    fetch("https://www.zillow.com/graphql/?zpid="+window.purls[linkslooper2]+"&contactFormRenderParameter=&queryId=4c19ac196fd0f1e7e30ca7e7f9af85d5&operationName=ForSaleDoubleScrollFullRenderQuery", {
  					"headers": {
    				"accept": "*/*",
					"accept-language": "en-US,en;q=0.9",
					"content-type": "text/plain",
					"sec-ch-ua": "\"Google Chrome\";v=\"93\", \" Not;A Brand\";v=\"99\", \"Chromium\";v=\"93\"",
					"sec-ch-ua-mobile": "?0",
					"sec-ch-ua-platform": "\"Windows\"",
					"sec-fetch-dest": "empty",
					"sec-fetch-mode": "cors",
					"sec-fetch-site": "same-origin"
					},
					"referrer": Refferer,
					"referrerPolicy": "unsafe-url",
					"body": "{\"operationName\":\"ForSaleDoubleScrollFullRenderQuery\",\"variables\":{\"zpid\":"+window.purls[linkslooper2]+",\"contactFormRenderParameter\":{\"zpid\":"+window.purls[linkslooper2]+",\"platform\":\"desktop\",\"isDoubleScroll\":true}},\"clientVersion\":\"home-details/6.0.11.5970.master.8d248cb\",\"queryId\":\"4c19ac196fd0f1e7e30ca7e7f9af85d5\"}",
					"method": "POST",
					"mode": "cors",
					"credentials": "include"
					})
                    .then(response => response.json())
                    .then(JSONObject => {
                        window.jsondata2 = JSONObject;
                    })
                        .then(function() {
                            //var DESC = window.jsondata2.data.property.description;
							var POSTINGDATE = window.jsondata2.data.property.datePostedString;
							try {
								var ZILLOWPID = window.jsondata2.data.property.zpid;
								var obj = window.jsondata2.data.property.contactFormRenderData.data.agent_module.phone
								var OWNERCONTACT1 = window.jsondata2.data.property.contactFormRenderData.data.agent_module.phone.areacode;
								var OWNERCONTACT2 = window.jsondata2.data.property.contactFormRenderData.data.agent_module.phone.prefix;
								var OWNERCONTACT3 = window.jsondata2.data.property.contactFormRenderData.data.agent_module.phone.number;
								var AGENTCONTACT = "("+OWNERCONTACT1+") "+OWNERCONTACT2+"-"+OWNERCONTACT3;
								var AGENT = window.jsondata2.data.property.contactFormRenderData.data.agent_module.display_name;
                            
							} catch (err) {
								var ZILLOWPID = window.jsondata2.data.property.adTargets.pid;
								//var ZILLOWPID = '--';
                                var AGENTCONTACT = '--'
								var AGENT = '--'
							}
                            var BEDS = window.jsondata2.data.property.bedrooms;
                            var BATHS = window.jsondata2.data.property.bathrooms;
                            var STATUS = window.jsondata2.data.property.homeStatus;
                            var LIVINGAREA = window.jsondata2.data.property.livingArea;
                            var DAYSONZILLOW = window.jsondata2.data.property.daysOnZillow;
                            var ZESTIMATE = window.jsondata2.data.property.zestimate;
                            var CITY = window.jsondata2.data.property.city;
                            var ZIPCODE = window.jsondata2.data.property.zipcode;
                            var STATE = window.jsondata2.data.property.state;
                            var VIEW_COUNT = window.jsondata2.data.property.pageViewCount;
                            var SAVE_COUNT = window.jsondata2.data.property.favoriteCount;
                            //var TIMEONZILLOW = window.jsondata2.data.property.timeOnZillow
                            var ADDRESS = window.jsondata2.data.property.address.streetAddress + ', '+CITY +', '+ STATE+' '+ZIPCODE;
							//window.data2[linkslooper2].replace(/\n/g,' ');
                            window.data2.push(ZILLOWPID+'\t'+VIEW_COUNT+'\t'+SAVE_COUNT+'\t'+ ZESTIMATE+'\t'+ADDRESS+'\t'+BEDS+'\t'+BATHS+'\t'+STATUS+'\t'+LIVINGAREA+'\t'+CITY+'\t'+ZIPCODE+'\t'+STATE+'\t'+AGENTCONTACT+'\t'+AGENT+'\t'+POSTINGDATE+'\t'+DAYSONZILLOW);
                            
                        });
                    }
copy(window.data2.join('\n'))

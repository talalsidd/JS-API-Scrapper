# JS-API-Scrapper
How to scrape data from a site using POST requests in Chrome console

First you need to get the API URL from the website . Here is a sample API url from zillow 

'https://www.zillow.com/search/GetSearchPageState.htm?searchQueryState=%7B%22pagination%22%3A%7B%22currentPage%22%3A2%7D%2C%22usersSearchTerm%22%3A%22CA%22%2C%22mapBounds%22%3A%7B%22west%22%3A-153.847663625%2C%22east%22%3A-84.765632375%2C%22south%22%3A27.621171317999984%2C%22north%22%3A46.085364881491216%7D%2C%22regionSelection%22%3A%5B%7B%22regionId%22%3A9%2C%22regionType%22%3A2%7D%5D%2C%22isMapVisible%22%3Atrue%2C%22filterState%22%3A%7B%22doz%22%3A%7B%22value%22%3A%221%22%7D%2C%22isAllHomes%22%3A%7B%22value%22%3Atrue%7D%2C%22isCondo%22%3A%7B%22value%22%3Afalse%7D%2C%22isMultiFamily%22%3A%7B%22value%22%3Afalse%7D%2C%22isManufactured%22%3A%7B%22value%22%3Afalse%7D%2C%22isLotLand%22%3A%7B%22value%22%3Afalse%7D%2C%22isTownhouse%22%3A%7B%22value%22%3Afalse%7D%2C%22isApartment%22%3A%7B%22value%22%3Afalse%7D%2C%22isApartmentOrCondo%22%3A%7B%22value%22%3Afalse%7D%7D%2C%22isListVisible%22%3Atrue%2C%22mapZoom%22%3A4%7D&wants={%22cat1%22:[%22listResults%22,%22mapResults%22],%22cat2%22:[%22total%22]}&requestId=4'



After that you need to add URLs to the array 'window.allurls' and execute the listpage script. You need to update the headers in 'window.alldata' array by yourself.

In case you want to get data from list page, The data got copied in window.alldata array and you need to paste the data in excel sheet.

If you want to scrape product page then you need to execute the product page script. The 'purls' array contains the Product IDs and it will execute the product page.

Lastly you need to copy the data into excel file.

Good Luck.


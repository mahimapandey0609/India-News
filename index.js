console.log("this is my news website");

//initialize the news api parameters
let source = 'bbc-news';
let apikey = 'd2ff313ad7f64c04b2391f14988feb44';
//grab the news container
let newsindia = document.getElementById('newsindia');
//create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newshtml ="";
        articles.forEach(function(element,index) {
           // console.log(element,index);
                      let news = `<div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                ${element["title"]}
                            </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                ${element["content"]}.<a href ="${element['url']}" target = "_blank"> Read more here </a>
                            </div>
                        </div>
                        </div>`;
                        
                newshtml += news;
            
            });
        newsindia.innerHTML =newshtml;
    }
    else {
        console.log("some error occured");
    }
}

xhr.send();


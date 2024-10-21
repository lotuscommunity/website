
function getArticleShortStr(index, items)
{
    const item = items[index];
    const parsedHtml = $('<div>').html(item.description);
    const imgSrc = parsedHtml.find('img').attr('src');
    const h4Src = parsedHtml.find('h4').text();
    const link_url = item.link;
    var result = "";
  
    result += `<div class="card card-article mx-0 my-5 mx-sm-1 mx-md-2 mx-lg-3 mx-xl-4 mx-xxl-5 rounded border-none">`;
        result += `<div class="card-body text-center">`; 
            result += `<a href="${link_url}">`;        
            result += `<img src = "${imgSrc}" alt="${item.title}" width="100%" />`;            
            result += `<h5 class="m-4 text-custom-golden text-start">${item.pubDate}</h5>`;
            result += `<h5 class="m-4 text-custom-green text-start">${item.title}</h2>`;
            result += `<h5 class="m-4 text-custom-white text-start">${h4Src}</h4>`;
            result += `</a>`;
        result += `</div>`;
    result += `</div>`;

    return result;
}

document.addEventListener('DOMContentLoaded', function() {  
    const rssUrl = 'https://medium.com/@lotusnetwork.xyz'; // URL du flux RSS Medium de Starbucks    
    const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`; // Utiliser un service proxy pour contourner les restrictions CORS

    // Récupérer les données du flux Medium et les afficher
    fetch(proxyUrl)
        .then(response => response.json())
        .then(data => {
            const articlesDiv = $('#main-container-fluid');
            console.log(data);
            var result = "";
            if (data.status == "ok")
            {    
                for (var i = 0; i < data.items.length; i++)
                {    
                    result +=  `<div class="card-group">`;                   
                    result += getArticleShortStr(i, data.items)
 
                    if (i + 1 < data.items.length)
                    {    
                        i = i + 1;
                       result += getArticleShortStr(i, data.items)           
                    }
                    
                    result +=   `</div>`;
                }
                articlesDiv.append(result);
            }
            else
            {
                articlesDiv.append("An error has occurred");
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des articles Medium :', error);
        });
});
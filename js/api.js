        let baseURL = 'https://api.themoviedb.org/3/';
        let configData = null;
        let baseImageURL = null;
        let search = document.getElementById("searchbar").value;
        
        let getConfig = function () {
            let url = "".concat(baseURL, 'configuration?api_key=', APIKEY); 
            fetch(url)
            .then((result)=>{
                return result.json();
            })
            .then((data)=>{
                baseImageURL = data.images.secure_base_url;
                configData = data.images;
                console.log('config:', data);
                console.log('config fetched');
                runSearch(document.getElementById("searchbar").value)
            })
            .catch(function(err){
                alert(err);
            });
        }
        
        let runSearch = function (keyword) {
            let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
            fetch(url)
            .then(result=>result.json())
            .then((data)=>{
                //process the returned data
                //total results
                let total = JSON.stringify(data.total_results);
                
                //start to list elements
                
                let title = JSON.stringify(data.results['0'].title);
                let overview = JSON.stringify(data.results['0'].overview);
                let poster_path = JSON.stringify(data.results['0'].poster_path);
                let release_date = JSON.stringify(data.results['0'].release_date);
                
                
                //JSON parse to get right format
                let title_p = JSON.parse(title);
                let overview_p = JSON.parse(overview);
                let poster_path_p = JSON.parse(poster_path);
                let release_date_p = JSON.parse(release_date);
                
                
                 //display result's number
                document.getElementById('output').innerHTML = '<a>TOTAL RESULT: </a>' + total + '<br><br><a>LISTED RESULT: 1</a>';
                //display first result
                document.getElementById('searchobj').innerHTML = '<div id="main_container"><div class="row"><div class="col-12 col-md-4><div id="img_container"><img src="https://image.tmdb.org/t/p/w200' + poster_path_p + '"></div></div></div><div class="row"><div class="col-12 col-md-4><div id="text_container"></div></div><h1>' + title_p + '</h1></div>' + '<p id="overview">' + overview_p + '</p>' + '<p id="release_date">' + release_date_p +'</p></div></div>';
               
                
            })
        }
        
        document.addEventListener('DOMContentLoaded', getConfig);
      
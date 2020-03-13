function buscar() {
    let inputSearch = document.getElementById("input-search").value;

    let rutaImg = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/";

    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=7f8494efa25bfa40d25abdd2fd435c69&language=en-US&query=${inputSearch}&page=1&include_adult=false`)
    .then(res => res.json())
    .then(data => {

        const pelicula = data.results;

        for(let i = 0; i < pelicula.length; i++){
            document.getElementById("contenido").innerHTML += `<div id="elemento${[i]}">
                <img src="${rutaImg}${pelicula[i].poster_path}"> 
                <p id="idValor${[i]}" value="${pelicula[i].id}" class="classId"></p>
                <p>${pelicula[i].original_title}</p>
                <p>${pelicula[i].popularity}</p>
                <p>${pelicula[i].overview}</p>
                <button id="btn${[i]}" onclick="trailer()">Trailer</button>
            </div>`; 
            
        } 
        console.log(inputSearch);
        console.log(pelicula);
    })  
} 



function trailer(){

    var div1 = document.getElementById("idValor1");
    var value = div1.getAttribute("value");
    //let a = document.getElementsById("idValor0");//et b = a.getAttribute("value");
    //let c =  document.getElementById(b);
    //var idv = c.getAttribute("value");
  console.log(value);
  
  
  fetch(`https://api.themoviedb.org/3/movie/${value}/videos?api_key=7f8494efa25bfa40d25abdd2fd435c69`)
             .then(res => res.json())
              .then(data => {
  
                  const popular = data.results;
  
                 document.getElementById("trailer").innerHTML += `<iframe width="560" height="315" src="https://www.youtube.com/embed/${popular[0].key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;  
  
                  console.log(popular);
              }) 
  
  }


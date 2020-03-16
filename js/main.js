/********* MOSTRAR PELICULAS POR NOMBRE *************/

    let inputSearch = document.getElementById("input-search");

    inputSearch.addEventListener("keyup", function(){
            let peli = this.value;

            let rutaImg = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/";

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=7f8494efa25bfa40d25abdd2fd435c69&language=en-US&query=${peli}&page=1&include_adult=false`)
    .then(res => res.json())
    .then(data => {

        const pelicula = data.results;

        for(let i = 0; i < pelicula.length; i++){

            document.getElementById("contenido").innerHTML +=

                `<div class="col-md-12 col-lg-6 col-xl-6">
                    <div class="contenido-card">
                        <div class="img-card col-sm-12 col-md-5 col-lg-5">
                            <img class="d-block w-100 img-card" src="${rutaImg}${pelicula[i].poster_path}"></img>
                        </div>
                        <div class="info-card col-sm-12 col-md-7 col-lg-7">
                            <p class="card-title title-card">${pelicula[i].original_title}</p>
                            <p class="card-text description-card">${pelicula[i].overview}</p>
                            <p class="card-text">${pelicula[i].popularity}</p>
                        </div>
                    </div>
                </div>`;  
            
        } 
    
        console.log(inputSearch);
        console.log(pelicula);
    }); 
        });

     
 
/********* FIN MOSTRAR PELICULAS POR NOMBRE *************/



/********* MOSTRAR TRAILER *************/
/* function trailer(){

    var div1 = document.getElementByTagName('button').value;
    console.log(div1);
    //var value = div1.getAttribute("value");
    //let a = document.getElementsById("idValor0");//et b = a.getAttribute("value");
    //let c =  document.getElementById(b);
    //var idv = c.getAttribute("value");
   // console.log(value);
  
    fetch(`https://api.themoviedb.org/3/movie/${value}/videos?api_key=7f8494efa25bfa40d25abdd2fd435c69`)
        .then(res => res.json())    
        .then(data => {
  
            const popular = data.results;
  
            document.getElementById("trailer").innerHTML += `<iframe width="560" height="315" src="https://www.youtube.com/embed/${popular[0].key}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;  
  
            console.log(popular);
    });  
}  */
/********* FIN MOSTRAR TRAILER *************/



/********* MOSTRAR PELICULAS POPULARES *************/
/* let rutaImgPopular = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/";

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7f8494efa25bfa40d25abdd2fd435c69&language=en-US&page=1`)
.then(res => res.json())
.then(data => {

    const popular = data.results;

    for(let j = 0; j < popular.length; j++){
        document.getElementById("popular").innerHTML += `<div id="elemento${[j]}">
            <img src="${rutaImgPopular}${popular[j].poster_path}"> 
            <p>${popular[j].original_title}</p>
            <p>${popular[j].popularity}</p>
            <p>${popular[j].overview}</p>
        </div>`; 
    }
    console.log(inputSearch);
    console.log(popular);
  }) */
/********* FIN MOSTRAR PELICULAS POPULARES *************/
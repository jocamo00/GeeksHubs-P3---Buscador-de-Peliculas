/********* MOSTRAR PELICULAS POR NOMBRE *************/
function buscar(){

    let inputSearch = document.getElementById("input-search").value;
    let btnSearch = document.getElementById("btn-search");

    let rutaImg = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/";

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=7f8494efa25bfa40d25abdd2fd435c69&language=en-US&query=${inputSearch}&page=1&include_adult=false`)
    .then(res => res.json())
    .then(data => {

        const pelicula = data.results;
        

        for(let i = 0; i < pelicula.length; i++){

            document.getElementById("contenido").innerHTML +=

                `<div class="col-md-12 col-lg-6 col-xl-6">
                    <div class="contenido-card">
                        <div class="img-card col-sm-12 col-md-5 col-lg-5">
                            <img value="${pelicula[i].id}" id="btn-trailer${[i]}" class="d-block w-100 img-card" onclick="trailer()" data-toggle="modal" data-target="#myModal" src="${rutaImg}${pelicula[i].poster_path}"></img>
                        </div>
                        <div class="info-card col-sm-12 col-md-7 col-lg-7">
                            <p class="card-title title-card">${pelicula[i].original_title}</p>
                            <p class="card-text description-card">${pelicula[i].overview}</p>
                            <p class="card-text genero-card">${pelicula[i].genre_ids}</p>
                            
                        </div>
                    </div>
                </div>`;  
        } 
    });
} 
/********* FIN MOSTRAR PELICULAS POR NOMBRE *************/



/********* MOSTRAR TRAILER *************/
function trailer(){
   
    let div1 = document.getElementById('btn-trailer0');
    let value = div1.getAttribute("value");
  
    fetch(`https://api.themoviedb.org/3/movie/${value}/videos?api_key=7f8494efa25bfa40d25abdd2fd435c69`)
        .then(res => res.json())    
        .then(data => {
  
            const trailer = data.results;
  
            document.getElementById("trailer").innerHTML += 
            `<iframe width="560" height="315" src="https://www.youtube.com/embed/${trailer[0].key}" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
            picture-in-picture" allowfullscreen></iframe>`;
    });  
}  
/********* FIN MOSTRAR TRAILER *************/



/********* MOSTRAR PELICULAS POPULARES *************/
let rutaImgPopular = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/";

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7f8494efa25bfa40d25abdd2fd435c69&language=en-US&page=1`)
.then(res => res.json())
.then(data => {

    const popular = data.results;

    for(let j = 0; j < popular.length; j++){
        document.getElementById("popular").innerHTML +=

                `<div class="col-md-12 col-lg-6 col-xl-6">
                    <div class="contenido-card">
                        <div class="img-card col-sm-12 col-md-5 col-lg-5">
                            <img value="${popular[j].id}" id="btn-trailer${[j]}" class="d-block w-100 img-card" onclick="trailer()" data-toggle="modal" data-target="#myModal" src="${rutaImgPopular}${popular[j].poster_path}"></img>
                        </div>
                        <div class="info-card col-sm-12 col-md-7 col-lg-7">
                            <p class="card-title title-card">${popular[j].original_title}</p>
                            <p class="card-text description-card">${popular[j].overview}</p>
                            <p class="card-text genero-card">${popular[j].popularity}</p>
                            
                        </div>
                    </div>
                </div>`;  
    }
});
/********* FIN MOSTRAR PELICULAS POPULARES *************/
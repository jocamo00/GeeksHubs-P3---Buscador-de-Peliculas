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
            </div>`; 
            
        } 
        console.log(inputSearch);
        console.log(pelicula);
    })  
} 



const API_SERVER = 'http://127.0.0.1:8000';

/*
first_name
last_name
adress
birth_date
email
phone

*/
// Función para realizar la petición fetch
async function fetchData(url, method, data = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : null,
    };

    const response = await fetch(url, options);
    return await response.json();
}
/*
async function fetchDataWithFile(url, method, formData) {
    const options = {
        method: method,
        body: formData,
    };

    const response = await fetch(url, options);
    return await response.json();
}

document.getElementById('btn-add-movie').addEventListener('click', async function () {
    const idMovie = document.querySelector('#id_movie');
    const title = document.querySelector('#title').value;
    const director = document.querySelector('#director').value;
    const releaseDate = document.querySelector('#release_date').value;
    //manejo de archivos
    const bannerFileInput = document.querySelector('#banner-form');
    const banner = bannerFileInput.files[0];

    const formData = new FormData();
    formData.append('title', title);
    formData.append('director', director);
    formData.append('release_date', releaseDate);
    formData.append('banner', banner);
    let result = null;
    if(idMovie.value!==""){
      result = await fetchDataWithFile(${API_SERVER}/api/update_movie/${idMovie.value}/, 'PUT', formData);
    }else{
      result = await fetchDataWithFile(${API_SERVER}/api/create_movie/, 'POST', formData);
    }
    const formMovie = document.querySelector('#form-movie');
    idMovie.value=''
    formMovie.reset();
    alert(result.message);

    showMoviesTable();
});

  /**
   * Funcion que permite crear un elemento <tr> para la tabla de peliculas
   * por medio del uso de template string de JS.
   */
  async function showTable(){
    try {
      // Cambia la URL según tu endpoint de clientes
            let clients =  await fetchData(API_SERVER+'/api/clients/', 'GET');
            const tableClients = document.querySelector('#client-table tbody');
            tableClients.innerHTML='';
            clients.forEach((clients, index) => {
              let tr = `<tr>
                            <td>${clients.first_name}</td>
                            <td>${clients.last_name}</td>
                            <td>${clients.address}</td>
                            <td>${clients.birth_date}</td>
                            <td>${clients.email}</td>
                            <td>${clients.phone}</td>
                      </tr>`;
              // Agrega la fila al final de la tabla
              tableClients.insertAdjacentHTML("beforeend", tr);
            });

    } catch (error) {
      console.error('Error al obtener datos de clientes:', error);
  }
}

  
  /**
   * Function que permite eliminar una pelicula del array del localstorage
   * de acuedo al indice del mismo
   * @param {number} id posición del array que se va a eliminar
   */
  /*
  async function deleteMovie(id){
    let response = await fetchData(${API_SERVER}/api/delete_movie/${id}/, 'DELETE');
    console.log(response);
    showMoviesTable();
  }

  /**
   * Function que permite eliminar una pelicula del array del localstorage
   * de acuedo al indice del mismo
   * @param {number} id posición del array que se va a eliminar
   */
  /*
  async function updateMovie(id){
    let response = await fetchData(${API_SERVER}/api/movies/${id}/, 'GET');
    const idMovie = document.querySelector('#id_movie');
    const title = document.querySelector('#title');
    const director = document.querySelector('#director');
    const releaseDate = document.querySelector('#release_date');
    
    idMovie.value = response.id;
    title.value = response.title;
    director.value = response.director;
    releaseDate.value = response.release_date;
  }
*/
  showTable();

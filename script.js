const main = document.getElementById('main')



function getRandom() {

  const randomImageApiUrl = "https://randomuser.me/api/";

  // używamy api fetch do wykonywania wywołań api . 
  fetch(randomImageApiUrl)
 
    .then(function (response) {
      // otrzymujemy surową odpowiedź. 

      return response.json();

    })
    .then(function (json) {
      // teraz mamy json. 

      let user = json.results[0].name.first;
      let mail = json.results[0].email;
      let age = json.results[0].dob.age;
      let country = json.results[0].location.country;
      let image = json.results[0].picture.large;

      const movieEl = document.createElement('div')
      movieEl.classList.add('movie')

      movieEl.innerHTML = `
             <img src=" ${image}">
             <ul>
        <li><span>${user}</span></li>
        <li>${mail}</li>
        <li>${age}</li>
        <li>${country}</li>
        
    </ul>
            
         </div>`
      main.appendChild(movieEl)


    })
    .catch(function (error) {
      // jeśli wystąpi jakikolwiek błąd, taki jak brak połączenia internetowego, zostanie wywołane to wywołanie zwrotne
      console.error(error)

    });
}
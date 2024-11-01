const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15";


const imgList = () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const card = document.querySelector("[data-ul]");
      data.forEach(element => {
        const content = ` <li class="card">
                    <img class="card__image" src="${element.url}" alt="${element.title}">
                    <h3 class="card__title">${element.title}</h3>
                </li>`

        card.innerHTML += content;
      });
      
    })
    .catch(error => console.log(error)); 
};

imgList();

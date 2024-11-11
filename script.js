const url = `https://api.nasa.gov/planetary/apod?api_key=iskrYaaEFOY19oE2uwcvNpIFSaCPB9WaGN3P5f15&count=15`;

async function imgList() {
  try {
    let fetchImg = await fetch(url);
    let dataImg = await fetchImg.json();

    console.log(dataImg);

    const card = document.querySelector("[data-ul]");

    dataImg.forEach((element) => {
      let content = ` <li class="card">
                    <img class="card__image" src="${element.url}" alt="${element.title}">
                    <h3 class="card__title">${element.title}</h3>
                </li>`;
      card.innerHTML += content;
    });
  } catch (error) {
    console.log("error");
  }
}

imgList();

// const imgList = () => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);

//       const card = document.querySelector("[data-ul]");
//       data.forEach(element => {
//         const content = ` <li class="card">
//                     <img class="card__image" src="${element.url}" alt="${element.title}">
//                     <h3 class="card__title">${element.title}</h3>
//                 </li>`

//         card.innerHTML += content;
//       });

//     })
//     .catch(error => console.log(error));
// };

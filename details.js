const hamEndpoint = "https://api.pexels.com/v1/search?query=hamsters";
const tigersEndpoint = "https://api.pexels.com/v1/search?query=tigers";
let endPoint = "";
const parameters = new URLSearchParams(location.search);
const ids = parseInt(parameters.get("id"));
console.log(ids);
const animal = parameters.get("animal");

if (animal === "hamster") {
  endPoint = "https://api.pexels.com/v1/search?query=hamsters";
} else if (animal === "tiger") {
  endPoint = "https://api.pexels.com/v1/search?query=tigers";
} else {
  endPoint = "https://api.pexels.com/v1/search?query=" + animal;
}

const generateDetail = function () {
  fetch(endPoint, {
    headers: {
      Authorization: "7xd98P3eyaz15XJtGGWVRN91BYlY2Y0ZcThdUUStYHtXUdllBiq3n0up",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("non torna 200");
      }
    })
    .then((foto) => {
      console.log(foto);
      const fotoAr = foto.photos;
      console.log(fotoAr);

      let photo = fotoAr.find((p) => p.id === ids);

      console.log(photo);
      const img = document.querySelector(".card img");
      img.setAttribute("src", photo.src.medium);
      const artist = document.querySelector(".card-title");
      artist.textContent = photo.photographer;
      const link = document.querySelector(".btn");

      link.href = photo.photographer_url;
    })
    .catch((er) => {
      console.log("errore", er);
    });
};

generateDetail();

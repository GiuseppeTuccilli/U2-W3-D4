const hamEndpoint = "https://api.pexels.com/v1/search?query=hamsters";
const tigersEndpoint = "https://api.pexels.com/v1/search?query=tigers";
let endPoint = "";
const parameters = new URLSearchParams(location.search);
const id = parameters.get("id");
const animal = parameters.get("animal");

if (animal === "hamster") {
  endPoint = "https://api.pexels.com/v1/search?query=hamsters" + "/" + id;
} else if (animal === "tiger") {
  endPoint = "https://api.pexels.com/v1/search?query=tigers" + "/" + id;
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
      const photo = foto.photos.find((p) => (p.id = id));
      console.log(photo);
      const img = document.querySelector(".card img");
      img.src = photo.src.large;
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

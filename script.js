const hamEndpoint = "https://api.pexels.com/v1/search?query=hamsters";
const tigersEndpoint = "https://api.pexels.com/v1/search?query=tigers";
const generalEndpoint = "https://api.pexels.com/v1/search";

const hideBtns = document.querySelectorAll(".btn-group button:nth-of-type(2)");

const genericImages = function (pet) {
  fetch(generalEndpoint + "?query=" + pet, {
    headers: {
      Authorization: "7xd98P3eyaz15XJtGGWVRN91BYlY2Y0ZcThdUUStYHtXUdllBiq3n0up",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("non torna 400");
      }
    })
    .then((data) => {
      const imgs = document.querySelectorAll(".card img");

      for (let i = 0; i < 9; i++) {
        const cont = imgs[i].closest(".card");
        const small = cont.querySelector("small");
        small.innerText = data.photos[i].id;
        imgs[i].src = data.photos[i].src.portrait;

        imgs[i].addEventListener("click", () => {
          const id = data.photos[i].id;
          const strId = id.toString();
          console.log(strId);

          location.assign(`./details.html?id=${strId}&animal=` + pet);
        });
      }
    });
};

const form = document.getElementById("form");
const seacrBtn = document.querySelector("#form button");
const input = document.getElementById("searchInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  genericImages(input.value);
  e.target.reset();
});

const loadImages = function () {
  fetch(hamEndpoint, {
    headers: {
      Authorization: "7xd98P3eyaz15XJtGGWVRN91BYlY2Y0ZcThdUUStYHtXUdllBiq3n0up",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("non torna 400");
      }
    })
    .then((hamsters) => {
      console.log(hamsters);
      const imgs = document.querySelectorAll(".card img");

      for (let i = 0; i < 9; i++) {
        const cont = imgs[i].closest(".card");
        const small = cont.querySelector("small");
        small.innerText = hamsters.photos[i].id;
        imgs[i].src = hamsters.photos[i].src.portrait;

        imgs[i].addEventListener("click", () => {
          const id = hamsters.photos[i].id;
          const strId = id.toString();
          console.log(strId);

          location.assign(`./details.html?id=${strId}&animal=hamster`);
        });
      }
    })
    .catch((er) => {
      console.log("errore", er);
    });
};

const loadSecondaryImages = function () {
  fetch(tigersEndpoint, {
    headers: {
      Authorization: "7xd98P3eyaz15XJtGGWVRN91BYlY2Y0ZcThdUUStYHtXUdllBiq3n0up",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("non torna 400");
      }
    })
    .then((hamsters) => {
      console.log(hamsters);
      const imgs = document.querySelectorAll(".card img");
      for (let i = 0; i < 9; i++) {
        const cont = imgs[i].closest(".card");
        const small = cont.querySelector("small");
        small.innerText = hamsters.photos[i].id;
        imgs[i].src = hamsters.photos[i].src.portrait;

        const id = hamsters.photos[i].id;
        const strId = id.toString();
        imgs[i].addEventListener("click", () => {
          console.log(strId);

          location.assign(`./details.html?id=${strId}&animal=tiger`);
        });
      }
    })
    .catch((er) => {
      console.log("errore", er);
    });
};

for (let i = 0; i < hideBtns.length; i++) {
  hideBtns[i].addEventListener("click", (e) => {
    const col = e.target.closest(".col-md-4");
    col.classList.add("d-none");
  });
}

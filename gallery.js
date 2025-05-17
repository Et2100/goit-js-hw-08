const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];
const addToGallery = document.querySelector(".gallery");

// const galleryItems = document.createElement("p", {
//   textContent: "wjandfisdnfisfidn",
// });

// addToGallery.appendChild(paragraph);

// ul.append(Object.assign(document.createElement('li'), {textContent: 'Element 4'}));


const createGalleryItems = (items) => 
    items.map(({ preview, original, description }) => 
        `<li class="gallery-item" style="list-style: none;">
        <a class="gallery-link" href="${original}">
        <img
        class="gallery-image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        width="360px"
        height="200px"
        />
        </a>
        </li>`
    ).join("") ;
    
;
// addToGallery.textContent = createGalleryItems(images);
addToGallery.innerHTML = createGalleryItems(images);

const linkPrevent = document.querySelectorAll(".gallery-link");
console.log(linkPrevent); 
linkPrevent.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    // const original = event.currentTarget.querySelector(".gallery-image").dataset.source;
    // const instance = basicLightbox.create(`
    //   <img src="${original}" width="800" height="600">
    // `);
    // instance.show();
  });
});

addToGallery.addEventListener("click", (event) => {
  console.log(event.target.dataset.source);
  // const instance = basicLightbox.create(`
  //   <img src="${event.target.dataset.source}">`
  // )
  
  let instance;

  function onKeyDown(e) {
    if (e.key === "Escape") {
      instance.close(); // zamyka lightbox
    }
  }

  instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
  `, {
    onShow: () => {
      document.addEventListener("keydown", onKeyDown);
    },
    onClose: () => {
      document.removeEventListener("keydown", onKeyDown);
    }
  });
  instance.show()
  // const instance = basicLightbox.create(`
  //   <img src="${event.target.dataset.source}" width="800" height="600">
  });

// function addElement() {
//     // create a new div element
//     const newDiv = document.createElement("div");

//     // and give it some content
//     const newContent = document.createTextNode("Hi there and greetings!");

//     // add the text node to the newly created div
//     newDiv.appendChild(newContent);

//     // add the newly created element and its content into the DOM
//     const currentDiv = document.getElementById("div1");
//     document.body.insertBefore(newDiv, currentDiv);



// const instance = basicLightbox.create(`
//   <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesListEl = document.querySelector('#gallery');
// Первое решение
// const imagesEl = images.map(image => {
//   const imageItemEl = document.createElement('li');
//   imageItemEl.classList.add('image-item');
//   const imageEl = document.createElement('img');
// imageEl.src = image.url;
// imageEl.alt = image.alt;
// imageEl.width = 400;
// imageItemEl.appendChild(imageEl);
 
//   return imageItemEl
// })

// console.log(imagesEl)
// imagesListEl.append(...imagesEl)
 // Второе решение  с созданием функции
// const makeImagesList = ({ url, alt }) => {
//     const imageItemEl = document.createElement('li');
//     imageItemEl.classList.add('image-item');
//     const imageEl = document.createElement('img');
//     imageEl.src = url;
//     imageEl.alt = alt;
//     imageEl.width = 400;
//     imageItemEl.appendChild(imageEl);
//     return imageItemEl
//   };

// const elements = images.map(makeImagesList)
// imagesListEl.append(...elements)
//  Третий вариант
// const makeImagesCard = ({ url, alt }) => {
//   return
//   `<li class="image-item">
//     <img src="${url}" alt="${alt}" width=400/>
//   </li>`;
// };
// console.log(makeImagesCard)
// const makeImagesList = images
//   .map(makeImagesCard)
//   .join('')

// imagesListEl.insertAdjacentHTML('afterbegin', makeImagesList)
// console.log(imagesListEl)

const makeImagesCard = images.map(image => 
  imagesListEl.insertAdjacentHTML('afterbegin', `<li class="image-item">
     <img src="${image.url}" alt="${image.alt}" width=400/>
  </li>`)
)
      
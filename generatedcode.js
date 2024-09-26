var images;


images = ['https://esct2019.storage.googleapis.com/wp-content/uploads/2017/04/wsi-imageoptim-Kyiv-sights-1.jpg?x88561', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/St.Sophia_Cathedral%2C_Kyiv%2C_Ukraine_%285%29.jpg/1200px-St.Sophia_Cathedral%2C_Kyiv%2C_Ukraine_%285%29.jpg?20160908102259', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Kyiv_Passage%2C_Kyiv_Ukraine%2C_August_2012.jpg/1200px-Kyiv_Passage%2C_Kyiv_Ukraine%2C_August_2012.jpg?20220320175846'];

let element_kyiv = document.getElementById('kyiv');
element_kyiv.setAttribute("src", images[0]);


document.getElementById('next_image').addEventListener('click', (event) => {
  let element_kyiv2 = document.getElementById('kyiv');
  images.push(images[0]);
  images.shift();
  let element_kyiv3 = document.getElementById('kyiv');
  element_kyiv3.setAttribute("src", images[0]);
});

document.getElementById('previous_image').addEventListener('click', (event) => {
  let element_kyiv4 = document.getElementById('kyiv');
  images.unshift(images.slice(-1)[0]);
  images.pop();
  let element_kyiv5 = document.getElementById('kyiv');
  element_kyiv5.setAttribute("src", images[0]);
});
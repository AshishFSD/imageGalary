
let imageContaner = document.getElementById('container'); // image container

let div = "";  // image date will store as string;

for (let i = 0; i < 12; i++) {

      let num = i;
      div += '<div class="image-container">' +
            '<img src="https://picsum.photos/150/150?random=+' + num + '"' + ' class="main_image">' +

            '<div class="overlay">' +

            '<a href="https://picsum.photos/150/150?random=+' + num + '"' + ' target="_blank"  download>' +
            '<i class="fa fa-arrow-circle-down"></i>' +
            '</a>'

            +

            '<button onClick="showModel()"><i class="fa fa-plus-square"></i></button>' +
            '</div>' +
            '</div>';

}






imageContaner.innerHTML = div; // adding image data in container

// changing the dowunload ural 
const DownloadLink = document.getElementsByTagName('a');
const img = document.getElementsByTagName("img");

/**======= Eend The code */

const button = document.getElementsByTagName('button');


let model_image = document.getElementById('model_image');

for (let i = 0; i < button.length; i++) {
      button[i].addEventListener('click', () => {
            let imagePath = img[i].getAttribute('src');
            model_image.setAttribute('src', `${imagePath}`)

      
}



////////////////////////////////////////////////////////
////// Modal section toggler  


const modelOverlay = document.querySelector('.modelOverlay');

function showModel() {
      model.style.display = "block";
      modelOverlay.classList.remove('hidden')


}

function closeModel() {
      model.style.display = "none"
      modelOverlay.classList.add('hidden')
}

/*********** Model data  */











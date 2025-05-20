
// Psuedocode
    //When user clicks menu button show and hide the menu:
let menuButton = document.querySelector('.menu-btn');
const menu = document.querySelector(".menu");

menuButton.addEventListener('click', toggleMenu);
function toggleMenu() {

    menu.classList.toggle('hide');

};

function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}


handleResize();
window.addEventListener("resize", handleResize);
//Modal
const gallery = document.querySelector('.gallery')
    //When user clicks an image show a modal with the same iamge inside it;
        //target the whole gallery.(querySelector)
        
//Create the modal(.createElement('dialog'))
const modal = document.createElement('dialog');
modal.innerHTML = `<button class = 'close-viewer'>X</button><img>`;
document.body.appendChild(modal)

const modalImage = modal.querySelector('img')
//Add button to close the modal (also in the template literal)
const closeButton = modal.querySelector('.close-viewer')

//Open Modal
gallery.addEventListener('click', (event) => {
    //Add the empy image to the modal (a template literal with <img>)
    //Find out which image they clicked (use event parameter with target.closest)
    //Take the name of the file, use that to get the high def version file (.split)
        
    const img = event.target.closest('img');
    
    const src = img.getAttribute('src');
    
    const alt = img.getAttribute('alt') || '';
    const full = src.split('-')[0]+"-full.jpeg";
    //Place the modal on the page (they are hidden by default) (.appendChild)
    modalImage.src = full;
    modalImage.alt = alt;
    modal.showModal();
});



//When user clicks the close button on the modal, close the modal (.close())
closeButton.addEventListener('click', ()=> {console.log("close button clicked")
    modal.close()});

//Close Modal for any click outside of the image?
modal.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.close();
    }
});
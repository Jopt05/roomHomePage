const sliderBtn      = document.querySelectorAll(".firstContainer__photo-buttons-button"),
      sliderPhotos   = document.querySelectorAll(".photoSlider"),
      sliderTitles   = document.querySelector('.titles'),
      sliderText     = document.querySelector('.text'),
      menuBtn        = document.querySelector('.menu'),
      menu           = document.querySelector('ul'),
      closeMenuBtn   = document.querySelector('.menuClose'),
      cortain        = document.querySelector('.cortain'),
      body           = document.querySelector('body');

let cursor = 0;

const hidePhoto = (cursor) => {
    sliderPhotos[cursor].classList.add("photoHidden");
    sliderPhotos[cursor].classList.remove("photoShown");
}

const showPhoto = (cursor) => {
    sliderPhotos[cursor].classList.remove("photoHidden");
    sliderPhotos[cursor].classList.add("photoShown");
}

const changeText = (cursor) => {
    switch(cursor) {
        case 0:
            sliderTitles.innerText = "Discover innovative ways to decorate";
            sliderText.innerText = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
            break;
        
        case 1:
            sliderTitles.innerText = "We are available all across the globe";
            sliderText.innerText = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
            break;
        case 2:
            sliderTitles.innerText = "Manufactured with the best materials";
            sliderText.innerText = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
            break;
        default:
            console.log("Error");
            break;
    }
}

menuBtn.addEventListener('click', () => {
    menu.classList.add('menuShown');
    cortain.classList.add('active');
    body.classList.add('notScrollable');
})

closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('menuShown');
    cortain.classList.remove('active');
    body.classList.remove('notScrollable');
})

for(let i = 0; i < sliderBtn.length; i++) {

    sliderBtn[i].addEventListener('click', () => {
        if( i == 0 ) {
            if( cursor >= 0 ) {
                hidePhoto(cursor);
                cursor--;
                ( cursor === -1 ) ? cursor = 2 : console.log('');
                changeText(cursor);
                showPhoto(cursor);
                console.log(cursor);
            }
        } else {
            if( cursor < sliderPhotos.length ) {
                hidePhoto(cursor);
                cursor++;
                ( cursor === 3 ) ? cursor = 0 : console.log('');
                changeText(cursor);
                showPhoto(cursor);
                console.log(cursor);
            }
        }
    })

}
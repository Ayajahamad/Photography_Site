        let btn1 = document.getElementById('btn1')
        let btn2 = document.getElementById('btn2')

        let num = document.querySelector('.num')

        let homeBg = document.querySelector('.home')
        let c = true

        let imageUrl1 = './assets/images/Home-bg1.jpg'
        let imageUrl2 = './assets/images/Home-bg3.jpg'

        btn1.addEventListener('click',()=>{
            console.log('btn1')
            c = !c
            if(c){
                homeBg.style.backgroundImage = `url('${imageUrl1}')`;
                num.innerHTML = '01 / 02'
            }else{
                homeBg.style.backgroundImage = `url('${imageUrl2}')`;
                num.innerHTML = '02 / 02'
            }
        })

        btn2.addEventListener('click',()=>{
            c = !c
            if(c){
                homeBg.style.backgroundImage = `url('${imageUrl1}')`;
                num.innerHTML = '01 / 02'
            }else{
                homeBg.style.backgroundImage = `url('${imageUrl2}')`;
                num.innerHTML = '02 / 02'
            }
        })


// Image Slider

let slideNum = document.getElementById('slidenum')

const imageUrls = [
    "assets/images/SlideImg1.jpg",
    "assets/images/SlideImg2.jpg",
    "assets/images/SlideImg3.jpg",
    "assets/images/SlideImg4.jpg",
    "assets/images/SlideImg5.jpg",
    "assets/images/SlideImg6.jpg",
    "assets/images/SlideImg7.jpg",
    "assets/images/SlideImg8.jpg",
    "assets/images/SlideImg9.jpg",
    "assets/images/SlideImg10.jpg",
    "assets/images/SlideImg11.jpg",
    // Add more image URLs as needed
];

let currentIndex = 0;

function displayImages() {
    document.getElementById("image1").src = imageUrls[(currentIndex - 1 + imageUrls.length) % imageUrls.length] || '';
    document.getElementById("image2").src = imageUrls[currentIndex];
    document.getElementById("image3").src = imageUrls[(currentIndex + 1) % imageUrls.length] || '';
    slideNum.innerHTML = `${currentIndex+1}/${imageUrls.length}`
}

function next() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    displayImages();
}

function previous() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    displayImages();
}

// Display initial images
displayImages();
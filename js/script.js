

const optionMenu = document.querySelector('.select-menu'),
      selectBtn = optionMenu.querySelector('.select-cat'),
      options= optionMenu.querySelectorAll('.option'),
      btn_text= optionMenu.querySelector('.btn-text');

selectBtn.addEventListener('click' , () => optionMenu.classList.toggle('active'));

options.forEach(option => {
  option.addEventListener('click',() => {
    let selectedOption = option.querySelector('.option-text').innerText;
    btn_text.innerText = selectedOption;
    optionMenu.classList.remove('active');
  })
})      

const itemList = document.querySelector(".items-list");

const createFoods = (food) => {
    let html = `
    <div class="card">
        <img src="${food.img}" alt="">
        
      
            <div class="card-info">
                <h3 class="title">${food.title}</h3>
                <p class="price">${food.price} <small>TL</small></p>
                <p class="description">${food.desc}</p>
                <button type="button" class="addCart"><i class="fa-solid fa-plus"></i></button>
           
             </div>
        </div>
    `
    return html;
    
}


const listAllFoods = () => {
    let allFoods="";
  
    menu.map(item => {
      allFoods += createFoods(item)
    })
    itemList.innerHTML = allFoods;
  }
  
document.addEventListener("DOMContentLoaded",listAllFoods);

const listPizza = () => {
  let pizza = "";

  menu.map(item => {
    if(item.category === "pizza"){
      pizza += createFoods(item)
    }
  })
  itemList.innerHTML = pizza;
  
}

document.querySelector('.select-menu #pizza').addEventListener('click',listPizza);

const listBurger = () => {
  let burger = "";

  menu.map(item => {
    if(item.category === "hamburger"){
      burger += createFoods(item)
    }
  })
  itemList.innerHTML = burger;
}

document.querySelector('.select-menu #burger').addEventListener('click',listBurger);

const listDrink = () => {
  let drink = "";

  menu.map(item => {
    if(item.category === "drink"){
      drink += createFoods(item)
    }
  })
  itemList.innerHTML = drink;
}

document.querySelector('.select-menu #drink').addEventListener('click',listDrink);

// slider 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
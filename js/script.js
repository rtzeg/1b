// // собираем все якоря; устанавливаем время анимации и количество кадров
// const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
//       animationTime = 3000,
//       framesCount = 70;

// anchors.forEach(function(item) {
//   // каждому якорю присваиваем обработчик события
//   item.addEventListener('click', function(e) {
//     // убираем стандартное поведение
//     e.preventDefault();
    
//     // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
//     let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
//     // запускаем интервал, в котором
//     let scroller = setInterval(function() {
//       // считаем на сколько скроллить за 1 такт
//       let scrollBy = coordY / framesCount;
      
//       // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
//       // и дно страницы не достигнуто
//       if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
//         // то скроллим на к-во пикселей, которое соответствует одному такту
//         window.scrollBy(0, scrollBy);
//       } else {
//         // иначе добираемся до элемента и выходим из интервала
//         window.scrollTo(0, coordY);
//         clearInterval(scroller);
//       }
//     // время интервала равняется частному от времени анимации и к-ва кадров
//     }, animationTime / framesCount);
//   });
// });


let burger = document.querySelector('.burger');
let rotate = document.querySelector('.burger__rotate');
let navigation = document.querySelector('.navigation');


burger.addEventListener("click", function() {
  rotate.classList.toggle("active");
  burger.classList.toggle("active");
});

burger.addEventListener("click", function(){
  navigation.classList.toggle("active");
});


// Filter
let inst_svg = document.querySelector('.inst_svg')
let face_svg = document.querySelector('.face_svg')
let telegr_svg = document.querySelector('.telegr_svg')

let svgActive = () => {
  inst_svg.classList.remove('inst_svg')
}

let svgNoActive = () => {
  inst_svg.classList.add('inst_svg')
}

let svgActive1 = () => {
  face_svg.classList.remove('face_svg')
}

let svgNoActive1 = () => {
  face_svg.classList.add('face_svg')
}

let svgActive2 = () => {
  telegr_svg.classList.remove('telegr_svg')
}

let svgNoActive2 = () => {
  telegr_svg.classList.add('telegr_svg')
}
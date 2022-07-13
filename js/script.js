// swiper

let swiperHero = new Swiper('.hero__swiper-container', {
  loop: true,
  speed: 2000,

  autoplay: {
    reverseDirection: true,
  },
  effect: "fade",
  delay: 2500,
});

// simplebar

document.querySelectorAll(".simplebar").forEach(item => {
  new SimpleBar(item, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});
})

// select

const buttonDrop = document.querySelectorAll('.header__select-button');
  //на каждую кнопку вешаем обработчик
  buttonDrop.forEach(function (btn){
    btn.addEventListener('click', function(e){
      let button = this;
      console.log(this)
      if (e.target.classList.contains('activ')) { //если уже класс есть на этой кнопке
        e.currentTarget.classList.remove('activ') //то удаляем конкретно на этой кнопке
      } else {
        e.target.classList.add('activ') //иначе добавляем класс
        buttonDrop.forEach(el => {      //удаляем активный класс на других кнопках
          if (el != button) {
            el.classList.remove("activ");
          }
        });
      }
    })
  })
  //если это не кнопка и не само выпадающее меню, то удаляем класс
  //первое условие необходимо добавить, чтобы незацикливать появление->исчезновение класса
  document.addEventListener('click', function(event){
    if (!event.target.classList.contains('header__select-button') && !event.target.classList.contains('heder__select-dropdown')){
      buttonDrop.forEach(function(e){
        e.classList.remove('activ')
      })
    }
  })





// select-galery

const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});


// swiper-galery

let swiperGalery = new Swiper('.galery__swiper', {
  allowTouchMove: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 37,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1680: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },

  navigation: {
    nextEl: '.galery__swiper-button-next',
    prevEl: '.galery__swiper-button-prev',
  },


  pagination: {
    el: '.galery__swiper-pagination',
    type: 'fraction',
    clickable: true,
    observer: true,
    resizeObserver: true,
    centeredSlides: true,
  },



});

// accordion

$( function() {
  $( "#accordion" ).accordion({heightStyle: "content"
});
});

// tabs

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__tabs-item-button').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
     const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.catalog__tabs-item-button').forEach(function(btn){
        btn.classList.remove('catalog__tabs-active')});
        event.currentTarget.classList.add('catalog__tabs-active');

      document.querySelectorAll('.catalog__tabs-content-item').forEach(function(tabContent){
        tabContent.classList.remove('catalog__tabs-active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tabs-active')
    });
  });
})


// events swiper

let swiperEvents = new Swiper('.events__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,

  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },

  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },
    // when window width is >= 640px
    1680: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },
});

// project swiper

let swiperProject = new Swiper('.project__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,

  navigation: {
    nextEl: '.project__swiper-button-next',
    prevEl: '.project__swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    // when window width is >= 640px
    1680: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },
});


// map

ymaps.ready(init);
  function init(){
      var myMap = new ymaps.Map("map", {
          center: [55.758468, 37.601088],
          zoom: 14.5,
          controls: ['geolocationControl', 'zoomControl']
        }, {
          // Зададим опции для элементов управления.
          geolocationControlFloat: 'right',
          zoomControlSize: 'small',
          zoomControlSizeFloat: 'right'
      });


      // Создание геообъекта с типом точка (метка).
      var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [55.758468, 37.601088] // координаты точки
        }
      });

        var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/sprite.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [0, 0]
      });




      // Размещение геообъекта на карте.
      // myMap.geoObjects.add(myGeoObject);
      myMap.geoObjects.add(myPlacemark);
      myMap.behaviors.disable('scrollZoom');
  }

  // tooltip

  tippy('#myButton', {
    content: 'Пример современных тенденций - современная методология разработки',
  });

  tippy('#myButtonOne', {
    content: 'В стремлении повысить качество',
  });

  tippy('#myButtonTwo', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  });

  // burger

  document.querySelector(".header__top-burger").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.add("header__nav-active");
  })
  document.querySelector(".header__top-burger").addEventListener("click", function() {
    document.querySelector("body").classList.add("lock");
  })
  document.querySelector(".header__nav-burger-close").addEventListener("click", function() {
    document.querySelector("body").classList.remove("lock");
  })
  document.querySelector(".header__list").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.remove("header__nav-active");
  })
  document.querySelector(".header__list").addEventListener("click", function() {
    document.querySelector("body").classList.remove("lock");
  })
  document.querySelector(".header__nav-burger-close").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.remove("header__nav-active");
  })


  // search

  document.querySelector(".header__top-button-search").addEventListener("click", function() {
    document.querySelector(".header__top-form-search").classList.add("header__top-form-search-active");
  })
  document.querySelector(".header__top-form-search-button-closed").addEventListener("click", function() {
    document.querySelector(".header__top-form-search").classList.remove("header__top-form-search-active");
  })

  // popup

  document.querySelector(".galery__swiper-slide").addEventListener("click", function() {
    document.querySelector(".popup").classList.add("popup__active");
  })

  document.querySelector(".galery__swiper-slide").addEventListener("click", function() {
    document.querySelector("body").classList.add("lock");
  })

  document.querySelector(".popup__close").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("popup__active");
  })

  document.querySelector(".popup__close").addEventListener("click", function() {
    document.querySelector("body").classList.remove("lock");
  });

  // mask

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);



  // validate

new JustValidate('#form', {
  rules: {
    name: {
      required: true,
      minLength: 3,
      maxLength: 15,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }

    },
  },
  colorWrong: '#D11616',
  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Имя слишком короткое',
      maxLength: 'Имя слишком длинное'
    },
    tel: {
      required: 'Укажите ваш телефон'
    },
  },
});

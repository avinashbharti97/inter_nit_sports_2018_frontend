$(document).ready(function() {
	$('#fullpage').fullpage();
});

// $('#ckLine').ckLine();

$('.card-slider-1').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// function createCard(cardData) {
//   var cardTemplate = [
//     '<div class="col-3 card">',
//     '<p>My name is: ',
//     cardData.Name || 'No name provided',
//     '</p>',
//     '<p>My job is: ',
//     cardData.Job || 'No job provided',
//     '</p></div>'

    
//   ];

//   // a jQuery node
//   return $(cardTemplate.join(''));
// }

// var data = [
//     { "Name": "Peter", "Job": "Programmer" },
//     { "Name": "John", "Job": "Programmer" },
//     { "Name": "Kevin", "Job": "Scientist" },
// ];

// var cards = $();
// // Store all the card nodes
// data.forEach(function(item, i) {
//   cards = cards.add(createCard(item));
// });

// // Add them to the page... for instance the <body>
// $(function() {
//   $('.cards_style').append(cards);
// });

window.sr = ScrollReveal();
sr.reveal('.about_content');
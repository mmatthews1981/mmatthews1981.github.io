$(document).ready(function() {
  $(".button").click(function() {

    var myMin = 1,
      myMax = 4,
      quote, author, result = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

    switch (result) {
      case 1:
        quote = "If everyone is thinking alike, then somebody isn't thinking.";
        author = "George S. Patton";
        break;
      case 2:
        quote = "An intelligent man is sometimes forced to be drunk to spend time with his fools.";
        author = "Ernest Hemingway";
        break;
      case 3:
        quote = "Our mind is capable of passing beyond the dividing line we have drawn for it. Beyond the pairs of opposites of which the world consists, other, new insights begin.";
        author = "Hermann Hesse";
        break;
      case 4:
        quote = "If little else, the brain is an educational toy.";
        author = "Tom Robbins";
        break;
      default:
        quote = "Click the button for a quote!";
        author = "Author";
        break;
    }

    $("#quote").html(quote);
    $("#author").html(" - " + author);

    $("#twitter").empty();

    twttr.widgets.createShareButton(
      'http://codepen.io/meredithmatthews/pen/WrrBdw',
      document.getElementById('twitter'), {
        count: 'none',
        text: quote + '-' + author
      }).then(function(el) {
      console.log("Button created.")
    });

  });
});
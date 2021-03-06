jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // Java Chart
  var doughnutData = [{
      value: 90,
      color: "#FC8153"
    },
    {
      value: 10,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("java").getContext("2d")).Doughnut(doughnutData);


  // JavaScript Chart
  var doughnutData = [{
      value: 90,
      color: "#FC8153"
    },
    {
      value: 10,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

  // Bootstrap Chart
  var doughnutData = [{
    value: 80,
    color: "#FC8153"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("reactjs").getContext("2d")).Doughnut(doughnutData);

  // WordPress Chart
  var doughnutData = [{
    value: 70,
    color: "#FC8153"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("python").getContext("2d")).Doughnut(doughnutData);

  // HTML Chart
  var doughnutData = [{
    value: 70,
    color: "#FC8153"
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("python").getContext("2d")).Doughnut(doughnutData);

  // Photoshop Chart
  var doughnutData = [{
    value: 70,
    color: "#FC8153",
  },
  {
    value: 30,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("aws").getContext("2d")).Doughnut(doughnutData);

  // Illustrator Chart
  var doughnutData = [{
    value: 80,
    color: "#FC8153"
  },
  {
    value: 20,
    color: "#ecf0f1"
  }
  ];

  var myDoughnut = new Chart(document.getElementById("springboot").getContext("2d")).Doughnut(doughnutData);

  // myDoughnut.font = "30px Arial";
  // myDoughnut.fillText("Hello World", 10, 50);
});

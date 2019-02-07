function makeHeader(){
    var headerHTML = "<div class=\"container-fluid\">"+
      "<div class=\"row\"\>"+
        "<div class=\"col-xl-12\">"+
          "<header>"+
              "<center>"+
                "<img class=\"img-fluid\" src=\"https://docs.google.com/drawings/d/e/2PACX-1vTMmMei0LpZNDdaPfdmn0VUnilF6pxfwbPzDAP5D0EKA6EBaXxth5oKoA0eu9-_62W5JW0OfYqGOozP/pub?w=985&amp;h=184\">"+
              "</center>"+
          "</header>"+
        "</div>"+
      "</div>"+

      "<div class=\"row\">"+
        "<div class=\"col-xl-12\">"+
          "<nav class=\"navbar navbar-expand-xl bg-dark navbar-dark\">"+

            "<a href=\"#\" class=\"navbar-brand\">David Moore</a>"+

            "<button class=\"navbar-toggler\"type=\"button\"data-toggle=\"collapse\"data-target=\"#collapsemenu\"aria-expanded=\"false\">"+

                "<span class=\"navbar-toggler-icon\"></span>"+
            "</button>"+

            "<div class=\"collapse navbar-collapse\" id=\"collapsemenu\">"+
                "<ul class=\"navbar-nav ml-auto\">"+
                    "<li class=\"nav-item\">"+
                        "<a href=\"index.html\" class=\"nav-link active\">Home</a>"+
                    "</li>"+
                    "<li class=\"nav-item\">"+
                        "<a href=\"about.html\" class=\"nav-link\">About</a>"+
                    "</li>"+
                    "<li class=\"nav-item\">"+
                        "<a href=\"#\" class=\"nav-link\">Form</a>"+
                    "</li>"+
                "</ul>"+
            "</div>"+

          "</nav>"+
        "</div>"+
      "</div>";

      $('body').append(headerHTML);
}

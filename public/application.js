var projects = {
  cherries: {
    title: "Cherry pest management reform",
    organisation: "Central Otago Cherry Board",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  cow: {
    title: "Effluent management in Waikato",
    organisation: "Waikato Regional Council",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  road: {
    title: "Overpass",
    organisation: "Auckland Road Enthusiasts Network",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. "
  },
  alcohol: {
    title: "Wellington City Council alcohol management reform"
  },
  kilbirnie: {
    title: "Kilbirnie Town Centre revitalisation"
  },
  aro: {
    title: "Aro Valley land rezoning"
  }
}


$(document).ready(function() {
  $( "#slider" ).slider();
  var tags = [ ];
  for(var key in projects) {
    tags.push(projects[key].title);
  };

  $( "#autocomplete" ).autocomplete({
    source: function( request, response ) {
      var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
      response( $.grep( tags, function( item ){
        return matcher.test( item );
      } ) );
    }
  });

  $( "#js-first-button" ).click(function() {
    $( "#js-first").addClass("invisipart").removeClass("activepart");
    $( "#js-second").addClass("activepart").removeClass("invisipart");
  });

  $( "#js-second-button" ).click(function() {
    $( "#js-second").addClass("invisipart").removeClass("activepart");
    $( "#js-third").addClass("activepart").removeClass("invisipart");
  });

  $( "#js-third-button" ).click(function() {
    $( "#js-third").addClass("invisipart").removeClass("activepart");
    $( "#js-fourth").addClass("activepart").removeClass("invisipart");
  });

  $( "#js-fourth-button" ).click(function() {
    $( "#js-fourth").addClass("invisipart").removeClass("activepart");
    $( "#js-fifth").addClass("activepart").removeClass("invisipart");
  });

  $( "#js-details-button" ).click(function() {
    $( "#js-details").addClass("invisipart").removeClass("activepart");
    $( "#js-details-post").addClass("activepart").removeClass("invisipart");
  });

});





$(document).ready(function(){
      
      // Sidebar
      $(".button-collapse").sideNav({menuWidth: 320, activationWidth: 70, edge: 'left'});
      // Dropdown
      $('.dropdown-button').dropdown({
           inDuration: 300,
           outDuration: 225,
           constrain_width: false, // Does not change width of dropdown to that of the activator
           hover: false, // Activate on hover
           gutter: 0, // Spacing from edge
           belowOrigin: false // Displays dropdown below the button
           }
      );
    });
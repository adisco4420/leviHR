import { Component, ViewEncapsulation, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() {
    $('.sidebar-toggle').on('click', function(e) {
      console.log('yes clicked');
      
      e.preventDefault();

      //Enable sidebar push menu
      if ($(window).width() > (767)) {
          if ($("body").hasClass('sidebar-collapse')) {
              $("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
          } else {
              $("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
          }
      }
      //Handle sidebar push menu for small screens
      else {
          if ($("body").hasClass('sidebar-open')) {
              $("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
          } else {
              $("body").addClass('sidebar-open').trigger('expanded.pushMenu');
          }
      }
      if ($('body').hasClass('fixed') && $('body').hasClass('sidebar-mini') && $('body').hasClass('sidebar-collapse')) {
          $('.sidebar').css("overflow", "visible");
          $('.main-sidebar').find(".slimScrollDiv").css("overflow", "visible");
      }
      if ($('body').hasClass('only-sidebar')) {
          $('.sidebar').css("overflow", "visible");
          $('.main-sidebar').find(".slimScrollDiv").css("overflow", "visible");
      };
  });

  $(".content-wrapper").on('click', function() {
      //Enable hide menu when clicking on the content-wrapper on small screens
      if ($(window).width() <= (767) && $("body").hasClass("sidebar-open")) {
          $("body").removeClass('sidebar-open');
      }
  });
  }

}


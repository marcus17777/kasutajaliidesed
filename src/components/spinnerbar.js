export default function spinnerBar($transitions) {
  return {
    link(scope, element, attrs) {
      element.addClass('hide'); // hide spinner bar by default

      // display the spinner bar whenever the route changes(the content part started loading)
      $transitions.onStart({}, () => {
        element.removeClass('hide')
      }); // show spinner bar

      // hide the spinner bar on rounte change success(after the content loaded)
      $transitions.onSuccess({}, function() {
        element.addClass('hide'); // hide spinner bar
        $('body').removeClass('page-on-load'); // remove page loading indicator
      });

      // handle errors
      $transitions.onError({}, () => element.addClass('hide')) // hide spinner bar
    }
  }
}

spinnerBar.$inject = ['$transitions']

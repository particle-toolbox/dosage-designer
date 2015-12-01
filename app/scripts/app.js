/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.displayInstalledToast = function() {
    // Check to make sure caching is actually enabled—it won't be in the dev environment.
    if (!document.querySelector('platinum-sw-cache').disabled) {
      document.querySelector('#caching-complete').show();
    }
  };
  
  app.cardSelected = function(e) {
    var nap = document.querySelector('neon-animated-pages');
    var newValue = e.detail.value;
    var oldValue = nap.selected;
    if(newValue < oldValue){
      nap.set('entryAnimation', 'slide-from-left-animation');
      nap.set('exitAnimation', 'slide-right-animation');
    } else {
      nap.set('entryAnimation', 'slide-from-right-animation');
      nap.set('exitAnimation', 'slide-left-animation');
    }
    nap.set('selected', newValue);
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    document.querySelector('neon-animated-pages').set('selected', 0);
    document.querySelector('dd-core-card').querySelector('dd-product-chip').set('productIndex', 2);
    document.querySelector('dd-capsule-card').querySelector('dd-product-chip').set('productIndex', 5);
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  

})(document);

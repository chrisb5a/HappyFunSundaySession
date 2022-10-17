# HappyFunSundaySession

Cordova Basic Plugin

1) The plugin has two functions:
  => echo with alert
  
  => simple addition

2) The plugin has two platform enabled:
  => ios 
  => web browser
  
3) The plugin is written in Js and Swift: 
  => to run on simulator, for testApp, after commmand:   
  
   cordova plugin add repo or path
  
   run the following:
 
   cordova plugin add cordova-plugin-add-swift-support --save
 
 Reason: this takes care of bridging between swift and javascript else build fails 
 
 4) In the testApp:
    => For ios platform:
     - in www/js/index.js :
     
     replace existing code with: 
     
     
     document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    //console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');

    HappyFunSundaySession.adds(
        "2,3",
        function(msg) {
          document
            .getElementById('deviceready').classList.add('ready');
          document.getElementsByTagName('h1')[0].innerHTML = "the sum is: " + msg;
        },
        function(err) {
          document
            .getElementById('deviceready')
            .innerHTML = '<p class="event received">' + err + '</p>';
        }
      );


}
    
  => For browser platform:
     - in www/js/index.js :
     
     replace existing code with: 
     
     
     document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    //console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');

    HappyFunSundaySession.echo(
        "Hello Plugin!",
        function(msg) {
          document
            .getElementById('deviceready').classList.add('ready');
          document.getElementsByTagName('h1')[0].innerHTML = "Plugin Ready!";
        },
        function(err) {
          document
            .getElementById('deviceready')
            .innerHTML = '<p class="event received">' + err + '</p>';
        }
      );


}
    
    

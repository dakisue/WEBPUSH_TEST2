'use strict';

self.addEventListener('push', function(event) {
  console.log('Received a push message', event);
  var title = 'WEBブラウザプッシュとは';
  var body = 'ブラウザへメッセージを送信できます';
  var icon = 'mori.png';
  var tag = 'simple-push-demo-notification-tag';
  ver link_url = 'http://www.morisawa.co.jp/'
  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag
      link_url: link_url 
    })
  );
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  clients.openWindow(event.notification.link_to);
}, false);

/*self.addEventListener('notificationclick', function(event) {
  console.log('On notification click: ', event.notification.tag);
  event.notification.close();
  event.waitUntil(clients.matchAll({
    type: 'window'
  }).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url === '/' && 'focus' in client) {
        return client.focus();
      }
    }
    alert(clients.openWindow);
    if (clients.openWindow) {
      return clients.openWindow('/');
    }
  }));
});*/

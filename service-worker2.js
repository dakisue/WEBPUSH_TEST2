'use strict';

self.addEventListener("push", function(event) {
  event.waitUntil(
    self.registration.showNotification("Push通知タイトル", {
      icon: "/icon.png",
      body: "Push通知本文",
      tag: "push-test",
      actions: [{
        action: "act1",
        title: "ボタン１"
      }, {
        action: "act2",
        title: "ボタン２"
      }],
      vibrate: [200, 100, 200, 100, 200, 100, 200]
    })
  )
})


/*self.addEventListener('push', function(event) {
  console.log('Received a push message', event);

  var title = 'メッセージのタイトル';
  var body = 'プッシュメッセージを受信';
  var icon = 'mori.png';
  var tag = 'simple-push-demo-notification-tag';

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag
    })
  );
});*/

/*self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  clients.openWindow("/");
}, false);*/

/* self.addEventListener('notificationclick', function(event) {
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
    if (clients.openWindow) {
      return clients.openWindow('/');
    }
  }));
});
*/
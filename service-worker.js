'use strict';

self.addEventListener('push', function(event) {
  console.log('Received a push message', event);
  var title = '謹賀新年';
  var body = 'あけましておめでとうございます';
  var icon = 'mori.png';
  var tag = 'simple-push-demo-notification-tag';
  
  /* メッセージサーバからテキストを受け取る処理 */
  console.log('receive Data: ', event.data);
  if (event.data != null) {
      var textdata = event.data.text();
      console.log('receive text: ', textdata);
      body = body + ":" + textdata;
  }
  
  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag
      //,actions: [
      //         {action: 'action1', title: "ボタン１"},
      //         {action: 'action2', title: "ボタン２"}
      //         ] 
    })
  );
});

self.addEventListener('notificationclick', function(event) {
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
      return clients.openWindow('https://www.panasonic.com/jp/corporate/technology-design/ptj/new.html');
    }
  }));
});

/*if (typeof window === "undefined") {
    self.addEventListener('notificationclick', function(event) {
        event.notification.close();

        if (event.action === 'action1') {
            clients.openWindow("/action1");
        } else {
            clients.openWindow("/");
        }
    }, false);
}*/

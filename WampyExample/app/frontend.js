

var ws = new Wampy('ws://127.0.0.1:8080/ws', { realm: 'crossbardemo' });
ws.subscribe('com.myapp.topic1', function (data) { console.log('Received com.myapp.topic1 event!'); })


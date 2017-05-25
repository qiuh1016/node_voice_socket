var net = require('net');  
  
var chatServer = net.createServer();  
  
chatServer.on('connection', function(sock) {  
  	sock.write('Hi!\n'); // 服务端向客户端输出信息，使用 write() 方法  

  
  // // client.end(); // 服务端结束该次会话  
  // console.log('connection')

  // // 接受来自客户端的信息    
  // client.on('data', function(data) {      
  //    console.log('data from client: ' + data);
  //    client.write('get data ' + data);
  // });  

	// 我们获得一个连接 - 该连接自动关联一个socket对象  
    console.log('CONNECTED: ' +  
        sock.remoteAddress + ':' + sock.remotePort);  
  
    // 为这个socket实例添加一个"data"事件处理函数  
    sock.on('data', function(data) {  
        console.log('DATA ' + sock.remoteAddress + ': ' + data);  
        // 回发该数据，客户端将收到来自服务端的数据  
        // sock.write('You said "' + data + '" \n');  
        sock.write(data)
    });  
  
    // 为这个socket实例添加一个"close"事件处理函数  
    sock.on('close', function(data) {  
        console.log('CLOSED: ' +  
            sock.remoteAddress + ' ' + sock.remotePort);  
    });  



});  

chatServer.listen(9000);  

// import { create, Client } from '@open-wa/wa-automate';
const wa = require('@open-wa/wa-automate');
var dataNomor = [];
let fourHour = new Date();
fourHour.setHours(fourHour.getHours() + 4);

wa.create()
.then(client => start(client))
.catch(console.log("error"));

function start(client) {
  client.onMessage(message => {
    let nowDate = new Date();
    if (message.body.length > 0 && message.from.length < 20) {
        if(!dataNomor.includes(message.from)){
          client.sendText(message.from, 'Terima Kasih sudah menghubungi saya,Mohon bersabar menunggu balasan dari Saya \n\n Bot Tzuyu');
        }
        if(fourHour < nowDate){
          dataNomor = [];
          fourHour = new Date();
          fourHour.setHours(fourHour.getHours() + 4);
        }
      dataNomor.push(message.from);
      console.log(dataNomor);

    }
  });


let promiseOnline= new Promise(function(resolve, reject) {
  setTimeout(() => resolve(client.isConnected()), 1000);
});

// resolve runs the first function in .then
promiseOnline.then(console.log);

let promiseHost= new Promise(function(resolve, reject) {
  setTimeout(() => resolve(client.getHostNumber()), 1000);
});

// resolve runs the first function in .then
promiseHost.then(console.log);



let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(client.getAllNewMessages()), 100);
});

// resolve runs the first function in .then
promise.then(console.log);


}
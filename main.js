const channel = new BroadcastChannel("abc-channel");

channel.onmessage = (e) => {
  console.log("on message", e);
};

setInterval(() => {
  console.log(" setInterval running");
  channel.postMessage("custom message from app1");
}, 5000);
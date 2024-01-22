// 引入 http 模塊
// const http = require("http");
//ReferenceError: require is not defined in ES module scope, you can use import instead
import http from "http";

// 定義主機名稱和端口
const hostname = "127.0.0.1"; // 本機
const port = 3000;

// 創建 HTTP 伺服器
const server = http.createServer((req, res) => {
  // 設置 HTTP 狀態碼為 200 OK
  res.statusCode = 200;

  // 設置標頭，指示回傳的內容類型為純文本
  res.setHeader("Content-Type", "text/plain");

  // 回傳 "Hello, World!" 到客戶端
  res.end("Hello, this is Yen! welcome to my webpage\n");
});

// 監聽指定的主機名稱和端口
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

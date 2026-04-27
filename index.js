const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceTemplate = require("./modules/replaceTemplate");

/////////FILES

// const textIn = fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data1) => {
//     if (err) console.log("errrr");
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data2) => {
//       console.log(data2);
//     });

//     fs.writeFile("./txt/final.txt", `${data1}\n${data} `, "utf-8", (err) => {
//       console.log("file written");
//     });
//   });
// });

///////////SERVER

const dataObj = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8"),
);
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8",
);
const tempCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8",
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/template-product.html`,
  "utf-8",
);

const server = http.createServer((request, response) => {
  const { query, pathname } = url.parse(request.url, true);
  const pathName = request.url;

  //OVERVIEW PAGE

  if (pathname === "/overview" || pathname === "/") {
    response.writeHead(200, { "content-type": "text/html" });

    const cardsHtml = dataObj
      .map((item) => replaceTemplate(tempCard, item))
      .join("");

    const output = tempOverview.replace("{%PRODUCT_CARDS}", cardsHtml);
    response.end(output);

    //PRODUCT PAGE
  } else if (pathname === "/product") {
    response.writeHead(200, { "content-type": "text/html" });
    const product = dataObj[query.id];
    const output = replaceTemplate(tempProduct, product);
    response.end(output);

    //API
  } else if (pathname === "/api") {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(dataObj);

    //NOT FOUND
  } else {
    response.writeHead(404, {
      "content-type": "text/html",
      myownheader: "hello",
    });
    response.end("<h1>page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server listening on port 8000");
});

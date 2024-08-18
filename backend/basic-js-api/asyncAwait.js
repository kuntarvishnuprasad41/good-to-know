function vishnuSaysHi() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hi");
    }, 2000);
  });
  return p;
}

async function main() {
  console.log(await vishnuSaysHi());
}

main();

import zipack from "./zipack.js";

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const jsonInfo = document.querySelector("#json-info");
const zipackInfo = document.querySelector("#zipack-info");
input.oninput = function () {
  try {
    const q = zipack.serialize(JSON.parse(input.value));
    output.value = [...q]
      .map((x) => x.toString(16).toUpperCase().padStart(2, 0))
      .join(" ");
    const jsonLength = new TextEncoder().encode(input.value).length;
    jsonInfo.textContent = `${jsonLength} bytes`;
    const percentage = Math.round((q.length * 100) / jsonLength);
    zipackInfo.textContent = `${q.length} bytes   (${percentage}%)`;
  } catch (err) {
    output.value = "JSON Parse Error";
    jsonInfo.textContent = ``;
    zipackInfo.textContent = ``;
  }
};

input.value = JSON.stringify({ name: "zipack", birth: 2020 });
input.oninput();

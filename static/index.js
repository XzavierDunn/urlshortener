let btn = document.getElementById("btn");
let url = document.getElementById("url");
let copy = document.getElementById("copy");

if (location.protocol !== "https:") {
  location.replace(
    `https:${location.href.substring(location.protocol.length)}`
  );
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  toggle();
  resClose();

  exact = url.value.replace(/(^\w+:|^)\/\//, "");
  fetch(`https://xd-url.com?url=${exact}`)
    .then((res) => res.json())
    .then((data) => {
      if (data != "Something is wrong with your URL") {
        setInfo(data);
      } else {
        alert(data);
        location.reload();
      }
      toggle();
      url.value = "";
    });
});

copy.addEventListener("click", () => {
  let urlBox = document.getElementById("urlBox");

  urlBox.select();
  urlBox.setSelectionRange(0, 99999);
  document.execCommand("copy");
});

let toggle = () => {
  let spinner = document.getElementById("spinner");

  if (spinner.style.display === "none") {
    spinner.style.display = "block";
  } else {
    spinner.style.display = "none";
  }
};

let setInfo = (data) => {
  let urlBox = document.getElementById("urlBox");
  let copy = document.getElementById("copy");

  urlBox.value = data;
  copy.innerHTML = "Copy";

  toggleRes();
};

let toggleRes = () => {
  let urlBox = document.getElementById("urlBox");
  let copy = document.getElementById("copy");

  if (urlBox.style.display == "none") {
    urlBox.style.display = "block";
    copy.style.display = "block";
  } else {
    urlBox.style.display = "none";
    copy.style.display = "none";
  }
};

let resClose = () => {
  let urlBox = document.getElementById("urlBox");
  let copy = document.getElementById("copy");
  urlBox.style.display = "none";
  copy.style.display = "none";
};

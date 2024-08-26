const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const imageFileNames = [
  "./images/pic1.jpg",
  "./images/pic2.jpg",
  "./images/pic3.jpg",
  "./images/pic4.jpg",
  "./images/pic5.jpg",
];
/* Declaring the alternative text for each image file */
const imageDescriptions = [
  "Beautiful sunset over the mountains",
  "Adorable puppy playing in the park",
  "Colorful hot air balloons in the sky",
  "Serenity of a calm lake surrounded by trees",
];
/* Looping through images */
// 循环遍历图像文件名数组
for (let i = 0; i < imageFileNames.length; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", imageFileNames[i]);
  newImage.setAttribute("alt", imageDescriptions[i]);
  newImage.addEventListener("click", function () {
    // 将当前图像的 src 属性值设置为 displayed-img <img> 元素的 src 属性值
    displayedImage.src = this.src;
  });
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function () {
  // 获取按钮的类名
  const className = btn.getAttribute("class");

  // 检查类名是否为 "dark"
  if (className === "dark") {
    // 如果是 "dark"，则更改类名为 "light"，文本内容为 "Lighten"，背景颜色为半透明黑色
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    // 如果不是 "dark"，则更改类名为 "dark"，文本内容为 "Darken"，背景颜色为透明
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});

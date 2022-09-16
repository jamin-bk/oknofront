// const inputElement = document.getElementById("id_image");
const image_input = document.getElementById("id_image");
image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.getElementById("obj").src = uploaded_image;
  });
  reader.readAsDataURL(this.files[0]);
});



// inputElement.addEventListener("change", handleFiles, false);
// var uploaded_image = "";
// inputElement.addEventListener("change", function(){
//     var img = document.createElement("img");
//     img.src = inputElement.value;
// })

// function handleFiles(files) {
//     // for (var i = 0, numFiles = files.length; i < numFiles; i++) {
//     var file = files[0];
//     console.log(file.name);

//     //   }
// }

//   function handleFiles(files) {
//     for (var i = 0; i < files.length; i++) {
//       var file = files[i];
  
//     //   var img = document.createElement("img");
//     //   img.classList.add("obj");
//     //   img.file = file;
      
//     //   img.src = ../${imageName};
//         var img = document.getElementById('obj')
//         var imageName = file.name;
//         console.log(imageName);
//         img.src = `/${imageName}`
//     //   preview.appendChild(img); // Предполагается, что "preview" это div, в котором будет отображаться содержимое.
  
//     //   var reader = new FileReader();
//     //   reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
//     //   reader.readAsDataURL(file);
//     }
//   }
  

// window.URL = window.URL || window.webkitURL;

// var fileSelect = document.getElementsByTagName("label"),
//     fileElem = document.getElementById("fileElem"),
//     fileList = document.getElementById("fileList");

// fileSelect.addEventListener("click", function (e) {
//   if (fileElem) {
//     fileElem.click();
//   }
//   e.preventDefault(); // prevent navigation to "#"
// }, false);

// function handleFiles(files) {
//   if (!files.length) {
//     fileList.innerHTML = "<p>No files selected!</p>";
//   } else {
//     var list = document.createElement("ul");
//     for (var i = 0; i < files.length; i++) {
//       var li = document.createElement("li");
//       list.appendChild(li);

//       var img = document.createElement("img");
//       img.src = window.URL.createObjectURL(files[i]);
//       img.height = 60;
//       img.onload = function() {
//         window.URL.revokeObjectURL(this.src);
//       }
//       li.appendChild(img);
//       var info = document.createElement("span");
//       info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
//       li.appendChild(info);
//     }
//   }
// }
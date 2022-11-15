function change(direction){
  const images = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6'];
  let newNum = 0;
  
  let imagePath = document.getElementById('img').src;
  let len = imagePath.length;
  let imageName = imagePath.slice(len-10, len-4);
  let num = images.indexOf(imageName);
  
  if (direction == "nxt"){
    newNum = num + 1;
  }else{
    if (num == 0){
      newNum = 5;
    }else{
      newNum = num - 1;
    }
  }
  
  let newPath = imagePath.slice(0, len-10) + images[newNum%6] + ".jpg";
  
  document.getElementById('img').src = newPath;
}

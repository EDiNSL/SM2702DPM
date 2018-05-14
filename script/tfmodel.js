var ctx = document.getElementById('imageCanvas').getContext('2d');
var img = new Image();
var imgData;
var imgDataArray = [];
var data_final;
var loaded=false;
var model_2;
var statusReport=document.querySelector('#status');
var results=["BIG", "AVERAGE", "SMALL"];
var comment=["That's more like it.", "Meh", "Are you even a man?"]

var loader = document.querySelector('#loader');
loader.addEventListener('change', printImage, false);

function printImage(e) {
  var reader = new FileReader();
  reader.onload = function(event) {
    img.onload = function() {
      ctx.drawImage(img, 0, 0, 224, 224);
    }
    img.src = event.target.result;
  }
  reader.readAsDataURL(e.target.files[0]);
}

function load_data() {
  imgData = ctx.getImageData(0, 0, 224, 224).data;
  for (var i = 0, n = 0; i < imgData.length; i++) {

    if (i % 4 != 3) {
      imgDataArray[n] = imgData[i] / 255;
      n++;
    }
  }

  statusReport.innerHTML='[INFO] Image converted to array';
  data_final = tf.tensor3d(imgDataArray, [224, 224, 3], 'float32');
  statusReport.innerHTML='[INFO] Transformed array to 3D';
  data_final = data_final.reshape([1, 224, 224, 3]);
  statusReport.innerHTML='[INFO] One more dimension added';

  if (loaded) {
    predict();
  } else {
    wait_model_2();
  }
}

async function wait_model_2() {
  statusReport.innerHTML='[INFO] Loading Model';
  model_2 = await tf.loadModel('tfjs_softmax/model.json');
  predict();
  loaded=true;
};

function predict() {
  statusReport.innerHTML='[INFO] Model loaded, making predictions';
  const output = model_2.predict(data_final);
  statusReport.innerHTML='[INFO] Exporting predictions';
  const predictions = Array.from(output.dataSync());
  for (var i = 0; i < predictions.length; i++) {
    predictions[i] = Math.round(predictions[i] * 100);
  }
  console.log(predictions);

  var index = 0;
  for (var i = 0, temp = 0; i < predictions.length; i++) {
    if (predictions[i]>=temp) {
      index = i;
    }
  }
  document.querySelector('#result').innerHTML=results[index];
  statusReport.innerHTML=comment[index];
}

var ctx = document.getElementById('imageCanvas').getContext('2d');
var img = new Image();
var imgData;
var imgDataArray = [];
var data_final;

var loader = document.querySelector('#loader');
loader.addEventListener('change', printImage, false);

function printImage(e){
  var reader = new FileReader();
  reader.onload = function(event){
      img.onload = function(){
          ctx.drawImage(img, 0, 0, 224, 224);
      }
      img.src = event.target.result;
  }
  reader.readAsDataURL(e.target.files[0]);
}

  function load_data() {
    imgData = ctx.getImageData(0, 0, 224, 224).data;
    for (var i = 0, n = 0; i < imgData.length; i++) {

      if (i%4!=3){
        imgDataArray[n] = imgData[i]/255;
        n++;
      }
    }

    // tf.fromPixels(img, 3).print();
    console.log('[INFO] Image converted to array');
    data_final = tf.tensor3d(imgDataArray, [224, 224, 3], 'float32');
    // data_final.print();
    console.log('[INFO] Transformed array to 3D');
    data_final = data_final.reshape([1, 224, 224, 3]);
    console.log('[INFO] One more dimension added');
    // wait_model_1(data_final);
    wait_model_2(data_final);
    // wait_model_3(data_final);
  }

  // async function wait_model_1(response)
  //     {
  //         var arr=response;
  //         const model_1= await tf.loadModel('tfjs/model.json');
  //         console.log('[INFO] Model loaded, making predictions');
  //         const output = model_1.predict(arr);
  //         console.log('[INFO] Exporting predictions');
  //         const predictions=Array.from(output.dataSync());
  //         for (var i = 0; i < predictions.length; i++) {
  //           predictions[i] = Math.round(predictions[i]*100);
  //         }
  //         console.log(predictions);
  //     };

      async function wait_model_2(response)
          {
              var arr=response;
              const model_2= await tf.loadModel('tfjs_softmax/model.json');
              console.log('[INFO] Model loaded, making predictions');
              const output = model_2.predict(arr);
              console.log('[INFO] Exporting predictions');
              const predictions=Array.from(output.dataSync());
              for (var i = 0; i < predictions.length; i++) {
                predictions[i] = Math.round(predictions[i]*100);
              }
              console.log(predictions);
          };
          // async function wait_model_3(response)
          //     {
          //         var arr=response;
          //         const model_3= await tf.loadModel('tfjs_test/model.json');
          //         console.log('[INFO] Model loaded, making predictions');
          //         const output = model_3.predict(arr);
          //         console.log('[INFO] Exporting predictions');
          //         const predictions=Array.from(output.dataSync());
          //         for (var i = 0; i < predictions.length; i++) {
          //           predictions[i] = Math.round(predictions[i]*100);
          //         }
          //         console.log(predictions);
          //     };

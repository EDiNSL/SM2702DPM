// var ndarray = require("ndarray")
// var ops = require("ndarray-ops")
var ctx = document.getElementById('imageCanvas').getContext('2d');
var img = new Image();
img.src = 'test.jpg';
var inputValue = new Array();
// inputValue[0]=new Array()

const model = new KerasJS.Model({
  filepath: 'model_final.bin',
  gpu: false
});

img.onload = function () {
  ctx.drawImage(img, 0, 0, 224, 224);
  // const {data, width, height} = ctx.getImageData(0, 0, 224, 224);
  var imgData = ctx.getImageData(0, 0, 224, 224).data;
  // for (var h = 0, n = 0; h < 224; h++) {
  //   inputValue[0][h] = new Array();
  //   for (var w = 0; w < 224; w++) {
  //     inputValue[0][h][w] = new Array();
  //     for (var d = 0; d < 4; d++) {
  //       if (n%4 !=3) {
  //         inputValue[0][h][w][d] = imgData[n]/255;
  //       }
  //       n++
  //     }
  //   }
  // }
  for (var i = 0, n = 0; i < imgData.length; i++) {
    if (i%4 != 3) {
      inputValue[n] = imgData[i]/255;
      n++;
    }
  }
    inputValue = new Float32Array(inputValue);

  // let dataTensor = ndarray(data, [width, height, 4]);
  // let dataProcessedTensor = ndarray(new Float32Array(width*height*3), [width, height, 3]);
  // ops.assign(dataProcessedTensor.pick(null, null, 0), dataTensor.pick(null, null, 0));
  // ops.assign(dataProcessedTensor.pick(null, null, 1), dataTensor.pick(null, null, 1));
  // ops.assign(dataProcessedTensor.pick(null, null, 2), dataTensor.pick(null, null, 2));
  //
  // for (var i = 0; i < dataProcessedTensor.data.length; i++) {
  //   dataProcessedTensor.data[i] = dataProcessedTensor.data[i]/255;
  // }

  // console.log(dataProcessedTensor.data);
  console.log(inputValue)

  // var inputKey=Object.keys(model.inputTensors)[0];

////////
  model.ready()
    .then(function() {
      console.log("1");
      var inputData = {
        input: inputValue,
      };
      console.log("2 " + inputData);
      return model.predict(inputData);
    })
    .then(outputData => {
      var out = outputData['output']
        console.log('Output: ' + '\n' + out + '\n');
        console.log('Class: ' + '\n' + out.indexOf(Math.max.apply(null,out)) + '\n');
    })
    .catch(function(err) {
      console.log(err)
    });

}

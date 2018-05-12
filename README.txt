The Website
0) The website, while still in testing and development, is avaliable at https://edinsl.github.io/SM2702DPM/

0) It is recommended to use Firefox or Chrome to visit the website.

1) After landing to the page, open the console by right-click on the page, select Inspect Element, then go to the console tab.

2) Select an image by clicking on the 'Select' button on the page. 

3) Once it finish loading the image, click on the 'Submit' to start the prediction

4) In the console, it will output an array of three integers, each represents the probability of 'Big', 'Average', and 'Small' in order once it finishes the prediction.

Known Bugs
- Due to WebGL error, selecting another image to make another prediction may return an array of zeros. Please reload the page before making any predictions.

Running the Machine in Python
0) The Pyhton version uses a differntly trained network. Results may be different from the one in the paper.

0) The following instruction is tested and based on Windows OS, but basic procedure should apply to all.

1) Download and install Miniconda 64bit.

2) Open the Anaconda Prompt in Administrator Mode and run the following commands

conda install -c conda-forge tensorflow
conda install -c conda-forge keras
conda install -c conda-forge pillow
set "KERAS_BACKEND=tensorflow"

3)Download the repository https://github.com/EDiNSL/SM2702DPM and extract to a location

4)In Anaconda Prompt, navigate to the location of the repository folder you extracted. In windows, the command will be

cd path:\to\your\extract\location

5)Run the neural network with the following command

python prediction.py

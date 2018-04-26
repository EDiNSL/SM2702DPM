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

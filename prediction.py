import numpy as np
from keras.preprocessing.image import ImageDataGenerator, img_to_array, load_img
from keras.models import Sequential, load_model
from keras.layers import Dropout, Flatten, Dense
from keras import applications
from keras.utils.np_utils import to_categorical
import matplotlib.pyplot as plt
import math
import cv2

# dimensions of our images.
img_width, img_height = 224, 224
model_path = 'C:/Users/EDiNFL/Desktop/SM2702/model_final.h5'
image_path = 'C:/Users/EDiNFL/Desktop/SM2702/test8.jpg'
class_dir = 'C:/Users/EDiNFL/Desktop/SM2702/class_indices.npy'

def predict():

    class_dictionary = np.load(class_dir).item()

    num_classes = len(class_dictionary)

    print("[INFO] loading and preprocessing image...")
    image = load_img(image_path, target_size=(img_width, img_height))
    image = img_to_array(image)

    image = image / 255

    image = np.expand_dims(image, axis=0)

    model = load_model(model_path)

    class_predicted = model.predict_classes(image)

    probabilities = model.predict_proba(image)

    inID = class_predicted[0]

    inv_map = {v: k for k, v in class_dictionary.items()}

    label = inv_map[inID]

    print("Image ID: {}, Label: {}".format(inID, label))

    print(probabilities)


predict()

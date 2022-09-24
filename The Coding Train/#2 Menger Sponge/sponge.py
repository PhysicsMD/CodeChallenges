# Import libraries
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import numpy as np
import math
 
# Change the Size of Graph using
# Figsize
fig = plt.figure(figsize=(10, 10))
 
# Generating a 3D sine wave
ax = plt.axes(projection='3d')

DEPTH = 3

# Create axis
axes = [math.floor(math.pow(3, DEPTH)), math.floor(math.pow(3, DEPTH)), math.floor(math.pow(3, DEPTH))]
 
# Create Data
data = np.ones(axes)
for deep in range(DEPTH):
   for x in range(math.floor(math.pow(3, DEPTH))):
      for y in range(math.floor(math.pow(3, DEPTH))):
         for z in range(math.floor(math.pow(3, DEPTH))):
            sum = 0
            if(x%(3*math.pow(3, deep)) >= math.pow(3, deep) and x%(3*math.pow(3, deep)) < 2*math.pow(3, deep)):
               sum += 1
            if(y%(3*math.pow(3, deep)) >= math.pow(3, deep) and y%(3*math.pow(3, deep)) < 2*math.pow(3, deep)):
               sum += 1
            if(z%(3*math.pow(3, deep)) >= math.pow(3, deep) and z%(3*math.pow(3, deep)) < 2*math.pow(3, deep)):
               sum += 1
            if(sum >= 2):
               data[x][y][z] = 0
            sum = 0


# Controll Tranperency
alpha = 1
 
# Control colour
colors = np.empty(axes + [4])

for i in range(math.floor(math.pow(3, DEPTH))):
   colors[i] = [1, 1, 1, alpha]

# trun off/on axis
plt.axis('off')
 
# Voxels is used to customizations of
# the sizes, positions and colors.
ax.voxels(data, facecolors=colors)
plt.show()
from ctypes.wintypes import RGB
import pygame
import time
import math

# Class Star
from drops import *

# PYGAME INITIALIZATION
success, failure = pygame.init()

SCREEN_WIDTH = 400
SCREEN_HEIGHT = 400
SCREEN_DEPTH = 40

screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))  # Init the screen
pygame.display.set_caption("Purple Rain")

NUM_DROPS = 180
rain = [];

for i in range(NUM_DROPS):
   starOBJ = Drop(SCREEN_WIDTH, SCREEN_HEIGHT, SCREEN_DEPTH)
   rain.append(starOBJ)


done = False #Check whether the program should run

#Main loop
while not done:

   #EVENT HANDLER
   for event in pygame.event.get():
      if event.type == pygame.QUIT: #Exit button
         done = True

   #DRAWING CELLS
   for drop in rain:
      drop.updateCoords(SCREEN_WIDTH, SCREEN_HEIGHT, SCREEN_DEPTH)
      pygame.draw.line(screen, RGB(128,0,128),(drop.pastX, drop.pastY), (drop.x, drop.y), math.floor(drop.z/SCREEN_DEPTH*8+3))

   pygame.display.update() #To update the screen
   time.sleep(.01)
   screen.fill(RGB(216,191,216))
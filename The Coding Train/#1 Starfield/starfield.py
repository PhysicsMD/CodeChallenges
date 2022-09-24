from ctypes.wintypes import RGB
import pygame
import time
import math

# Class Star
from stars import *

# PYGAME INITIALIZATION
success, failure = pygame.init()

SCREEN_WIDTH = 400
SCREEN_HEIGHT = 400
SCREEN_DEPTH = 40

screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))  # Init the screen
pygame.display.set_caption("StarField")

NUM_STARS = 250
star_array = [];

for i in range(NUM_STARS):
   starOBJ = Star(SCREEN_WIDTH, SCREEN_HEIGHT, SCREEN_DEPTH)
   star_array.append(starOBJ)




done = False #Check whether the program should run

#Main loop
while not done:

   #EVENT HANDLER
   for event in pygame.event.get():
      if event.type == pygame.QUIT: #Exit button
         done = True

   #DRAWING CELLS
   for star in star_array:
      star.updateCoords(SCREEN_WIDTH, SCREEN_HEIGHT, SCREEN_DEPTH)
      pygame.draw.line(screen, RGB(255,255,255),(star.pastX, star.pastY), (star.x, star.y), math.floor(star.pastZ/SCREEN_DEPTH*2+1))
      pygame.draw.circle(screen, RGB(255,255,255), (star.x, star.y), star.z/SCREEN_DEPTH+1)

   pygame.display.update() #To update the screen
   time.sleep(.01)
   screen.fill(RGB(0, 0, 0))


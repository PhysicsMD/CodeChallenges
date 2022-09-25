from ctypes.wintypes import RGB
import pygame
import time

from snake import *

# PYGAME INITIALIZATION
success, failure = pygame.init()

SCREEN_WIDTH = 15
SCREEN_HEIGHT = 15
PIXEL_SCALE = 15

screen = pygame.display.set_mode((SCREEN_WIDTH*PIXEL_SCALE, SCREEN_HEIGHT*PIXEL_SCALE))  # Init the screen
pygame.display.set_caption("Snake Game")

snake = Snake(SCREEN_WIDTH, SCREEN_HEIGHT)

done = False #Check whether the program should run

#Main loop
while not done:

   #EVENT HANDLER
   for event in pygame.event.get():
      if event.type == pygame.QUIT: #Exit button
         done = True

   if pygame.key.get_pressed()[pygame.K_a]:
      snake.directionUpdate("LEFT")
   if pygame.key.get_pressed()[pygame.K_d]:
      snake.directionUpdate("RIGHT")
   if pygame.key.get_pressed()[pygame.K_w]:
      snake.directionUpdate("UP")
   if pygame.key.get_pressed()[pygame.K_s]:
      snake.directionUpdate("DOWN")

   snake.positionUpdate()
   
   for food in snake.foods:
      pygame.draw.rect(screen, RGB(0,0,255), pygame.Rect(food[0]*PIXEL_SCALE, food[1]*PIXEL_SCALE, PIXEL_SCALE, PIXEL_SCALE))

   for link in snake.position:
      pygame.draw.rect(screen, RGB(255,255,255), pygame.Rect(link[0]*PIXEL_SCALE, link[1]*PIXEL_SCALE, PIXEL_SCALE, PIXEL_SCALE))

   pygame.display.update() #To update the screen
   time.sleep(.2)
   screen.fill(RGB(0, 0, 0))
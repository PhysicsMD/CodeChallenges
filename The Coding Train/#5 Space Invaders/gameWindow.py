from ctypes.wintypes import RGB
import pygame

from gameEngine import *

# PYGAME INITIALIZATION
success, failure = pygame.init()

SCREEN_WIDTH = 224
SCREEN_HEIGHT = 256
SCREEN_SCALE = 3

screen = pygame.display.set_mode((SCREEN_WIDTH*SCREEN_SCALE, SCREEN_HEIGHT*SCREEN_SCALE))  # Init the screen
pygame.display.set_caption("Space Invaders")

engine = GEngine(screen, SCREEN_WIDTH, SCREEN_HEIGHT, SCREEN_SCALE)

done = False #Check whether the program should run

#Main loop
while not done:

   #EVENT HANDLER
   for event in pygame.event.get():
      if event.type == pygame.QUIT: #Exit button
         done = True
   
   if pygame.key.get_pressed()[pygame.K_a] or pygame.key.get_pressed()[pygame.K_LEFT]:
      engine.controlHandler("Left")
   if pygame.key.get_pressed()[pygame.K_d] or pygame.key.get_pressed()[pygame.K_RIGHT]:
      engine.controlHandler("Right")
   if pygame.key.get_pressed()[pygame.K_w] or pygame.key.get_pressed()[pygame.K_UP]:
      engine.controlHandler("Up")
   if pygame.key.get_pressed()[pygame.K_s] or pygame.key.get_pressed()[pygame.K_DOWN]:
      engine.controlHandler("Down")
   if pygame.key.get_pressed()[pygame.K_SPACE]:
      engine.controlHandler("Space")

   engine.update()

   pygame.display.update() #To update the screen
   screen.fill(RGB(0,0,0))
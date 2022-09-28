import pygame
import os
import math
import time
import sys

from score import *
from sounds import *

class GEngine:
   def __init__(self, screen, BoundsX, BoundsY, PIXEL_SCALE):
      self.BoundsX = BoundsX
      self.BoundsY = BoundsY
      self.PIXEL_SCALE = PIXEL_SCALE
      self.window = screen
      self.menu_pointer = 0
      self.state = "Menu"
      self.timeLastInput = time.time()
      self.timeLastBlink = time.time()
      self.blinkOn = True
      pygame.font.init()
      self.text_size = math.floor(28/3*self.PIXEL_SCALE)
      self.arcade_font = pygame.font.Font('arcade.ttf', self.text_size)
      self.scoreBoard = Score()
      self.update()
   
   def controlHandler(self, input):
      if(self.state == "Menu"):
         if(time.time()-self.timeLastInput > .25):
            self.blinkOn = False
            self.timeLastInput = time.time()
            if(input == "Down"):
               if(self.menu_pointer < 2):
                  self.menu_pointer += 1
            if(input == "Up"):
               if(self.menu_pointer > 0):
                  self.menu_pointer -= 1
            if(input == "Space"):
               key = ["Game","Scores","Exit"]
               self.state = key[self.menu_pointer]
      if(self.state == "Scores"):
         if(time.time()-self.timeLastInput > .25):
            self.timeLastInput = time.time()
            if(input == "Space"):
               self.state = "Menu"

   def update(self):
      if(self.state == "Menu"):
         cover = pygame.image.load(os.path.join("images", 'invaders.png'))
         cover = pygame.transform.rotate(cover, 90)
         cover_rect = cover.get_rect()
         cover = pygame.transform.scale(cover, (self.BoundsX*self.PIXEL_SCALE, self.BoundsY*self.PIXEL_SCALE))
         self.window.blit(cover, cover_rect)
         title = pygame.image.load(os.path.join("images", 'si_logo.png'))
         title = pygame.transform.scale(title, (self.BoundsX*self.PIXEL_SCALE*.8, self.BoundsY*.4*self.PIXEL_SCALE))
         title_rect = title.get_rect()
         title_rect.center = ((self.BoundsX*self.PIXEL_SCALE/2, self.BoundsY*self.PIXEL_SCALE/4))
         self.window.blit(title, title_rect)
         
         if(time.time()-self.timeLastBlink > 1):
            self.timeLastBlink = time.time()
            self.blinkOn = not self.blinkOn

         if(self.menu_pointer == 0 and self.blinkOn):
            self.window.blit(self.arcade_font.render("Play Game", True, (255, 255, 255)), ((self.BoundsX*self.PIXEL_SCALE-self.text_size*9)/2, self.BoundsY*self.PIXEL_SCALE - self.text_size*8))
         elif(self.menu_pointer != 0):
            self.window.blit(self.arcade_font.render("Play Game", True, (255, 255, 255)), ((self.BoundsX*self.PIXEL_SCALE-self.text_size*9)/2, self.BoundsY*self.PIXEL_SCALE - self.text_size*8))

         if(self.menu_pointer == 1 and self.blinkOn):
            self.window.blit(self.arcade_font.render("HighScores", True, (255, 255, 255)), ((self.BoundsX*self.PIXEL_SCALE-self.text_size*10)/2, self.BoundsY*self.PIXEL_SCALE - self.text_size*6))
         elif(self.menu_pointer != 1):
            self.window.blit(self.arcade_font.render("HighScores", True, (255, 255, 255)), ((self.BoundsX*self.PIXEL_SCALE-self.text_size*10)/2, self.BoundsY*self.PIXEL_SCALE - self.text_size*6))

         if(self.menu_pointer == 2 and self.blinkOn):
            self.window.blit(self.arcade_font.render("Exit", True, (255, 255, 255)), ((self.BoundsX*self.PIXEL_SCALE-self.text_size*4)/2, self.BoundsY*self.PIXEL_SCALE - self.text_size*4))
         elif(self.menu_pointer != 2):
            self.window.blit(self.arcade_font.render("Exit", True, (255, 255, 255)), ((self.BoundsX*self.PIXEL_SCALE-self.text_size*4)/2, self.BoundsY*self.PIXEL_SCALE - self.text_size*4))
      if(self.state == "Game"):
         self.window.blit(self.arcade_font.render("Hi-Score", True, (255, 255, 255)), ((self.BoundsX*self.PIXEL_SCALE-self.text_size*8)/4, self.text_size*0))
         self.window.blit(self.arcade_font.render("Score", True, (255, 255, 255)), ((self.BoundsX*self.PIXEL_SCALE-self.text_size*5)*3/4, self.text_size*0))
         self.window.blit(self.arcade_font.render((" " + "0"*(6-len(self.scoreBoard.scoreAt(0)[2]))+self.scoreBoard.scoreAt(0)[2] + " "), True, (255, 255, 255)), ((self.BoundsX*self.PIXEL_SCALE-self.text_size*8)/4, self.text_size*1))
         self.window.blit(self.arcade_font.render("000000", True, (255, 255, 255)), ((self.BoundsX*self.PIXEL_SCALE-self.text_size*5)*3/4, self.text_size*1))
         pygame.draw.line(self.window, (255,255,255), (0,self.text_size*2.5), (self.BoundsX*self.PIXEL_SCALE,self.text_size*2.5), self.PIXEL_SCALE)
         pygame.draw.line(self.window, (255,255,255), (0,self.BoundsY*self.PIXEL_SCALE - self.text_size*2), (self.BoundsX*self.PIXEL_SCALE,self.BoundsY*self.PIXEL_SCALE - self.text_size*2), self.PIXEL_SCALE)

         lives = 3
         self.window.blit(self.arcade_font.render(str(lives), True, (255, 255, 255)), ((self.text_size), self.BoundsY*self.PIXEL_SCALE - self.text_size*1.8))

      if(self.state == "Scores"):
         title = pygame.image.load(os.path.join("images", 'si_logo.png'))
         title = pygame.transform.scale(title, (self.BoundsX*self.PIXEL_SCALE*.6, self.BoundsY*.3*self.PIXEL_SCALE))
         title_rect = title.get_rect()
         title_rect.center = ((self.BoundsX*self.PIXEL_SCALE/2, self.BoundsY*self.PIXEL_SCALE/5))
         self.window.blit(title, title_rect)

         self.window.blit(self.arcade_font.render("HighScores", True, (255, 255, 255)), ((self.BoundsX*self.PIXEL_SCALE-self.text_size*10)/2, self.BoundsY*self.PIXEL_SCALE - self.text_size*17))

         for i in range(10):
            score = self.scoreBoard.scoreAt(i)
            scorestring = score[0] + " " + score[1]
            scorestring += "."*(8-len(score[2])) + score[2]

            if(i == 0):
               self.window.blit(self.arcade_font.render(scorestring, True, (255, 0, 255)), ((self.BoundsX*self.PIXEL_SCALE-self.text_size*len(scorestring))/2, self.BoundsY*self.PIXEL_SCALE - self.text_size*(14-1.2*i)))
            else:
               self.window.blit(self.arcade_font.render(scorestring, True, (255, 255, 255)), ((self.BoundsX*self.PIXEL_SCALE-self.text_size*len(scorestring))/2, self.BoundsY*self.PIXEL_SCALE - self.text_size*(14-1.2*i)))

      if(self.state == "Exit"):
         pygame.quit()
         sys.exit()
      

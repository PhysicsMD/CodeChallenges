import math
from random import randint

class Snake:
   
   def __init__(self, BoundsX, BoundsY):
      self.position = []
      self.position.insert(0, [math.ceil(BoundsX/2-1), math.ceil(BoundsY/2-1)])
      self.length = 3
      self.direction = "RIGHT"
      self.maxX = BoundsX
      self.maxY = BoundsY
      self.foods = []
      self.spawnfood(1)
   
   def addLength(self):
      self.length += 1
   
   def moveLeft(self):
      self.position.insert(0, [self.position[0][0]-1, self.position[0][1]])

   def moveRight(self):
      self.position.insert(0, [self.position[0][0]+1, self.position[0][1]])
   
   def moveUp(self):
      self.position.insert(0, [self.position[0][0], self.position[0][1]-1])

   def moveDown(self):
      self.position.insert(0, [self.position[0][0], self.position[0][1]+1])

   def directionUpdate(self, direction):
      self.direction = direction

   def positionUpdate(self):
      if(self.direction == "RIGHT" and self.position[0][0] < self.maxX-1):
         self.moveRight()
      elif(self.direction == "LEFT" and self.position[0][0] > 0):
         self.moveLeft()
      elif(self.direction == "UP" and self.position[0][1] > 0):
         self.moveUp()
      elif(self.direction == "DOWN" and self.position[0][1] < self.maxY-1):
         self.moveDown()
      else:
         self.position = []
         self.position.insert(0, [math.floor(self.maxX/2), math.floor(self.maxY/2)])
         self.length = 3
         self.direction = "RIGHT"
         self.foods = []
         self.spawnfood(1)

      
      if(self.position.count(self.position[0])> 1):
         self.direction = "GameOver"
         self.positionUpdate()

      if(self.foods.count(self.position[0]) > 0):
         self.foods.remove(self.position[0])
         self.spawnfood(1)
         self.length += 1


      if(len(self.position)-1 == self.length):
         self.position.pop()
   
   def spawnfood(self, num):
      while(len(self.foods) < num):
         xcoord = randint(0, self.maxX-1)
         ycoord = randint(0, self.maxY-1)
         if(self.position.count([xcoord, ycoord]) == 0):
            self.foods.append([xcoord, ycoord])
   


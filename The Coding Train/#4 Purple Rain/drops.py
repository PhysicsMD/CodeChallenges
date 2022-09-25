from random import randint

class Drop:
   
   def __init__(self, BoundsX, BoundsY, BoundsZ):
      self.newCoords(BoundsX, BoundsY, BoundsZ)
   
   def updateCoords(self, BoundsX, BoundsY, BoundsZ):
      bufferGap = 300
      if(self.y > BoundsY+bufferGap):
         self.newCoords(BoundsX, BoundsY, BoundsZ)
      else:
         if(self.y-self.pastY > 50):
            self.pastX = self.x
            self.pastY = self.nextCoordY(self.pastY, BoundsY)
         
         self.pastCount += 1 

         self.y = self.nextCoordY(self.y, BoundsY)
         
   
   def nextCoordY(self, coordY, BoundsY):
      return coordY + self.speed
   
   def newCoords(self, width, height, depth):
      self.x = randint(0, width)
      self.y = 0
      self.z = randint(0, depth)
      self.speed = randint(0, height/100)+5
      self.pastX = self.x
      self.pastY = self.y
      self.pastCount = 0


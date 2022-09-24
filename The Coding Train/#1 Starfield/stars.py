from random import randint


class Star:
   
   def __init__(self, BoundsX, BoundsY, BoundsZ):
      self.newCoords(BoundsX, BoundsY, BoundsZ)
   
   def updateCoords(self, BoundsX, BoundsY, BoundsZ):
      bufferGap = 300
      if(self.x < 0-bufferGap or self.y < 0-bufferGap or self.z < 0-bufferGap or self.x > BoundsX+bufferGap or self.y > BoundsY+bufferGap or self.z > BoundsZ+1):
         self.newCoords(BoundsX, BoundsY, BoundsZ)
      else:
         if(self.pastCount >= 40):
            self.pastX = self.nextCoordX(self.pastX, BoundsX)
            self.pastY = self.nextCoordY(self.pastY, BoundsY)
         
         self.pastZ = self.z
         self.pastCount += 1 

         self.x = self.nextCoordX(self.x, BoundsX)
         
         self.y = self.nextCoordY(self.y, BoundsY)
         
         self.z = self.nextCoordZ(self.z)
   
   def nextCoordX(self, coordX, BoundsX):
      if(coordX > BoundsX/2):
         return coordX + (coordX - BoundsX/2)/50
      else:
         return coordX - (BoundsX/2 - coordX)/50
   
   def nextCoordY(self, coordY, BoundsY):
      if(coordY > BoundsY/2):
         return coordY + (coordY - BoundsY/2)/50
      else:
         return coordY - (BoundsY/2 - coordY)/50
   
   def nextCoordZ(self, coordZ):
      return coordZ + .01
   
   def newCoords(self, width, height, depth):
      EDGE_BUFFER = 50
      self.x = randint(0, width-EDGE_BUFFER)+EDGE_BUFFER
      self.y = randint(0, height-EDGE_BUFFER)+EDGE_BUFFER
      self.z = randint(0, depth)
      self.pastX = self.x
      self.pastY = self.y
      self.pastZ = self.z
      self.pastCount = 0


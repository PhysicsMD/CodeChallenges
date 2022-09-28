class Score:
   def __init__(self):
      self.scoreNames = ["AAA", "AAA", "AAA", "AAB", "AAC", "ASA", "   ", "   ", "   ", "   "]
      self.scoreTotals = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]
      self.scoreKey = ["1st","2nd","3rd","4th", "5th", "   ", "   ", "   ", "   ", "   "]

   def isNewHighScore(self, Score):
      return Score > self.scoreTotals[9]
   
   def addNewHighScore(self, Name, Score):
      print("woops")

   def scoreAt(self, index):
      return [self.scoreKey[index], self.scoreNames[index], str(self.scoreTotals[index])]

import pygame

path = "C:/Users/Alenn/Documents/GitHub/CodeChallenges/The Coding Train/#5 Space Invaders/sounds/"
attention = "spaceinvaders1.MPEG"
order = 0
order1 = 0
pygame.mixer.init()
speaker_volume = 1 ####volime = 100%
pygame.mixer.music.set_volume(speaker_volume) # activate speaker

pygame.mixer.music.load(path + attention)
pygame.mixer.music.play()
while (pygame.mixer.music.get_busy() == True):
   continue
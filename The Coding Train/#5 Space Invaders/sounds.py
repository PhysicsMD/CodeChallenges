import pygame

pygame.mixer.init()
pygame.mixer.music.load("sounds/spaceinvaders1.wav")
pygame.mixer.music.set_volume(.3)
pygame.mixer.music.play(-1)
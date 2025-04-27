import pygame
import random
import sys

# Константы
SCREEN_WIDTH = 500
SCREEN_HEIGHT = 500
GRID_SIZE = 20
FPS = 10

# Цвета
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)

class TofuGame:
    def __init__(self):
        pygame.init()
        self.screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
        pygame.display.set_caption("Тофу")
        self.clock = pygame.time.Clock()
        self.reset_game()

    def reset_game(self):
        self.player_x = SCREEN_WIDTH // 2
        self.player_y = SCREEN_HEIGHT // 2
        self.target_x = random.randint(0, (SCREEN_WIDTH - GRID_SIZE) // GRID_SIZE) * GRID_SIZE
        self.target_y = random.randint(0, (SCREEN_HEIGHT - GRID_SIZE) // GRID_SIZE) * GRID_SIZE
        self.score = 0
        self.game_over = False

    def handle_events(self):
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_r and self.game_over:
                    self.reset_game()

    def update(self):
        if self.game_over:
            return

        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT] and self.player_x > 0:
            self.player_x -= GRID_SIZE
        if keys[pygame.K_RIGHT] and self.player_x < SCREEN_WIDTH - GRID_SIZE:
            self.player_x += GRID_SIZE
        if keys[pygame.K_UP] and self.player_y > 0:
            self.player_y -= GRID_SIZE
        if keys[pygame.K_DOWN] and self.player_y < SCREEN_HEIGHT - GRID_SIZE:
            self.player_y += GRID_SIZE

        if self.player_x == self.target_x and self.player_y == self.target_y:
            self.score += 1
            self.target_x = random.randint(0, (SCREEN_WIDTH - GRID_SIZE) // GRID_SIZE) * GRID_SIZE
            self.target_y = random.randint(0, (SCREEN_HEIGHT - GRID_SIZE) // GRID_SIZE * GRID_SIZE

    def draw(self):
        self.screen.fill(BLACK)
        
        # Рисуем игрока (тофу)
        pygame.draw.rect(self.screen, WHITE, (self.player_x, self.player_y, GRID_SIZE, GRID_SIZE))
        
        # Рисуем цель (еду)
        pygame.draw.rect(self.screen, RED, (self.target_x, self.target_y, GRID_SIZE, GRID_SIZE))
        
        # Рисуем счёт
        font = pygame.font.SysFont(None, 36)
        score_text = font.render(f"Очки: {self.score}", True, GREEN)
        self.screen.blit(score_text, (10, 10))
        
        if self.game_over:
            game_over_text = font.render("Игра окончена! Нажмите R для рестарта", True, RED)
            self.screen.blit(game_over_text, (SCREEN_WIDTH // 2 - 180, SCREEN_HEIGHT // 2))

    def run(self):
        while True:
            self.handle_events()
            self.update()
            self.draw()
            pygame.display.flip()
            self.clock.tick(FPS)

if __name__ == "__main__":
    game = TofuGame()
    game.run()
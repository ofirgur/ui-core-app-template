export interface GameStateContextInterface {
    gameState: GameState;
    setGameState: (gameState: Partial<GameState>) => void;
  }
  
  export interface GameState {
    gameLevel: GameLevel;
    gameScreen: GameScreen;
  }
  
  export enum GameLevel {
    Beginner = 1,
    Intermediate = 2,
    Advanced = 3,
  }
  
  export enum GameScreen {
    start = 1,
    game = 2,
    end = 3,
  }
  
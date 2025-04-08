import Provider from "./providers";
import Score from "./components/score";
import SnakeGrid from "./components/snakeGrid";

export default function Snake() {
  return (
    <div className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <h1>Snake Game</h1>
      <Provider>
        <Score />
        <SnakeGrid />
      </Provider>
    </div>
  );
}

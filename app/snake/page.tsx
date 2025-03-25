import SnakeGrid from "./components/snakeGrid";

export default function Snake() {
  return (
    <div className="min-h-screen flex flex-col items-center p-24 space-y-10">
      <h1>Snake Game</h1>
      {/* score */}
      <SnakeGrid />
    </div>
  );
}

import { Link } from "react-router-dom";

const ScreamerLink = () => {
  return (
    <div className="p-4">
      <Link
        to="/screamer"
        className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        🎁 Нажми для сюрприза!
      </Link>
    </div>
  );
};

export default ScreamerLink;

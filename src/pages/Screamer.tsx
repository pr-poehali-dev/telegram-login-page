import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Screamer = () => {
  const [showScreamer, setShowScreamer] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Небольшая задержка перед скримером
    const timer = setTimeout(() => {
      setShowScreamer(true);

      // Попытка воспроизвести звук (может не работать без взаимодействия пользователя)
      const audio = new Audio(
        "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmcfBTiH0fPZgyoHKHzC7+ONPEX==",
      );
      audio.volume = 0.3;
      audio.play().catch(() => {
        // Звук может не воспроизвестись без взаимодействия пользователя
      });

      // Возврат на главную через 3 секунды
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (!showScreamer) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl animate-pulse">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center animate-pulse">
      {/* Пугающий контент */}
      <div className="text-center animate-bounce">
        <div className="text-red-500 text-9xl mb-4 animate-pulse">👻</div>
        <div className="text-red-400 text-4xl font-bold mb-2 animate-pulse">
          БУ!
        </div>
        <div className="text-white text-xl animate-fade-in">Ты попался! 😈</div>
      </div>

      {/* Мерцающий красный фон */}
      <div className="absolute inset-0 bg-red-900 opacity-30 animate-pulse"></div>

      {/* Дополнительные пугающие элементы */}
      <div className="absolute top-10 left-10 text-red-500 text-6xl animate-bounce">
        💀
      </div>
      <div className="absolute bottom-10 right-10 text-red-500 text-6xl animate-bounce delay-100">
        🎭
      </div>
      <div className="absolute top-10 right-10 text-red-500 text-6xl animate-bounce delay-200">
        👹
      </div>
      <div className="absolute bottom-10 left-10 text-red-500 text-6xl animate-bounce delay-300">
        🔥
      </div>
    </div>
  );
};

export default Screamer;

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CodeInputProps {
  phone: string;
  onSubmit: (code: string) => void;
  onBack: () => void;
}

const CodeInput: React.FC<CodeInputProps> = ({ phone, onSubmit, onBack }) => {
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length === 5) {
      onSubmit(code);
    }
  };

  const formatPhone = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.startsWith("7")) {
      return `+7 ${cleanPhone.slice(1, 4)} ${cleanPhone.slice(4, 7)} ${cleanPhone.slice(7, 9)} ${cleanPhone.slice(9, 11)}`;
    }
    return phone;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Код подтверждения
        </label>
        <Input
          type="text"
          placeholder="12345"
          value={code}
          onChange={(e) =>
            setCode(e.target.value.replace(/\D/g, "").slice(0, 5))
          }
          className="text-center text-2xl tracking-widest h-14 focus:ring-2 focus:ring-telegram-blue focus:border-transparent"
          maxLength={5}
          required
        />
        <p className="text-sm text-gray-500 mt-2">
          Код отправлен на номер {formatPhone(phone)}
        </p>
      </div>

      <div className="space-y-3">
        <Button
          type="submit"
          className="w-full h-12 bg-telegram-blue hover:bg-telegram-blue/90 text-white text-lg font-medium"
          disabled={code.length !== 5}
        >
          Войти
        </Button>

        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          className="w-full h-10 border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          Изменить номер
        </Button>
      </div>

      <div className="text-center">
        <button
          type="button"
          className="text-telegram-blue hover:underline text-sm"
        >
          Не получили код?
        </button>
      </div>
    </form>
  );
};

export default CodeInput;

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PhoneInputProps {
  onSubmit: (phone: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ onSubmit }) => {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+7");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      onSubmit(countryCode + phone);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Номер телефона
        </label>
        <div className="flex gap-3">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="w-20 h-10 border border-gray-300 rounded-md px-2 text-sm focus:ring-2 focus:ring-telegram-blue focus:border-transparent"
          >
            <option value="+7">🇷🇺 +7</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+49">🇩🇪 +49</option>
            <option value="+33">🇫🇷 +33</option>
          </select>
          <Input
            type="tel"
            placeholder="9XX XXX XX XX"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
            }
            className="flex-1 h-10 text-lg focus:ring-2 focus:ring-telegram-blue focus:border-transparent"
            required
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Мы отправим код подтверждения на этот номер
        </p>
      </div>

      <Button
        type="submit"
        className="w-full h-12 bg-telegram-blue hover:bg-telegram-blue/90 text-white text-lg font-medium"
        disabled={phone.length < 10}
      >
        Получить код
      </Button>
    </form>
  );
};

export default PhoneInput;

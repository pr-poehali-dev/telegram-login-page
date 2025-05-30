import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import AuthHeader from "./AuthHeader";
import PhoneInput from "./PhoneInput";
import CodeInput from "./CodeInput";

type AuthStep = "phone" | "code" | "success";

const TelegramAuth = () => {
  const [step, setStep] = useState<AuthStep>("phone");
  const [phone, setPhone] = useState("");

  const handlePhoneSubmit = (phoneNumber: string) => {
    setPhone(phoneNumber);
    setStep("code");
  };

  const handleCodeSubmit = (code: string) => {
    // Имитация проверки кода
    console.log("Код введен:", code);
    setStep("success");
  };

  const handleBack = () => {
    setStep("phone");
  };

  if (step === "success") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md animate-scale-in">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Добро пожаловать!
              </h2>
              <p className="text-gray-600">Вы успешно вошли в Telegram</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md animate-fade-in">
        <CardContent className="p-8">
          <AuthHeader />

          {step === "phone" && <PhoneInput onSubmit={handlePhoneSubmit} />}

          {step === "code" && (
            <CodeInput
              phone={phone}
              onSubmit={handleCodeSubmit}
              onBack={handleBack}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TelegramAuth;

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(6);
  const [lowerCase, setLowerCase] = useState<boolean>(false);
  const [upperCase, setUpperCase] = useState<boolean>(false);
  const [isNumberAllowed, setNumberAllowed] = useState<boolean>(false);
  const [symbols, setSymbols] = useState<boolean>(false);

  const passwordRef = useRef<HTMLInputElement | null>(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "123456789";
    const symbol = "!@#$%^&*?/|";
    let charsAll = "";

    if (lowerCase) charsAll += lowercase;
    if (upperCase) charsAll += uppercase;
    if (isNumberAllowed) charsAll += numbers;
    if (symbols) charsAll += symbol;

    if (charsAll.length === 0) {
      setPassword("");
      return;
    }

    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * charsAll.length);
      pass += charsAll[random];
    }

    setPassword(pass);
  }, [length, lowerCase, upperCase, isNumberAllowed, symbols]);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 999);

      navigator.clipboard.writeText(password);
      alert("Password Copied");
    }
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [
    length,
    isNumberAllowed,
    symbols,
    lowerCase,
    upperCase,
    passwordGenerator,
  ]);

  return (
    <div className="flex justify-center items-center flex-col h-screen w-full">
      <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">Password Generator</CardTitle>
          <CardDescription className="text-xl">
            Generate a Strong Password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex">
            <Input type="text" readOnly value={password} ref={passwordRef} />
            <Button onClick={copyPasswordToClipboard}>Copy</Button>
          </div>
          <div className="mt-2">
            <label htmlFor="length">{length}</label>
            <Input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => {
                setLength(parseInt(e.target.value));
              }}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={upperCase}
              onCheckedChange={() => {
                setUpperCase((prev) => !prev);
              }}
            />
            <label htmlFor="uppercase">Uppercase Letters</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={lowerCase}
              onCheckedChange={() => {
                setLowerCase((prev) => !prev);
              }}
            />
            <label htmlFor="lowercase">LowerCase Letters</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={isNumberAllowed}
              onCheckedChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              checked={symbols}
              onCheckedChange={() => {
                setSymbols((prev) => !prev);
              }}
            />
            <label htmlFor="Symbols">Symbols</label>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={passwordGenerator}>Generate Password</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

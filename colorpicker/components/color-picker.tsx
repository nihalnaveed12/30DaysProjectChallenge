"use client";
import { useState, ChangeEvent } from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("#00000");

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(color);
    alert("Color Code Copied");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md p-3 border-black">
        <CardTitle className="text-center text-2xl">Color Picker</CardTitle>
        <CardDescription className="text-center">
          Select a color and copy the hex and RGB values.
        </CardDescription>
        <div className="grid gap-4">
          <div
            className="w-full h-48 rounded-lg border-4 border-gray-200 dark:border-gray-800 mt-4 bg-black"
            style={{ backgroundColor: color }}
          />
          <div className="grid gap-4 text-center">
            <div className="font-bold text-xl">{color}</div>
            <div className="text-gray-500 dark:text-gray-400">
              RGB: {parseInt(color.slice(1, 3), 16)},{" "}
              {parseInt(color.slice(3, 5), 16)},{" "}
              {parseInt(color.slice(5, 7), 16)}
            </div>
            <Button
              onClick={copyToClipBoard}
              variant="default"
              className="w-full"
            >
              Copy to Clipboard
            </Button>
          </div>
          <Input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-full h-16 p-0 border-0 rounded-md cursor-pointer"
          />
        </div>
      </Card>
    </div>
  );
}

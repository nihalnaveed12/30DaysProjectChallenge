"use client";
import { useState, ChangeEvent } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface BmiResult {
  bmi: string;
  category: string;
}

export default function BmiCalculator() {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [result, setResult] = useState<BmiResult | null>(null);

  const handleHeight = (e: ChangeEvent<HTMLInputElement>): void => {
    setHeight(e.target.value);
  };
  const handleWeight = (e: ChangeEvent<HTMLInputElement>): void => {
    setWeight(e.target.value);
  };

  const calculateBmi = (): void => {
    if (!height || !weight) {
      setError("Enter Height and Weight");
      return;
    }
    const heightInMeters = parseFloat(height) / 100;
    if (heightInMeters <= 0) {
      setError("Height must be a positive number.");
      return;
    }
    const weightInKg = parseFloat(weight);
    if (weightInKg <= 0) {
      setError("Weight must be a positive number.");
      return;
    }

    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    let category = "";
    if (bmiValue < 18.5) {
      category = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      category = "Normal";
    } else if (bmiValue >= 25 && bmiValue < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
    setResult({ bmi: bmiValue.toFixed(1), category });
    setError("");
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Card className="flex flex-col justify-center w-full max-w-md ">
        <CardHeader>
          <CardTitle>BMI CALCULATOR</CardTitle>
          <CardDescription>
            Enter your height and weight to calculate your BMI.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-2">
          <div>
            <h1 className="font-bold">Height (cm)</h1>
            <Input
              type="number"
              placeholder="Enter Your Height"
              value={height}
              onChange={handleHeight}
              className="mb-4 rounded-full shadow-sm"
            />
          </div>
          <div>
            <h1 className="font-bold">Weight (kg)</h1>
            <Input
              type="number"
              value={weight}
              placeholder="Enter Your Weight"
              onChange={handleWeight}
              className=" mb-4 rounded-full shadow-sm"
            />
          </div>
          <Button onClick={calculateBmi}>Calculate</Button>
          
          {error && <div className="text-red-500 text-center mt-2">{error}</div>}
          {result && (
            <div className="grid gap-2">
              <div className="text-center text-2xl font-bold">{result.bmi}</div>
              <div className="text-center text-muted-foreground">
                {result.category}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

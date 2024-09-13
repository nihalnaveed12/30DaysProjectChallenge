"use client";

import { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { toASCII } from "punycode";

export default function TipCalculator() {
  const [amount, setAmount] = useState<number | null>(null);
  const [tipPercentage, setTipPercentage] = useState<number | null>(null);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);

  const amountChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setAmount(parseFloat(e.target.value));
  };

  const tipPercentageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTipPercentage(parseFloat(e.target.value));
  };

  const calculateTip = (): void => {
    if (amount && tipPercentage !== null) {
        const tip = amount * (tipPercentage / 100);
      setTipAmount(tip);
      setTotalAmount(amount + tipAmount);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <Card className="w-full max-w-md p-4">
        <CardHeader>
          <CardTitle>Tip Calculator</CardTitle>
          <CardDescription>
            Enter the bill amount and tip percentage to calculate the tip and
            total amount
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="amount">Bill Amount</label>
            <Input
              type="number"
              placeholder="Enter Bill Amount"
              value={amount !== null ? amount : ""}
              onChange={amountChange}
            />
          </div>
          <div>
            <label htmlFor="amount">Tip Percentage</label>
            <Input
              type="number"
              placeholder="Enter Tip Percentage"
              value={tipPercentage !== null ? tipPercentage : ""}
              onChange={tipPercentageChange}
            />
          </div>
          <Button onClick={calculateTip}>Calculate</Button>
        </CardContent>
        <CardFooter className="grid gap-2">
            <div className="flex justify-between items-center">
                <span>Tip Amount:</span>
                <span className="font-bold">{tipAmount.toFixed(2)} rs</span>
            </div>
            <div className="flex justify-between items-center">
                <span>Total Amount:</span>
                <span className="font-bold">{totalAmount.toFixed(2)} rs</span>
            </div>
        </CardFooter>
      </Card>
    </div>
  );
}

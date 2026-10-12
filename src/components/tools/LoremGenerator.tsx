"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Copy, RefreshCw, TextInitial } from "lucide-react";
import { LoremIpsum } from "lorem-ipsum";

const options = [
  { label: "Words", value: "words" },
  { label: "Paragraphs", value: "paragraphs" },
  { label: "Sentences", value: "sentences" },
];

const LoremGenerator = () => {
  const [length, setLength] = useState<number>(5);
  const [lengthInput, setLengthInput] = useState("5");
  const [selectedDropdown, setSelectedDropdown] = useState("");
  const [outputResult, setOutputResutl] = useState("");

  // Function to generate lorem
  const generateLorem = () => {
    const lorem = new LoremIpsum();

    const words = lorem.generateWords(length);
    const paragraph = lorem.generateParagraphs(length);
    const sentence = lorem.generateSentences(length);
  };

  return (
    <div className="flex flex-1 items-center justify-center mb-50">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <TextInitial className="size-6 text-primary" />
            </div>
            <div>
              <CardTitle>Lorem Ipsum Text Generator</CardTitle>
              <CardDescription className="mt-1">
                Generate lorem ipsum placeholder text
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border bg-muted/50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                GENERATED TEXT
              </span>
              <Button
                variant={"outline"}
                className="rounded-2xl bg-background px-2 py-1 text-xs"
              >
                <Copy />
                Copy
              </Button>
            </div>
            <p className="text-center font-mono text-sm font-medium">
              {outputResult}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Input
              type="text"
              inputMode="numeric"
              value={lengthInput}
              className="w-14 shrink-0 text-center"
              onChange={(e) => {
                const value = e.target.value;
                if (!/^\d*$/.test(value)) return;
                setLengthInput(value);
                const number = Number(value);
                if (value !== "" && number >= 1 && number <= 1000) {
                  setLength(number);
                }
              }}
              onBlur={() => {
                const number = Number(lengthInput);
                const validLength =
                  lengthInput === ""
                    ? length
                    : Math.min(1000, Math.max(1, number));
                setLength(validLength);
                setLengthInput(String(validLength));
              }}
            />

            <Select defaultValue="words">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button className="w-full">
              <RefreshCw />
              Generate Text
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoremGenerator;

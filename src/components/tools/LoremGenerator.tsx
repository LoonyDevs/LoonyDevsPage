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
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";

const options = [
  { label: "Words", value: "words" },
  { label: "Paragraphs", value: "paragraphs" },
  { label: "Sentences", value: "sentences" },
];

const LoremGenerator = () => {
  const [length, setLength] = useState<number>(5);
  const [lengthInput, setLengthInput] = useState("5");
  const [selectedDropdown, setSelectedDropdown] = useState("words");
  const [outputResult, setOutputResult] = useState("");

  // Function to generate lorem
  const generateLorem = () => {
    const lorem = new LoremIpsum();
    let text = "";

    switch (selectedDropdown) {
      case "words":
        text = lorem.generateWords(length);
        break;

      case "paragraphs":
        text = lorem.generateParagraphs(length);
        break;

      case "sentences":
        text = lorem.generateSentences(length);
        break;
    }
    setOutputResult(text);
  };

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      generateLorem();
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // Copy to clipboard function
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(outputResult);
    toast.success("Copied to clipboard!", { position: "bottom-center" });
  };

  return (
    <div className="flex justify-center px-6 pt-12 sm:pt-20">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <TextInitial className="size-6 text-primary" />
            </div>
            <div>
              <CardTitle as="h1">Lorem Ipsum Text Generator</CardTitle>
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
                onClick={copyToClipboard}
              >
                <Copy />
                Copy
              </Button>
            </div>
            <ScrollArea className="h-70 rounded-md p-4">
              <p className="whitespace-pre-line text-center font-mono text-sm font-medium">
                {outputResult}
              </p>
            </ScrollArea>
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

            <Select defaultValue="words" onValueChange={setSelectedDropdown}>
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

            <Button onClick={generateLorem} className="w-full">
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

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Separator } from "../ui/separator";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Copy, RefreshCw, Hash, Shuffle, KeyRound } from "lucide-react";
import { toast } from "sonner";
import { Slider } from "@/components/ui/slider";

const PasswordGenerator = () => {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(20);
  const [lengthInput, setLengthInput] = useState("20");
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [pin, setPin] = useState<number>(6);
  const [pinInput, setPinInput] = useState("6");
  const [activeTab, setActiveTab] = useState("random");

  // Generate random password function
  const generateRandomPassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#\$%^&*()_+-=[]{}|;:,.<>?";

    let characters = uppercaseChars + lowercaseChars;

    if (includeNumbers) {
      characters += numberChars;
    }
    if (includeSymbols) {
      characters += symbolChars;
    }

    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
      const randomArray = new Uint32Array(1);
      crypto.getRandomValues(randomArray);
      const randomIndex = randomArray[0] % characters.length;
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  // Generate random pin function
  const generateRandomPin = () => {
    const numberChars = "0123456789";

    let generatedPin = "";
    for (let i = 0; i < pin; i++) {
      const randomArray = new Uint32Array(1);
      crypto.getRandomValues(randomArray);
      const randomIndex = randomArray[0] % numberChars.length;
      generatedPin += numberChars[randomIndex];
    }
    setPassword(generatedPin);
  };

  // Generate initial Password on component mount
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      if (activeTab === "random") {
        generateRandomPassword();
      } else {
        generateRandomPin();
      }
    });

    return () => cancelAnimationFrame(id);
  }, [activeTab]);

  // Copy to clipboard function
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(password);
    toast.success("Copied to clipboard!", { position: "bottom-center" });
  };

  return (
    <div className="flex flex-1 items-center justify-center mb-50">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <KeyRound className="size-6 text-primary" />
            </div>
            <div>
              <CardTitle>Password Generator</CardTitle>
              <CardDescription className="mt-1">
                Create Secure Passwords
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList variant={"line"} className="mx-auto">
              <TabsTrigger value="random">
                <Shuffle /> Random
              </TabsTrigger>
              <TabsTrigger value="pin">
                <Hash /> Pin
              </TabsTrigger>
            </TabsList>

            {/* Random Password Tab */}
            <TabsContent value="random">
              <p className="mt-5">Customize your password</p>
              <Separator className="my-5" />
              <div className="grid grid-cols-2 items-center gap-4">
                <span className="text-muted-foreground">Characters</span>
                <div className="flex items-center gap-4">
                  <Slider
                    className="w-full"
                    value={[length]}
                    min={6}
                    max={100}
                    step={1}
                    onValueChange={(value) => {
                      setLength(value[0]);
                      setLengthInput(String(value[0]));
                    }}
                  />
                  <Input
                    type="text"
                    inputMode="numeric"
                    value={lengthInput}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (!/^\d*$/.test(value)) return;
                      setLengthInput(value);
                      const number = Number(value);
                      if (value !== "" && number >= 6 && number <= 100) {
                        setLength(number);
                      }
                    }}
                    onBlur={() => {
                      const number = Number(lengthInput);
                      const validLength =
                        lengthInput === ""
                          ? length
                          : Math.min(100, Math.max(6, number));
                      setLength(validLength);
                      setLengthInput(String(validLength));
                    }}
                    className="w-16 shrink-0 text-center"
                  />
                </div>
              </div>
              <Separator className="my-5" />
              <div className="flex gap-8">
                <div className="flex gap-4">
                  <Label className="text-muted-foreground" htmlFor="numbers">
                    Numbers
                  </Label>
                  <Switch
                    id="numbers"
                    checked={includeNumbers}
                    onCheckedChange={setIncludeNumbers}
                  />
                </div>
                <div className="flex gap-4">
                  <Label className="text-muted-foreground" htmlFor="symbols">
                    Symbols
                  </Label>
                  <Switch
                    id="symbols"
                    checked={includeSymbols}
                    onCheckedChange={setIncludeSymbols}
                  />
                </div>
              </div>
              <Separator className="my-5" />
              <div className="rounded-lg border bg-muted/50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">
                    GENERATED PASSWORD
                  </span>
                </div>
                <p className="break-all text-center font-mono text-sm font-medium">
                  {password}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-5">
                <Button variant="outline" onClick={copyToClipboard}>
                  <Copy /> Copy
                </Button>
                <Button onClick={generateRandomPassword}>
                  <RefreshCw /> Generate New Password
                </Button>
              </div>
            </TabsContent>

            {/* Pin Password View */}
            <TabsContent value="pin">
              <p className="mt-5">Customize your password</p>
              <Separator className="my-5" />
              <div className="grid grid-cols-2 items-center gap-4">
                <span className="text-muted-foreground">Characters</span>
                <div className="flex items-center gap-4">
                  <Slider
                    className="w-full"
                    value={[pin]}
                    min={4}
                    max={12}
                    step={1}
                    onValueChange={(value) => {
                      setPin(value[0]);
                      setPinInput(String(value[0]));
                    }}
                  />
                  <Input
                    type="text"
                    inputMode="numeric"
                    value={pinInput}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (!/^\d*$/.test(value)) return;
                      setPinInput(value);
                      const number = Number(value);
                      if (value !== "" && number >= 4 && number <= 12) {
                        setPin(number);
                      }
                    }}
                    onBlur={() => {
                      const number = Number(pinInput);
                      const validPin =
                        pinInput === ""
                          ? pin
                          : Math.min(12, Math.max(4, number));
                      setPin(validPin);
                      setPinInput(String(validPin));
                    }}
                    className="w-16 shrink-0 text-center"
                  />
                </div>
              </div>
              <Separator className="my-5" />
              <div className="rounded-lg border bg-muted/50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">
                    GENERATED PASSWORD
                  </span>
                </div>
                <p className="text-center font-mono text-sm font-medium">
                  {password}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-5">
                <Button variant="outline" onClick={copyToClipboard}>
                  <Copy /> Copy
                </Button>
                <Button onClick={generateRandomPin}>
                  <RefreshCw /> Generate New Password
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordGenerator;

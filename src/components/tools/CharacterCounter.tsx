"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { TypeOutline } from "lucide-react";
import { Separator } from "../ui/separator";
import { FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";

const CharacterCounter = () => {
  const [inputText, setInputText] = useState("");

  const characterCount = inputText.length;
  const wordCount =
    inputText.trim() === "" ? 0 : inputText.trim().split(/\s+/).length;

  return (
    <div className="flex flex-1 items-center justify-center mb-50">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <TypeOutline className="size-6 text-primary" />
            </div>
            <div>
              <CardTitle>Character Counter</CardTitle>
              <CardDescription className="mt-1">
                Character counter to count characters and words.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            className="h-70"
            placeholder="Paste your text here"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <Separator className="my-5" />
          <div className="rounded-lg border bg-muted/50 p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <FieldLabel htmlFor="output-characters">Characters</FieldLabel>
                <Input
                  id="output-characters"
                  type="text"
                  readOnly
                  value={characterCount}
                />
              </div>
              <div className="space-y-2">
                <FieldLabel htmlFor="output-words">Words</FieldLabel>
                <Input
                  id="output-words"
                  type="text"
                  readOnly
                  value={wordCount}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CharacterCounter;

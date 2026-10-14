"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TypeOutline } from "lucide-react";

const CharacterCounter = () => {
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
          <div className="rounded-lg border bg-muted/50 p-4">test</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CharacterCounter;

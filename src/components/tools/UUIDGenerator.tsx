"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Copy, Download, RefreshCw, Fingerprint } from "lucide-react";
import { toast } from "sonner";

const UUIDGenerator = () => {
  const [uuid, setUUID] = useState<string>("");

  // Generate initial UUID on component mount
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setUUID(crypto.randomUUID());
    });

    return () => cancelAnimationFrame(id);
  }, []);

  // Generate UUID function
  const generateUUID = () => {
    const uuid = crypto.randomUUID();
    setUUID(uuid);
  };

  // Copy to clipboard function
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(uuid);
    toast.success("Copied to clipboard!", { position: "bottom-center" });
  };

  // Download UUID function
  const downloadUUID = () => {
    const blob = new Blob([uuid], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "uuid.txt";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-1 items-center justify-center mb-50">
      <Card className="w-full max-w-lg shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <Fingerprint className="size-6 text-primary" />
            </div>
            <div>
              <CardTitle>UUID Generator</CardTitle>
              <CardDescription className="mt-1">
                Generate a random Version 4 UUID
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border bg-muted/50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">
                GENERATED UUID
              </span>
              <span className="rounded-md bg-background px-2 py-1 text-xs">
                v4
              </span>
            </div>
            <p className="text-center font-mono text-sm font-medium">{uuid}</p>
          </div>
          <Button className="w-full" onClick={generateUUID}>
            <RefreshCw />
            Generate New UUID
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={copyToClipboard}
              disabled={!uuid}
            >
              <Copy />
              Copy
            </Button>
            <Button variant="outline" onClick={downloadUUID} disabled={!uuid}>
              <Download />
              Download
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UUIDGenerator;

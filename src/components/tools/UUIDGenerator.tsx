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
import { Copy } from "lucide-react";
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
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>UUID Generator</CardTitle>
          <CardDescription>Create Version 4 UUID</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center gap-4">
            <Button className="rounded-2xl" onClick={generateUUID}>
              Generate UUID
            </Button>
            <div>
              <span className="text-lg font-bold">{uuid}</span>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-5">
            <Button className="rounded-2xl" onClick={copyToClipboard}>
              <Copy /> Copy
            </Button>
            <Button className="rounded-2xl" onClick={downloadUUID}>
              Download
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UUIDGenerator;

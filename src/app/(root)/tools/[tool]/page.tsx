import CharacterCounter from "@/components/tools/CharacterCounter";
import ImageCompress from "@/components/tools/ImageCompress";
import ImageResize from "@/components/tools/ImageResize";
import JsonFormatter from "@/components/tools/JsonFormatter";
import LoremGenerator from "@/components/tools/LoremGenerator";
import PasswordGenerator from "@/components/tools/PasswordGenerator";
import SalaryCalculator from "@/components/tools/SalaryCalculator";
import UUIDGenerator from "@/components/tools/UUIDGenerator";
import { notFound } from "next/navigation";

const toolComponents = {
  "character-word-counter": CharacterCounter,
  "image-compressor": ImageCompress,
  "image-resize": ImageResize,
  "json-formatter": JsonFormatter,
  "lorem-ipsum-generator": LoremGenerator,
  "password-generator": PasswordGenerator,
  "salary-calculator": SalaryCalculator,
  "uuid-generator": UUIDGenerator,
};

const Tool = async ({ params }: { params: Promise<{ tool: string }> }) => {
  const { tool } = await params;

  const ToolComponent = toolComponents[tool as keyof typeof toolComponents];

  if (!ToolComponent) {
    notFound();
  }

  return <ToolComponent />;
};

export default Tool;

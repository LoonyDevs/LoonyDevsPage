"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Separator } from "../ui/separator";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { DollarSign } from "lucide-react";

const SalaryCalculator = () => {
  const [hourlyWage, setHourlyWage] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [annualSalary, setAnnualSalary] = useState("");

  // Calculate salary based on hourly wage and hours per week
  const calculateSalary = (
    changedField: "hourly" | "salary" | "hours",
    value: string,
  ) => {
    const weeklyHours = Number(hoursPerWeek);
    const newValue = Number(value.replace(/,/g, ""));

    if (changedField === "hourly") {
      const newSalary = newValue * weeklyHours * 52;
      setAnnualSalary(
        newSalary.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      );
    }

    if (changedField === "salary") {
      const newHourly = weeklyHours > 0 ? newValue / (weeklyHours * 52) : 0;
      setHourlyWage(
        newHourly.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      );
    }

    if (changedField === "hours") {
      const hourly = Number(hourlyWage.replace(/,/g, ""));
      const newSalary = hourly * newValue * 52;
      setAnnualSalary(
        newSalary.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
      );
    }
  };

  // Calculate earnings breakdown
  const salary = Number(annualSalary.replace(/,/g, ""));
  const dailySalary = salary / 52 / 5;
  const weeklySalary = salary / 52;
  const biweeklySalary = salary / 26;
  const monthlySalary = salary / 12;

  return (
    <div className="flex flex-1 items-center justify-center mb-50">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <DollarSign className="size-6 text-primary" />
            </div>
            <div>
              <CardTitle>Salary Calculator</CardTitle>
              <CardDescription className="mt-1">
                Calculate your salary or hourly rate <br /> (Based on 52 weeks)
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Field>
              <FieldLabel htmlFor="input-hourly-wage">Hourly wage</FieldLabel>
              <Input
                id="input-hourly-wage"
                type="text"
                inputMode="decimal"
                value={hourlyWage}
                onChange={(e) => {
                  const value = e.target.value.replace(/,/g, "");
                  if (!/^\d*\.?\d*$/.test(value)) return;
                  setHourlyWage(value);
                  calculateSalary("hourly", value);
                }}
                onBlur={() => {
                  if (hourlyWage === "") return;
                  setHourlyWage(
                    Number(hourlyWage.replace(/,/g, "")).toLocaleString(
                      "en-US",
                      {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      },
                    ),
                  );
                }}
              />
              <FieldLabel htmlFor="input-hours-per-week">
                Hours per week
              </FieldLabel>
              <Input
                id="input-hours-per-week"
                type="text"
                inputMode="decimal"
                value={hoursPerWeek}
                onChange={(e) => {
                  const value = e.target.value;
                  if (!/^\d*\.?\d*$/.test(value)) return;
                  setHoursPerWeek(value);
                  calculateSalary("hours", value);
                }}
              />
              <FieldLabel htmlFor="input-annual-salary">
                Annual salary
              </FieldLabel>
              <Input
                id="input-annual-salary"
                type="text"
                inputMode="numeric"
                value={annualSalary}
                onChange={(e) => {
                  const value = e.target.value.replace(/,/g, "");
                  if (!/^\d*\.?\d*$/.test(value)) return;
                  setAnnualSalary(value);
                  calculateSalary("salary", value);
                }}
                onBlur={() => {
                  if (annualSalary === "") return;
                  setAnnualSalary(
                    Number(annualSalary.replace(/,/g, "")).toLocaleString(
                      "en-US",
                      {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      },
                    ),
                  );
                }}
              />
            </Field>
          </div>
          <Separator className="my-5" />
          <div className="rounded-lg border bg-muted/50 p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <FieldLabel htmlFor="output-daily">Daily</FieldLabel>
                <Input
                  id="output-daily"
                  type="text"
                  readOnly
                  value={dailySalary.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                />
              </div>
              <div className="space-y-2">
                <FieldLabel htmlFor="output-Monthly">Monthly</FieldLabel>
                <Input
                  id="output-Monthly"
                  type="text"
                  readOnly
                  value={monthlySalary.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                />
              </div>
              <div className="space-y-2">
                <FieldLabel htmlFor="output-Weekly">Weekly</FieldLabel>
                <Input
                  id="output-Weekly"
                  type="text"
                  readOnly
                  value={weeklySalary.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                />
              </div>
              <div className="space-y-2">
                <FieldLabel htmlFor="output-Biweekly">Biweekly</FieldLabel>
                <Input
                  id="output-Biweekly"
                  type="text"
                  readOnly
                  value={biweeklySalary.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalaryCalculator;

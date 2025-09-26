"use client"

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const spendingData = [
  { month: "Jan", spending: 15000, savings: 2000 },
  { month: "Fév", spending: 12000, savings: 1800 },
  { month: "Mar", spending: 28000, savings: 4200 },
  { month: "Avr", spending: 22000, savings: 3300 },
  { month: "Mai", spending: 25000, savings: 3750 },
  { month: "Jun", spending: 18000, savings: 2700 },
  { month: "Jul", spending: 21000, savings: 3150 },
]

export function SpendingChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Évolution des Dépenses</CardTitle>
        <CardDescription>Dépenses mensuelles et économies réalisées</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            spending: {
              label: "Dépenses (€)",
              color: "hsl(var(--chart-3))",
            },
            savings: {
              label: "Économies (€)",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={spendingData}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="spending"
                stackId="1"
                stroke="var(--color-chart-3)"
                fill="var(--color-chart-3)"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="savings"
                stackId="2"
                stroke="var(--color-chart-1)"
                fill="var(--color-chart-1)"
                fillOpacity={0.8}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

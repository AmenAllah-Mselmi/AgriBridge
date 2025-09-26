"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const salesData = [
  { month: "Jan", sales: 2400, orders: 12 },
  { month: "Fév", sales: 1398, orders: 8 },
  { month: "Mar", sales: 9800, orders: 24 },
  { month: "Avr", sales: 3908, orders: 18 },
  { month: "Mai", sales: 4800, orders: 22 },
  { month: "Jun", sales: 3800, orders: 16 },
  { month: "Jul", sales: 4300, orders: 20 },
]

export function SalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Évolution des Ventes</CardTitle>
        <CardDescription>Ventes mensuelles en euros</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            sales: {
              label: "Ventes (€)",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="var(--color-chart-1)"
                strokeWidth={2}
                dot={{ fill: "var(--color-chart-1)" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

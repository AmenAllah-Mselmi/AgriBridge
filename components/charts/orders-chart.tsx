"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const ordersData = [
  { month: "Jan", orders: 12, completed: 10 },
  { month: "Fév", orders: 8, completed: 7 },
  { month: "Mar", orders: 24, completed: 22 },
  { month: "Avr", orders: 18, completed: 16 },
  { month: "Mai", orders: 22, completed: 20 },
  { month: "Jun", orders: 16, completed: 14 },
  { month: "Jul", orders: 20, completed: 18 },
]

export function OrdersChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Commandes par Mois</CardTitle>
        <CardDescription>Nombre de commandes reçues et complétées</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            orders: {
              label: "Commandes",
              color: "hsl(var(--chart-2))",
            },
            completed: {
              label: "Complétées",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ordersData}>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="orders" fill="var(--color-chart-2)" />
              <Bar dataKey="completed" fill="var(--color-chart-1)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export function Stats() {
  const stats = [
    {
      value: "500+",
      label: "Producteurs connectés",
      description: "Agriculteurs actifs sur la plateforme",
    },
    {
      value: "98%",
      label: "Satisfaction client",
      description: "Taux de satisfaction des utilisateurs",
    },
    {
      value: "2M€+",
      label: "Volume d'échanges",
      description: "Transactions mensuelles sur la plateforme",
    },
    {
      value: "24h",
      label: "Délai de livraison",
      description: "Temps moyen de traitement des commandes",
    },
  ]

  return (
    <section className="py-16 bg-card">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

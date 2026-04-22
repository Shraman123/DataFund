export interface Project {
  id: string;
  name: string;
  location: string;
  target_amount: number;
  raised_amount: number;
  expected_return_min: number;
  expected_return_max: number;
  risk_level: 'Low' | 'Medium' | 'High';
  risk_score: number; // out of 10
  duration_months: number;
  image_url: string;
}

export const mockProjects: Project[] = [
  {
    id: "p1",
    name: "Edge Data Node - Kolkata",
    location: "Kolkata, India",
    target_amount: 5000000,
    raised_amount: 3500000,
    expected_return_min: 12,
    expected_return_max: 18,
    risk_level: "Medium",
    risk_score: 5,
    duration_months: 12,
    image_url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
  },
  {
    id: "p2",
    name: "Hyperscale Compute C1",
    location: "Mumbai, India",
    target_amount: 25000000,
    raised_amount: 22000000,
    expected_return_min: 8,
    expected_return_max: 12,
    risk_level: "Low",
    risk_score: 2,
    duration_months: 24,
    image_url: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?w=800&q=80"
  },
  {
    id: "p3",
    name: "Liquid Cooled AI Cluster",
    location: "Bengaluru, India",
    target_amount: 15000000,
    raised_amount: 2000000,
    expected_return_min: 18,
    expected_return_max: 25,
    risk_level: "High",
    risk_score: 8,
    duration_months: 36,
    image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  }
];

export const mockInvestments = [
  {
    id: "i1",
    project_id: "p1",
    amount: 50000,
    date: "2023-11-01"
  },
  {
    id: "i2",
    project_id: "p2",
    amount: 150000,
    date: "2023-12-15"
  }
];

export function generateChartData(months: number, baseAmount: number, riskScore: number) {
  let currentAmount = baseAmount;
  const data = [];
  const baseGrowthRate = 0.01; 
  
  for (let i = 0; i <= months; i++) {
    data.push({
      month: i === 0 ? "Now" : `Month ${i}`,
      value: Math.round(currentAmount),
    });
    const variance = (Math.random() - 0.5) * (riskScore * 0.005);
    const growth = baseGrowthRate + (riskScore * 0.001) + variance;
    currentAmount = currentAmount * (1 + growth);
  }
  return data;
}

export function generatePortfolioData() {
  const data = [];
  let current = 200000;
  for(let i=1; i<=6; i++) {
    data.push({
      name: `M${i}`,
      value: Math.round(current)
    });
    current += 5000 + (Math.random() * 8000);
  }
  return data;
}

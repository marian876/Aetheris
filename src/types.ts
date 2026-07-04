export interface Product {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  price: number;
  image: string;
  category: string;
  rating: number;
  specs: {
    servingSize: string;
    servings: number;
    mainIngredient: string;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface ScientificStudy {
  id: string;
  title: string;
  university: string;
  abstract: string;
  citation: string;
  badge: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  chart: {
    title: string;
    yAxisLabel: string;
    data: ChartDataPoint[];
  };
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface CompanyValue {
  title: string;
  description: string;
  iconName: string;
}

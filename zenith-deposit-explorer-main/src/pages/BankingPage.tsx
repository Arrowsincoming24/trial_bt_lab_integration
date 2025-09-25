import React from 'react';
import { Users, Building2, Heart, Leaf, Globe, Gem, User, PiggyBank, Stethoscope, TreePine } from 'lucide-react';
import BankingHero from '../components/BankingHero';
import ProductCard from '../components/ProductCard';
import SummarySection from '../components/SummarySection';

const BankingPage = () => {
  const products = [
    {
      title: "5-Year Senior Citizen FD",
      depositRange: "₹1,000 – ₹10,000",
      tenure: "5 years (fixed)",
      interestRate: "Up to 8.40% p.a.",
      payout: "Cumulative or non-cumulative",
      penalty: "Premature withdrawal allowed",
      extraValue: "Priority banking, health check-up discounts",
      icon: Users,
      isPremium: true
    },
    {
      title: "Fixed Deposit (Retail)",
      depositRange: "Up to ₹3 crore",
      tenure: "7 days – 10 years",
      interestRate: "Up to 7.95% p.a.",
      payout: "Flexible options available",
      penalty: "Small penalty on early withdrawal",
      extraValue: "UPI integration, sweep features",
      icon: Building2
    },
    {
      title: "Wellness Fixed Deposit",
      depositRange: "₹50,000+",
      tenure: "375 days",
      interestRate: "6.5% – 7%",
      payout: "At maturity",
      penalty: "Premature withdrawal cancels insurance",
      extraValue: "Free health insurance bundled",
      icon: Heart
    },
    {
      title: "Green Rupee Term Deposit",
      depositRange: "Min ₹1,000",
      tenure: "1111, 1777, 2222 days",
      interestRate: "6.4% – 7.4%",
      payout: "At maturity",
      penalty: "Premature withdrawal allowed",
      extraValue: "Funds invested in eco-friendly projects",
      icon: Leaf
    },
    {
      title: "FCNR Deposits",
      depositRange: "NRIs only",
      tenure: "1–5 years",
      interestRate: "3% – 6%",
      payout: "At maturity",
      penalty: "Currency exchange risk",
      extraValue: "Tax-free, forex safe",
      icon: Globe
    },
    {
      title: "CashCached Platinum FD",
      depositRange: "₹50,000 – ₹5 crore",
      tenure: "1 – 5 years",
      interestRate: "Up to 7.75% p.a.",
      payout: "Monthly or at maturity",
      penalty: "Nominal penalty for early withdrawal",
      extraValue: "Wealth advisory for deposits above ₹1 crore",
      icon: Gem
    },
    {
      title: "CashCached Women's FD",
      depositRange: "₹10,000 – ₹2 crore",
      tenure: "1 – 7 years",
      interestRate: "Up to 7.85% p.a.",
      payout: "Cumulative or quarterly",
      penalty: "Reduced benefits on early withdrawal",
      extraValue: "Insurance & wellness programs for women",
      icon: User
    },
    {
      title: "CashCached Tax Saver FD",
      depositRange: "₹10,000 – ₹1.5 crore",
      tenure: "5 years (lock-in)",
      interestRate: "7.20% p.a.",
      payout: "At maturity",
      penalty: "No premature withdrawal allowed",
      extraValue: "Tax benefit under Section 80C",
      icon: PiggyBank
    },
    {
      title: "CashCached Senior Plus FD",
      depositRange: "₹25,000 – ₹2 crore",
      tenure: "1 – 10 years",
      interestRate: "Up to 8.10% p.a.",
      payout: "Monthly or at maturity",
      penalty: "Allowed with penalty",
      extraValue: "Free health screenings & counseling",
      icon: Stethoscope
    },
    {
      title: "CashCached Green Growth FD",
      depositRange: "₹5,000 – ₹3 crore",
      tenure: "3 – 6 years",
      interestRate: "Up to 7.30% p.a.",
      payout: "Quarterly or at maturity",
      penalty: "Premature withdrawal allowed",
      extraValue: "Eco-friendly investment opportunities",
      icon: TreePine,
      isPremium: true
    }
  ];

  return (
    <div className="min-h-screen bg-fintech-dark">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BankingHero />
        
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold text-fintech-light mb-6 uppercase tracking-wider">
              FIXED DEPOSIT PRODUCTS
            </h2>
            <p className="text-xl text-fintech-grey max-w-3xl mx-auto font-medium">
              Choose from our comprehensive range of fixed deposit options, 
              each designed to meet different investment goals and risk profiles.
            </p>
          </div>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
        
        <SummarySection />
        
        <footer className="mt-16 text-center py-8 border-t border-fintech-grey/30">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-fintech-pink to-fintech-magenta flex items-center justify-center">
              <span className="text-lg">💳</span>
            </div>
            <span className="text-2xl font-bold text-fintech-light uppercase tracking-wider">CASHCACHED</span>
          </div>
          <p className="text-fintech-grey font-medium mb-2">
            © 2025 CashCached. All rights reserved.
          </p>
          <p className="text-sm text-fintech-grey/70 financial-data">
            Interest rates are subject to change. Please contact your nearest branch for current rates.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BankingPage;
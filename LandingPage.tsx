// LandingPage.tsx
import React from "react";
import { Zap, Target, Shield, Award, Swords, CreditCard, Bitcoin } from "lucide-react";
import { Button } from "@/components/ui/button"; // shadcn/ui button

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-slate-950 to-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between rounded-3xl p-8 md:p-16 bg-slate-950">
        {/* Left Content */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full text-sm font-semibold">
            <Zap className="w-4 h-4 text-amber-500" /> Real Money Skill Games
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Compete. <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-400">Win. Earn Real Cash.</span>
          </h1>
          <p className="text-slate-400 max-w-md">
            Join competitive 1v1 Chess and Checkers matches with real money stakes. Test your skill, rise in rankings, and earn cash rewards.
          </p>
          <div className="flex gap-4 mt-4">
            <Button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:brightness-110">
              Start Playing Now
            </Button>
            <Button variant="outline" className="backdrop-blur-md border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black">
              Learn How It Works
            </Button>
          </div>
        </div>

        {/* Right Hero Image / Logo */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="w-48 h-48 bg-black rounded-full flex items-center justify-center perspective-800">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/28/Chess_nlt45.svg"
              alt="Rotating Knight"
              className="w-24 animate-spin-slow"
              style={{ animationDuration: "6s" }}
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 text-center">
        {[
          { label: "Active Players", value: "2,450+", icon: <Zap className="w-6 h-6 text-amber-500 mx-auto" /> },
          { label: "Matches Played", value: "15,000+", icon: <Target className="w-6 h-6 text-amber-500 mx-auto" /> },
          { label: "Prize Money Paid", value: "$125K+", icon: <Award className="w-6 h-6 text-amber-500 mx-auto" /> },
          { label: "Average Rating", value: "1,450", icon: <Shield className="w-6 h-6 text-amber-500 mx-auto" /> },
        ].map((stat, idx) => (
          <div key={idx} className="bg-slate-800 rounded-lg p-4 hover:elevate transition-all">
            {stat.icon}
            <p className="font-bold text-2xl">{stat.value}</p>
            <p className="text-slate-400">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose EloMatch?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Skill-Based Matchmaking", icon: <Target className="w-8 h-8" />, desc: "Elo rating ensures fair matches", gradient: "from-blue-500 to-blue-400" },
            { title: "Secure Payments", icon: <Shield className="w-8 h-8" />, desc: "Stripe & crypto deposits, instant withdrawals", gradient: "from-green-500 to-green-400" },
            { title: "Fair Play Guaranteed", icon: <Award className="w-8 h-8" />, desc: "Anti-cheat measures and dispute resolution", gradient: "from-purple-500 to-purple-400" },
          ].map((feature, idx) => (
            <div key={idx} className={`rounded-lg p-6 bg-gradient-to-r ${feature.gradient} hover:elevate transition-all text-black`}>
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="p-8 bg-slate-950" id="how">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: 1, desc: "Create Account & Complete Profile" },
            { number: 2, desc: "Play 10 Free Placement Games" },
            { number: 3, desc: "Enter Ranked Matches ($1-$100 Entry Fees)" },
            { number: 4, desc: "Win & Withdraw Your Earnings (95% to Winner)" },
          ].map((step, idx) => (
            <div key={idx} className="bg-slate-800 p-6 rounded-lg hover:elevate transition-all relative text-center">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 flex items-center justify-center font-bold">{step.number}</div>
              <p className="mt-8">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Game Selection */}
      <section className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Choose Your Game</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Chess", icon: <Swords />, accent: "from-amber-500 to-yellow-500", online: 120, fee: "$1-$100" },
            { title: "Checkers", icon: <Target />, accent: "from-red-500 to-rose-500", online: 80, fee: "$1-$100" },
          ].map((game, idx) => (
            <div key={idx} className={`rounded-lg p-6 bg-slate-800 hover:border-2 hover:border-${game.accent.split(" ")[0]} transition-all`}>
              <div className="text-amber-500 mb-2">{game.icon}</div>
              <h3 className="text-xl font-bold mb-1">{game.title}</h3>
              <p className="text-sm text-slate-400">Online: {game.online} | Entry Fee: {game.fee}</p>
              <button className={`mt-4 px-4 py-2 rounded-full bg-gradient-to-r ${game.accent} text-black font-bold hover:brightness-110`}>
                Play Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Methods */}
      <section className="p-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg p-6 bg-slate-800 flex items-center gap-4 hover:elevate transition-all">
          <CreditCard className="w-6 h-6 text-amber-500" />
          <p>Credit/Debit (Stripe)</p>
        </div>
        <div className="rounded-lg p-6 bg-slate-800 flex items-center gap-4 hover:elevate transition-all">
          <Bitcoin className="w-6 h-6 text-amber-500" />
          <p>Cryptocurrency (Coinbase)</p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="p-8 mt-8 bg-gradient-to-r from-amber-500 to-yellow-500 text-black text-center rounded-3xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Compete?</h2>
        <Button className="bg-black text-amber-500 font-bold px-6 py-3 rounded-full hover:brightness-110">Create Free Account</Button>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-slate-950 flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
        <div className="font-bold text-amber-500">EloMatch © 2026</div>
        <div className="flex gap-4 text-slate-400">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Support</a>
          <a href="#">FAQ</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

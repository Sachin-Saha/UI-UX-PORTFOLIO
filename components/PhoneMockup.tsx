import { ArrowDownLeft, ArrowUpRight, Eye } from "lucide-react";

function BalanceScreen() {
  return (
    <div className="h-full w-full bg-[#F8F7F5] px-4 pt-10 pb-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <span className="text-[10px] tracking-wide uppercase text-[#666]">
          Good evening, Sachin
        </span>
        <span className="h-6 w-6 rounded-full bg-[#F5E8E8]" />
      </div>

      <div className="bg-[#111] text-[#F8F7F5] rounded-xl p-5 mb-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] tracking-wide uppercase text-[#F8F7F5]/60">
            Available balance
          </span>
          <Eye size={12} className="text-[#F8F7F5]/60" />
        </div>
        <p className="font-display text-3xl">₹48,204.50</p>
        <div className="flex items-center gap-4 mt-5 pt-4 border-t border-[#F8F7F5]/15">
          <div className="flex items-center gap-1.5 text-[10px] text-[#F8F7F5]/70">
            <ArrowUpRight size={11} /> Sent ₹12,400
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-[#F8F7F5]/70">
            <ArrowDownLeft size={11} /> Received ₹9,850
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-5">
        {["Send", "Request", "Bills"].map((label) => (
          <div
            key={label}
            className="bg-white rounded-lg border border-[#E9E9E9] py-3 text-center"
          >
            <span className="text-[9px] tracking-wide uppercase text-[#111]">
              {label}
            </span>
          </div>
        ))}
      </div>

      <span className="text-[10px] tracking-wide uppercase text-[#666] mb-3">
        This week
      </span>
      <div className="space-y-2 flex-1">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-white border border-[#E9E9E9] rounded-lg px-3 py-2.5"
          >
            <div className="h-6 w-6 rounded-full bg-[#F5E8E8]" />
            <div className="flex-1 ml-3 h-2 rounded bg-[#E9E9E9]" />
            <span className="text-[9px] text-[#666]">₹{i}20</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TransactionsScreen() {
  return (
    <div className="h-full w-full bg-[#F8F7F5] px-4 pt-10 pb-6 flex flex-col">
      <span className="text-[10px] tracking-wide uppercase text-[#666] mb-1">
        Transaction history
      </span>
      <p className="font-display text-xl text-[#111] mb-5">July 2026</p>

      <div className="flex gap-2 mb-5">
        {["All", "Sent", "Received"].map((f, i) => (
          <span
            key={f}
            className={`text-[9px] tracking-wide uppercase px-3 py-1.5 rounded-full border ${
              i === 0
                ? "bg-[#111] text-[#F8F7F5] border-[#111]"
                : "border-[#E9E9E9] text-[#666]"
            }`}
          >
            {f}
          </span>
        ))}
      </div>

      <div className="space-y-3 flex-1 overflow-hidden">
        {[
          { name: "Rangoli Supplies", amt: "-₹640", up: false },
          { name: "Freelance credit", amt: "+₹6,200", up: true },
          { name: "Electricity bill", amt: "-₹1,150", up: false },
          { name: "House fund", amt: "-₹4,000", up: false },
          { name: "Refund — Zoho", amt: "+₹299", up: true },
        ].map((tx) => (
          <div key={tx.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  tx.up ? "bg-[#F5E8E8]" : "bg-[#E9E9E9]"
                }`}
              >
                {tx.up ? (
                  <ArrowDownLeft size={12} className="text-[#111]" />
                ) : (
                  <ArrowUpRight size={12} className="text-[#111]" />
                )}
              </span>
              <div>
                <p className="text-[11px] text-[#111]">{tx.name}</p>
                <p className="text-[9px] text-[#666]">Today, 6:40 PM</p>
              </div>
            </div>
            <span
              className={`text-[11px] ${
                tx.up ? "text-[#111]" : "text-[#666]"
              }`}
            >
              {tx.amt}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PhoneMockup({
  kind,
  className = "",
}: {
  kind: "balance" | "transactions";
  className?: string;
}) {
  return (
    <div
      className={`relative w-[220px] h-[450px] rounded-[2.2rem] bg-[#111] p-[10px] shadow-2xl shadow-black/20 ${className}`}
    >
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-5 w-24 bg-[#111] rounded-b-2xl z-10" />
      <div className="h-full w-full rounded-[1.7rem] overflow-hidden bg-white">
        {kind === "balance" ? <BalanceScreen /> : <TransactionsScreen />}
      </div>
    </div>
  );
}

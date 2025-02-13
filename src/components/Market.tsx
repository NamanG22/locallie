import { ShoppingBag, TrendingUp, Users, Map, CreditCard, Store } from "lucide-react";

export const Market = () =>{
    return(
        <section className="py-24 bg-gradient-to-br from-white via-accent-light/5 to-white px-4">
            <div className="container max-w-6xl mx-auto">
                <div className="reveal">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral mb-16">
                        A $850 Billion Market Opportunity
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                            <TrendingUp className="text-[#000957] w-8 h-8 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Rapid Market Growth</h3>
                                <p className="text-neutral-light">India's grocery market is growing at 8-10% CAGR, reaching $850 billion.</p>
                            </div>
                            </div>
                            <div className="p-6 rounded-xl shadow-2xl">
                                <h4 className="text-lg font-semibold mb-2">Quick Commerce Growth</h4>
                                <p className="text-2xl font-bold text-[#000957]">$5.5B by 2025</p>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden bg-white p-8 drop-shadow-xl">
                            <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Market Growth"
                            className="w-full h-[300px] object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
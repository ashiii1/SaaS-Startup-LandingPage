import { featureItems } from "@/data/data";
import  { FeatureCard } from "@/components/FeatureCard";

export const Features = () => {
  return (
    <section className="bg-slate-900 pt-10 pb-10 text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
        Unlock the Full Potential of Your SaaS Startup       
         </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
          Discover the key features designed to elevate your business—whether its creating a captivating landing page, offering seamless documentation, or engaging your audience through insightful blogs.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {featureItems.map((item, index) => (
            <FeatureCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

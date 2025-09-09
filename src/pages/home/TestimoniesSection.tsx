import Testimony from "../../components/testimonyCard/Testimony";

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface Testimonial {
  id: string;
  rating: number;
  quote: string;
  author: Author;
}

const TestimoniesSection = ({ data = [] }: { data: Testimonial[] }) => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-r from-violet-600/5 via-fuchsia-500/5 to-orange-500/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight mb-4">
              What{" "}
              <span className="bg-gradient-to-r from-violet-300 to-orange-300 bg-clip-text text-transparent">
                Listeners
              </span>{" "}
              Say
            </h2>
            <p className="text-slate-400 text-lg">
              Feedback from our amazing community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.map((value) => {
              return <Testimony {...value} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniesSection;

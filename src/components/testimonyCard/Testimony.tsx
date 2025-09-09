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

const Testimony = ({ id, rating, quote, author }: Testimonial) => {
  return (
    <div
      className="glass-surface p-8 rounded-2xl border border-white/20"
      key={id}
    >
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400 mb-2">
          {Array.from({ length: 5 }, (_, i) => (
            <i
              key={i}
              className={`fas fa-star ${
                i < rating ? "opacity-100" : "opacity-30"
              }`}
            ></i>
          ))}
        </div>
      </div>
      <p className="text-slate-300 mb-6 leading-relaxed">{quote}</p>
      <div className="flex items-center">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <div className="font-semibold">{author.name}</div>
          <div className="text-sm text-slate-400">{author.role}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;

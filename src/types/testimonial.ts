
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
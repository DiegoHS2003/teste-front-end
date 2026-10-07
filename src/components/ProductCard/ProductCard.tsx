interface ProductCardProps {
  name: string;
  description: string;
  photo: string;
  price: number;
}

export function ProductCard({ name, description, photo, price }: ProductCardProps) {
  return (
    <li>
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </li>
  );
}
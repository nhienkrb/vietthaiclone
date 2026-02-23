 type Product = {
    id: string;
    slug: string;
    title: string;
    image: string;
    price: number ;
    originalPrice: number;
    discountPercent?: number;
    badgeText?: string;
}
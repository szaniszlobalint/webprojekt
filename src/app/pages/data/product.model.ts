export  interface  Product {
    id: string;
    href: string;
    price: number;
    description: string;
    isBundle: boolean;
    isCustomerVisible: boolean;
    name: string;
    orderDate?: number;
    productSerialNumber: number;
    startDate?: number;
    terminationDate?: number;
    status: string;
  }
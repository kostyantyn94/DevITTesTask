import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const countAllProducts = async () => {
  const count = await prisma.product.count();
  return count;
};

export const getProductsOnStock = async (uuid: string) => {
  const stock = await prisma.stock.findUnique({
    where: { uuid },
    include: { products: true },
  });
  return stock?.products || [];
};

export const countProduct = async (sku: string) => {
  const product = await prisma.product.findUnique({
    where: { sku },
  });
  return product?.stocks.length || 0;
};

export const countProductOnStock = async (uuid: string, sku: string) => {
  const product = await prisma.product.findUnique({
    where: { sku },
    include: {
      stocks: {
        where: { uuid },
      },
    },
  });
  return product?.stocks.length || 0;
};

export const countProductByCategory = async (slug: string) => {
  const category = await prisma.category.findUnique({
    where: { slug },
    include: { products: true },
  });
  return category?.products.length || 0;
};

export const countProductOnStockByCategory = async (
  uuid: string,
  slug: string
) => {
  const products = await prisma.product.findMany({
    where: {
      categories: {
        some: { slug },
      },
      stocks: {
        some: { uuid },
      },
    },
  });
  return products.length;
};

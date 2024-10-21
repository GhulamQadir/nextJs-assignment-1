type ProductType = {
  img: string;
  price: number;
  title: string;
};

const featuredProducts: ProductType[] = [
  {
    img: "https://mendeez.com/cdn/shop/files/1_c6324b56-865e-43fc-9285-861a6c25c365.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723905420&width=600",
    price: 800,
    title: "Striped T-Shirt - Pink",
  },
  {
    img: "https://mendeez.com/cdn/shop/products/tucky-polot-shirtsmendeez-pk-0011867-104594.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723903121&width=600",
    price: 2200,
    title: "Polo Shirt - Brown",
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A8005_1000x1000@2x.progressive.jpg?v=1714990355",
    title: "Mint Green Linen Regular Fit Shirt",
    price: 2600,
  },
  {
    img: "https://mendeez.com/cdn/shop/files/10_49df98b2-fac3-4819-9155-a42e3cc1b38b.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723905506&width=600",
    price: 1700,
    title: "Tipping Colar Polo Shirt - Blue",
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A7777_c6959d24-21f4-4298-90f2-cb708c0114aa_1000x1000@2x.progressive.jpg?v=1687596502",
    price: 2550,
    title: "Navy Blue Slim Fit Chino Pants",
  },
  {
    img: "https://mendeez.com/cdn/shop/products/iceberg-half-sleeve-t-shirtt-shirtsmendeez-pk-0009415-395702.png?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723902059&width=600",
    price: 1200,
    title: "IceBerg Half Sleeves T-Shirt",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/10_49df98b2-fac3-4819-9155-a42e3cc1b38b.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723905506&width=600",
    price: 1700,
    title: "Tipping Colar Polo Shirt - Blue",
  },
];

const shirtsCateg: ProductType[] = [
  {
    img: "https://zed.com.pk/cdn/shop/files/050A8005_1000x1000@2x.progressive.jpg?v=1714990355",
    title: "Mint Green Linen Regular Fit Shirt",
    price: 2600,
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A7651_cb237395-cdb2-41ce-aafb-3edefac5a9f7_1000x1000@2x.progressive.jpg?v=1714992218",
    title: "Navy Blue Oxford Dress Shirt",
    price: 2700,
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A7857_1000x1000@2x.progressive.jpg?v=1714990582",
    title: "Pink Linen Regular Fit Shirt",
    price: 2300,
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A6305_6a3f0513-ad20-444c-af0c-dd26780e735c_1000x1000@2x.progressive.jpg?v=1725614876",
    title: "Navy Blue Military Full Sleeves Shirt",
    price: 2500,
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A7651_cb237395-cdb2-41ce-aafb-3edefac5a9f7_1000x1000@2x.progressive.jpg?v=1714992218",
    title: "Navy Blue Oxford Dress Shirt",
    price: 2700,
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A7857_1000x1000@2x.progressive.jpg?v=1714990582",
    title: "Pink Linen Regular Fit Shirt",
    price: 2300,
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A7651_cb237395-cdb2-41ce-aafb-3edefac5a9f7_1000x1000@2x.progressive.jpg?v=1714992218",
    title: "Navy Blue Oxford Dress Shirt",
    price: 2700,
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A7857_1000x1000@2x.progressive.jpg?v=1714990582",
    title: "Pink Linen Regular Fit Shirt",
    price: 2300,
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A6305_6a3f0513-ad20-444c-af0c-dd26780e735c_1000x1000@2x.progressive.jpg?v=1725614876",
    title: "Navy Blue Military Full Sleeves Shirt",
    price: 2500,
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A7651_cb237395-cdb2-41ce-aafb-3edefac5a9f7_1000x1000@2x.progressive.jpg?v=1714992218",
    title: "Navy Blue Oxford Dress Shirt",
    price: 2700,
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A7857_1000x1000@2x.progressive.jpg?v=1714990582",
    title: "Pink Linen Regular Fit Shirt",
    price: 2300,
  },
];
const tshirtsCateg: ProductType[] = [
  {
    img: "https://mendeez.com/cdn/shop/files/ashy-v-neckt-shirtsmendeez-pk-0011707-815960_7aa3bbac-8ee2-40e5-9e3b-52affd4c2387.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723904250&width=600",
    price: 1600,
    title: "V-Neck Tshirt - Charcoal Grey",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/sangria-v-neckt-shirtsmendeez-pk-0011702-544445_1cbc78e5-b307-4099-870f-8fa9a6a17161.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723904290&width=600",
    price: 1700,
    title: "V-Neck Tshirt - Maroon",
  },
  {
    img: "https://mendeez.com/cdn/shop/products/iceberg-half-sleeve-t-shirtt-shirtsmendeez-pk-0009415-395702.png?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723902059&width=600",
    price: 1200,
    title: "IceBerg Half Sleeves T-Shirt",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/1_c6324b56-865e-43fc-9285-861a6c25c365.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723905420&width=600",
    price: 800,
    title: "Striped T-Shirt - Pink",
  },
  {
    img: "https://mendeez.com/cdn/shop/products/iceberg-half-sleeve-t-shirtt-shirtsmendeez-pk-0009415-395702.png?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723902059&width=600",
    price: 1200,
    title: "IceBerg Half Sleeves T-Shirt",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/ashy-v-neckt-shirtsmendeez-pk-0011707-815960_7aa3bbac-8ee2-40e5-9e3b-52affd4c2387.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723904250&width=600",
    price: 1600,
    title: "V-Neck Tshirt - Charcoal Grey",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/1_c6324b56-865e-43fc-9285-861a6c25c365.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723905420&width=600",
    price: 800,
    title: "Striped T-Shirt - Pink",
  },
  {
    img: "https://mendeez.com/cdn/shop/products/iceberg-half-sleeve-t-shirtt-shirtsmendeez-pk-0009415-395702.png?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723902059&width=600",
    price: 1200,
    title: "IceBerg Half Sleeves T-Shirt",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/1_c6324b56-865e-43fc-9285-861a6c25c365.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723905420&width=600",
    price: 800,
    title: "Striped T-Shirt - Pink",
  },
  {
    img: "https://mendeez.com/cdn/shop/products/iceberg-half-sleeve-t-shirtt-shirtsmendeez-pk-0009415-395702.png?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723902059&width=600",
    price: 1200,
    title: "IceBerg Half Sleeves T-Shirt",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/ashy-v-neckt-shirtsmendeez-pk-0011707-815960_7aa3bbac-8ee2-40e5-9e3b-52affd4c2387.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723904250&width=600",
    price: 1600,
    title: "V-Neck Tshirt - Charcoal Grey",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/1_c6324b56-865e-43fc-9285-861a6c25c365.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723905420&width=600",
    price: 800,
    title: "Striped T-Shirt - Pink",
  },
];

const pantsCateg: ProductType[] = [
  {
    img: "https://zed.com.pk/cdn/shop/products/beige-pants_1000x1000@2x.progressive.jpg?v=1607076112",
    price: 3000,
    title: "Beige Tailored Pant",
  },
  {
    img: "https://zed.com.pk/cdn/shop/products/black-pants_1000x1000@2x.progressive.jpg?v=1607076192",
    price: 2800,
    title: "Black Tailored Pant",
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A6018_1000x1000@2x.progressive.jpg?v=1718956494",
    price: 3500,
    title: "Fit Blue Club Check Trouser",
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A5997_1000x1000@2x.progressive.jpg?v=1718452834",
    price: 3800,
    title: "Brown Flannel Pant",
  },
  {
    img: "https://zed.com.pk/cdn/shop/products/black-pants_1000x1000@2x.progressive.jpg?v=1607076192",
    price: 2800,
    title: "Black Tailored Pant",
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A6018_1000x1000@2x.progressive.jpg?v=1718956494",
    price: 3500,
    title: "Fit Blue Club Check Trouser",
  },
  {
    img: "https://zed.com.pk/cdn/shop/products/black-pants_1000x1000@2x.progressive.jpg?v=1607076192",
    price: 2800,
    title: "Black Tailored Pant",
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A6018_1000x1000@2x.progressive.jpg?v=1718956494",
    price: 3500,
    title: "Fit Blue Club Check Trouser",
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A5997_1000x1000@2x.progressive.jpg?v=1718452834",
    price: 3800,
    title: "Brown Flannel Pant",
  },
  {
    img: "https://zed.com.pk/cdn/shop/products/black-pants_1000x1000@2x.progressive.jpg?v=1607076192",
    price: 2800,
    title: "Black Tailored Pant",
  },
  {
    img: "https://zed.com.pk/cdn/shop/files/050A6018_1000x1000@2x.progressive.jpg?v=1718956494",
    price: 3500,
    title: "Fit Blue Club Check Trouser",
  },
];

const accessoriesCateg: ProductType[] = [
  {
    img: "https://mendeez.com/cdn/shop/files/6-2_c0b725dd-6c0e-4114-bd2e-9005670c4da5.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1728619071&width=600",
    price: 700,
    title: "Embroidered Cap - White",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/8-2_0897e70f-134a-42d1-b405-859746cee19f.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1729069459&width=600",
    price: 900,
    title: "Baseball Cap - Navy Blue",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/1-2_f9cf3a85-402d-473d-b954-aafe472d7a9c.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1728619870&width=600",
    price: 800,
    title: "Signature Embroidered Cap - Red",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/3-2_3c4e27be-ab5a-4a07-848b-d2c9da6ab1ea.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1728619747&width=600",
    price: 1000,
    title: "Embroidered Cap - Khaki",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/3_b668f7bc-a4af-4a77-8ec5-77486bd6f403.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1726816252&width=600",
    price: 1100,
    title: "Double Bridge Round Sunglasses - Brown",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/1_6203c39d-3fda-4258-8fe9-0d42fcc46669.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1726815946&width=600",
    price: 1000,
    title: "Classic Sunglasses - Black",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/1_619a3865-6076-4b10-83e1-e248aea67475.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723904429&width=600",
    price: 1400,
    title: "Wayfarer Sunglasses - Peach",
  },
];

const polosCateg: ProductType[] = [
  {
    img: "https://mendeez.com/cdn/shop/files/6-1_18b58456-2149-4c87-831d-7c475c57f9df.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1725629577&width=600",
    price: 2800,
    title: "Signature Polo Shirt - Brown",
  },
  {
    img: "https://mendeez.com/cdn/shop/products/blue-sapphire-polot-shirtsmendeez-pk-0011852-952431.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723903102&width=600",
    price: 2900,
    title: "Polo Shirt - Ocean Blue",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/2-3_25eb7232-7f7e-4248-92ea-df4c1f28456e.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723905201&width=600",
    price: 4300,
    title: "Collar Polo Shirt - Maroon",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/3_3ccc532b-ca5f-4991-a322-f8f19a5b7eea.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723905192&width=600",
    price: 4000,
    title: "Collar Polo Shirt - Navy",
  },
  {
    img: "https://mendeez.com/cdn/shop/products/black-polot-shirtsmendeez-pk-0011016-714537.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723903111&width=600",
    price: 3500,
    title: "Polo Shirt - Black",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/2-3_25eb7232-7f7e-4248-92ea-df4c1f28456e.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723905201&width=600",
    price: 4300,
    title: "Collar Polo Shirt - Maroon",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/3_3ccc532b-ca5f-4991-a322-f8f19a5b7eea.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723905192&width=600",
    price: 4000,
    title: "Collar Polo Shirt - Navy",
  },

  {
    img: "https://mendeez.com/cdn/shop/products/black-polot-shirtsmendeez-pk-0011016-714537.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723903111&width=600",
    price: 3500,
    title: "Polo Shirt - Black",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/2-3_25eb7232-7f7e-4248-92ea-df4c1f28456e.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723905201&width=600",
    price: 4300,
    title: "Collar Polo Shirt - Maroon",
  },
  {
    img: "https://mendeez.com/cdn/shop/files/3_3ccc532b-ca5f-4991-a322-f8f19a5b7eea.jpg?crop=region&crop_height=1074&crop_left=0&crop_top=2&crop_width=720&v=1723905192&width=600",
    price: 4000,
    title: "Collar Polo Shirt - Navy",
  },
];

export {
  featuredProducts,
  shirtsCateg,
  tshirtsCateg,
  pantsCateg,
  accessoriesCateg,
  polosCateg,
};

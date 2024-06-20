"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Panier vide</div>
      ) : (
        <div className="">
          <Image
            src="https://images.pexels.com/photos/23524372/pexels-photo-23524372/free-photo-of-noir-et-blanc-ville-homme-gens.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-md"
          />

          <div className="">
            <div className="">
              <div className="">
                <h3>Produit</h3>
                <div className="">15000 F CFA</div>
              </div>
              <div className="">Disponible</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;

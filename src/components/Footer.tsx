import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-[#EEE6D8] text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">BAZAR AFRICAIN</div>
          </Link>
          <p className="">La mode africaine mon combat</p>
          <span className="font-semibold">hello@BAZAR AFRICAIN.dev</span>
          <span className="font-semibold">07 12 32 96 59</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">MENU</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">Accueil</Link>
              <Link href="/">Shop</Link>
              <Link href="/">Deals</Link>
              <Link href="/">A propos</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Nouvel arrivage</Link>
              <Link href="">Accessoires</Link>
              <Link href="">Homme</Link>
              <Link href="">Femme</Link>
              <Link href="">Tous les produits</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">AIDE</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Mon compte</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SOUSCRIRE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            {/* <input type="text" placeholder="Email" className="p-4 w-3/4" />
            <button className="w-1/4 bg-BAZAR AFRICAIN text-[#B67332] font-bold">
              JOIN
            </button> */}
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16 text-[#B67332]">
        <div className="">© 2024 BAZAR AFRICAIN Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className=" mr-4">Language</span>
            <span className="font-medium">Cote d'Ivoire | Français</span>
          </div>
          <div className="">
            <span className=" mr-4">Devise</span>
            <span className="font-medium">F CFA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

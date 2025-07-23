import lojinhaLogo from "../../assets/MarcaSemFundo.png";

export default function NavBar() {
  return (
    <>
      <div className="flex w-full h-32 bg-gray-200 items-center justify-around">
        <div className="w-1/7 h-auto">
          <img src={lojinhaLogo} alt="" />
        </div>
        <div className="w-3/7">
          <input
            className="w-full h-8 border-2 rounded-4xl
            border-gray-400 p-4 focus:outline-0 focus:border-2 focus:border-gray-700"
            type="text"
            placeholder="Pesquisar..."
          />
        </div>
        <div className="flex w-1/7 gap-20">
          <a href="#" className="text-3xl">
            <i class="ri-shopping-cart-line"></i>
          </a>
          <a href="#" className="text-3xl">
            <i class="ri-user-3-line"></i>
          </a>
        </div>
      </div>
    </>
  );
}

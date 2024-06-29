import { waverio, squarestone, martino, virogan, vertex } from '@/assets/index';

const Brands = () => {
  return (
    <section
      id="brands"
      className="flex flex-col gap-5 text-center w-full md:w-10/12"
    >
      <h2 className="text-lg">Trusted by these brands and more</h2>
      <div className="flex flex-col md:flex-row flex-wrap justify-around items-center gap-8">
        <img src={waverio.src} alt="Waverio logo" className="w-40 xl:w-44" />
        <img
          src={squarestone.src}
          alt="Squarestone logo"
          className="w-40 xl:w-44"
        />
        <img src={martino.src} alt="Martino logo" className="w-40 xl:w-44" />
        <img src={virogan.src} alt="Virogan logo" className="w-40 xl:w-44" />
        <img src={vertex.src} alt="Vertex logo" className="w-40 xl:w-44" />
      </div>
    </section>
  );
};

export default Brands;

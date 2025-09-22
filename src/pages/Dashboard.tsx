import Button from "../components/Button";

const dashboard = () => {
  return (
    <div className="h-dvh w-dvw bg-[linear-gradient(135deg,_#1e3a8a_0%,_#1e40af_25%,_#2563eb_50%,_#3b82f6_100%)] p-8">
      <header className="border-b-solid flex w-full flex-row items-center justify-between border-b-1 border-b-neutral-400 pb-8 mb-8">
        <div className="flex flex-col gap-2">
          <span
            id="title-dashboard"
            className="text-3xl font-extrabold text-white"
          >
            Dashboard de Previsões
          </span>
          <p id="description-dashboard" className="text-white">
            Análises e Previsões
          </p>
        </div>
        <div>
          <Button text="Nova Previsão" theme="primary" />
        </div>
      </header>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6">
        <div className="relative flex flex-col gap-6 rounded-3xl border border-solid border-[rgba(59,_130,_246,_0.1)] bg-white p-8 shadow-[0_10px_40px_rgba(30,_58,_138,_0.1)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(30,_58,_138,_0.15)]">
          <div className="flex flex-row items-center justify-between">
            <span>Teste</span>
            <div className="h-12 w-12 bg-green-500 rounded-[8px]"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold">R$ 2.4M</span>
          </div>
        </div>
        <div className="relative flex rounded-3xl border border-solid border-[rgba(59,_130,_246,_0.1)] bg-white p-8 shadow-[0_10px_40px_rgba(30,_58,_138,_0.1)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(30,_58,_138,_0.15)]"></div>
        <div className="relative flex rounded-3xl border border-solid border-[rgba(59,_130,_246,_0.1)] bg-white p-8 shadow-[0_10px_40px_rgba(30,_58,_138,_0.1)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(30,_58,_138,_0.15)]"></div>
        <div className="relative flex rounded-3xl border border-solid border-[rgba(59,_130,_246,_0.1)] bg-white p-8 shadow-[0_10px_40px_rgba(30,_58,_138,_0.1)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(30,_58,_138,_0.15)]"></div>
      </div>
    </div>
  );
};

export default dashboard;

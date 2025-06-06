export default function ContactButton({ path = "" }) {
    return (
      <div className="h-full w-20 sm:w-24 md:w-28 border-4 border-jet rounded-l-2xl flex justify-center items-center hover:cursor-pointer">
        <img src={path} className="h-10 w-10 object-contain" alt="Ícone de contato" />
      </div>
    );
  }
  
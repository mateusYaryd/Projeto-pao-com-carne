import { WHATSAPP_URL } from "@/lib/config";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Pão com Carne no WhatsApp"
      className="fixed bottom-4 right-4 z-30 grid h-[60px] w-[60px] place-items-center rounded-full bg-[#25D366] shadow-[0_4px_14px_rgba(0,0,0,.35)] transition-transform duration-200 hover:scale-110"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" fill="#fff">
        <path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.3.6 4.4 1.7 6.3L3 29l7.4-1.9c1.8 1 3.8 1.5 5.6 1.5 7 0 12.6-5.6 12.6-12.5S23 3 16 3zm0 22.900c-1.800 0-3.500-.5-5-1.400l-.4-.2-4.400 1.100 1.200-4.300-.3-.4a10.300 10.300 0 0 1-1.600-5.500C5.500 9.800 10.200 5.200 16 5.200s10.500 4.600 10.500 10.300S21.800 25.900 16 25.900zm5.800-7.700c-.3-.2-1.900-.9-2.200-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100a8.500 8.500 0 0 1-4.200-3.700c-.3-.6.3-.5.900-1.700.1-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.100-.9.400s-1.200 1.200-1.200 2.800 1.200 3.300 1.400 3.500 2.400 3.700 5.800 5.100c2.200.9 3 .9 4 .8.600-.1 1.900-.8 2.200-1.500s.3-1.400.2-1.500-.3-.2-.6-.4z" />
      </svg>
    </a>
  );
}

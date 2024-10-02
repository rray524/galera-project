import { FaHome, FaClipboardCheck, FaTools } from "react-icons/fa";

export const services = [
  {
    title: "Realtor Professionals",
    description:
      "Realtor professionals play a critical role in the real estate industry, acting as intermediaries between buyers and sellers in property transactions.",
    icon: <FaHome className="text-white" size={24} />,
  },
  {
    title: "Residence Permit Management",
    description:
      "Residence permit management involves overseeing the application, renewal, and validation processes for individuals seeking to reside legally in a foreign country.",
    icon: <FaClipboardCheck className="text-white" size={24} />,
  },
  {
    title: "Property Management",
    description:
      "Property management entails overseeing residential, commercial, or industrial real estate, including apartments, detached houses, condominium units, and shopping centers.",
    icon: <FaTools className="text-white" size={24} />,
  },
];

/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";

const ADMIN_WHATSAPP_NUMBER = import.meta.env.VITE_ADMIN_WHATSAPP_NUMBER || "";

const normalizePhone = (number = "") => {
  const clean = String(number).replace(/\D/g, "").replace(/^0+/, "");

  if (!clean) return "";

  return clean.startsWith("91") ? `+${clean}` : `+91${clean}`;
};

const safeValue = (value) => (value ? value : "N/A");

const sendVehicleToWhatsApp = (payload) => {
  const adminNumber = ADMIN_WHATSAPP_NUMBER.replace(/\D/g, "");

  if (!adminNumber) {
    throw new Error("Admin WhatsApp number missing. Check .env");
  }

  const serviceNames = {
    selfDrive: "Self Drive",

    carWithDriver: "Car With Driver",

    weddingCar: "Wedding Car",

    premiumCar: "Premium Car",

    tempoTraveller: "Tempo Traveller",

    airportTransfer: "Airport Transfer",
  };

  const services =
    Object.entries(payload.services)
      .filter(([_, value]) => value)
      .map(([key]) => serviceNames[key] || key)
      .join(", ") || "No service selected";

  const documents = payload.documents || {};

  const message = `

🚗 NEW VEHICLE LISTING REQUEST



👤 OWNER DETAILS


Name:
${safeValue(payload.owner.name)}


Mobile:
${safeValue(payload.owner.mobileNumber)}


WhatsApp:
${safeValue(payload.owner.whatsappNumber)}


Email:
${safeValue(payload.owner.email)}




🚘 VEHICLE DETAILS


Brand:
${safeValue(payload.vehicle.brand)}


Model:
${safeValue(payload.vehicle.model)}


Year:
${safeValue(payload.vehicle.manufacturingYear)}


Registration:
${safeValue(payload.vehicle.registrationNumber)}


Fuel:
${safeValue(payload.vehicle.fuel)}


Transmission:
${safeValue(payload.vehicle.transmission)}


Seats:
${safeValue(payload.vehicle.seats)}


Color:
${safeValue(payload.vehicle.color)}


GPS:
${safeValue(payload.vehicle.gpsAvailable)}




🛠 SERVICES


${services}




📍 ADDRESS


State:
${safeValue(payload.address.state)}


District:
${safeValue(payload.address.district)}


Police Station:
${safeValue(payload.address.policeStation)}


Address:
${safeValue(payload.address.fullAddress)}


Landmark:
${safeValue(payload.address.landmark)}


PIN:
${safeValue(payload.address.pinCode)}


📄 DOCUMENT STATUS

Front Image:
${documents.frontImage ? `Uploaded ✅\n${documents.frontImage}` : "Not Uploaded"}

Rear Image:
${documents.rearImage ? `Uploaded ✅\n${documents.rearImage}` : "Not Uploaded"}

Left Image:
${documents.leftImage ? `Uploaded ✅\n${documents.leftImage}` : "Not Uploaded"}

Right Image:
${documents.rightImage ? `Uploaded ✅\n${documents.rightImage}` : "Not Uploaded"}

Interior:
${documents.interiorImage ? `Uploaded ✅\n${documents.interiorImage}` : "Not Uploaded"}

RC Book:
${documents.rcBook ? `Uploaded ✅\n${documents.rcBook}` : "Not Uploaded"}

Insurance:
${documents.insurance ? `Uploaded ✅\n${documents.insurance}` : "Not Uploaded"}

PUC:
${documents.pollutionCertificate ? `Uploaded ✅\n${documents.pollutionCertificate}` : "Not Uploaded"}
 
📝 NOTES

${safeValue(payload.notes)}

✅ STATUS

Pending Verification


 
 

`;

  const url = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;

  // window.open(url, "_blank", "noopener,noreferrer");
  window.location.href = url;
};
const uploadVehicleImages = async (documents) => {
  const uploaded = {};

  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

  const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  if (!CLOUD_NAME || !UPLOAD_PRESET) {
    throw new Error("Cloudinary configuration missing");
  }

  for (const key in documents) {
    const file = documents[key]?.[0];

    if (!file) {
      uploaded[key] = null;
      continue;
    }

    const formData = new FormData();

    formData.append("file", file);

    formData.append("upload_preset", UPLOAD_PRESET);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();

    if (!data.secure_url) {
      console.log("Cloudinary Error", data);
      console.log("Cloudinary Response:", data);
      console.log("Error Message:", data.error?.message);
      throw new Error(`Upload failed for ${key}`);
    }

    uploaded[key] = data.secure_url;
  }

  return uploaded;
};
const useListYourCar = () => {
  const [loading, setLoading] = useState(false);

  const methods = useForm({
    mode: "onTouched",

    defaultValues: {
      owner: {
        name: "",

        mobileNumber: "",

        whatsappNumber: "",

        email: "",
      },

      vehicle: {
        brand: "",

        model: "",

        manufacturingYear: "",

        registrationNumber: "",

        fuel: "",

        transmission: "",

        seats: "",

        color: "",

        gpsAvailable: "",
      },

      services: {
        selfDrive: false,

        carWithDriver: false,

        weddingCar: false,

        premiumCar: false,

        tempoTraveller: false,

        airportTransfer: false,
      },

      address: {
        state: "Assam",

        district: "",

        policeStation: "",

        fullAddress: "",

        landmark: "",

        pinCode: "",
      },

      documents: {
        frontImage: null,
        rearImage: null,
        leftImage: null,
        rightImage: null,
        interiorImage: null,
        rcBook: null,
        insurance: null,
        pollutionCertificate: null,
      },

      notes: "",

      terms: {
        confirmOwner: false,

        confirmInformation: false,

        agreeVerification: false,

        agreeTerms: false,
      },
    },
  });

  const submitVehicle = async (formData) => {
    try {
      setLoading(true);

      // Upload images first
      const uploadedDocuments = await uploadVehicleImages(formData.documents);

      const payload = {
        owner: {
          name: formData.owner.name,

          mobileNumber: normalizePhone(formData.owner.mobileNumber),

          whatsappNumber: normalizePhone(formData.owner.whatsappNumber),

          email: formData.owner.email || null,
        },

        vehicle: {
          ...formData.vehicle,
        },

        services: {
          ...formData.services,
        },

        address: {
          ...formData.address,
        },

        // Cloudinary URLs
        documents: uploadedDocuments,

        notes: formData.notes || "",

        terms: {
          ...formData.terms,
        },

        status: "pending",

        verification: {
          required: true,
          verified: false,
          verifiedBy: null,
          verifiedAt: null,
        },

        createdAt: new Date().toISOString(),
      };

      console.log("FINAL PAYLOAD", payload);

      sendVehicleToWhatsApp(payload);

      return {
        success: true,
        data: payload,
      };
    } catch (error) {
      console.error("Submit Error:", error);

      return {
        success: false,
        error: error.message,
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    ...methods,

    loading,

    onSubmit: submitVehicle,
  };
};

export default useListYourCar;

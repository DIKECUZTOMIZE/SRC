import React, { useState } from "react";
import {
  Camera,
  FileText,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import {
  FileField,
  FormSection,
} from "../../../../../shared/components/ui/Form";

import vehicleImagesToken from "../../../../../shared/styles/vehicleImagesToken";


const VehicleImagesSection = React.memo(() => {

  const [language,setLanguage] = useState("en");
  const [isOpen,setIsOpen] = useState(false);

  const isAssamese = language === "as";


  return (

    <FormSection
      title={
        isAssamese
          ? "বাহনৰ ছবি আৰু নথিপত্ৰ"
          : "Vehicle Images & Documents"
      }
      description={
        isAssamese
          ? "পৰীক্ষাৰ বাবে স্পষ্ট বাহনৰ ছবি আৰু বৈধ নথিপত্ৰ আপলোড কৰক।"
          : "Upload clear vehicle photos and valid documents required for verification."
      }
    >

      <div className={vehicleImagesToken.wrapper}>


        <div className={vehicleImagesToken.grid}>


          <FileField
            name="documents.frontImage"
            label="Front View Photo"
            accept="image/*"
            required
            icon={<Camera className={vehicleImagesToken.icon}/>}
          />


          <FileField
            name="documents.rearImage"
            label="Rear View Photo"
            accept="image/*"
            required
            icon={<Camera className={vehicleImagesToken.icon}/>}
          />


          <FileField
            name="documents.leftImage"
            label="Left Side Photo"
            accept="image/*"
            required
            icon={<Camera className={vehicleImagesToken.icon}/>}
          />


          <FileField
            name="documents.rightImage"
            label="Right Side Photo"
            accept="image/*"
            required
            icon={<Camera className={vehicleImagesToken.icon}/>}
          />


          <FileField
            name="documents.interiorImage"
            label="Interior Photo"
            accept="image/*"
            required
            icon={<Camera className={vehicleImagesToken.icon}/>}
          />



          <FileField
            name="documents.rcBook"
            label="RC Book / Registration Certificate"
            accept="image/*,.pdf"
            required
            icon={<FileText className={vehicleImagesToken.icon}/>}
          />



          <FileField
            name="documents.insurance"
            label="Insurance Certificate"
            accept="image/*,.pdf"
            required
            icon={<FileText className={vehicleImagesToken.icon}/>}
          />



          <FileField
            name="documents.pollutionCertificate"
            label="Pollution Certificate (PUC)"
            accept="image/*,.pdf"
            icon={<FileText className={vehicleImagesToken.icon}/>}
          />


        </div>




        <div className={vehicleImagesToken.guidelinesCard}>


          <div
            className={vehicleImagesToken.guidelinesHeader}
            onClick={()=>setIsOpen(prev=>!prev)}
            role="button"
            tabIndex={0}
            onKeyDown={(e)=>{

              if(
                e.key==="Enter" ||
                e.key===" "
              ){

                e.preventDefault();

                setIsOpen(prev=>!prev);

              }

            }}
          >



            <div className={vehicleImagesToken.guidelinesTitle}>

              <AlertTriangle
                className={vehicleImagesToken.guidelinesIcon}
              />


              {
                isAssamese
                ? "আপলোড নিৰ্দেশনা"
                : "Upload Guidelines"
              }


            </div>





            <div className="flex items-center gap-2">


              <div
                className={vehicleImagesToken.langButtonGroup}
                onClick={(e)=>e.stopPropagation()}
              >


                <button
                  type="button"
                  onClick={()=>setLanguage("en")}
                  className={`${vehicleImagesToken.langBtn}`}
                >
                  EN
                </button>



                <button
                  type="button"
                  onClick={()=>setLanguage("as")}
                  className={`${vehicleImagesToken.langBtn}`}
                >
                  অস
                </button>


              </div>




              {
                isOpen
                ?
                <ChevronUp className="h-4 w-4"/>
                :
                <ChevronDown className="h-4 w-4"/>
              }


            </div>


          </div>





          {
            isOpen && (

              <ul className={vehicleImagesToken.guidelinesList}>


                <li>
                  {
                    isAssamese
                    ? "বাহনৰ স্পষ্ট আৰু নতুন ছবি আপলোড কৰক।"
                    : "Upload clear and recent photos of your vehicle."
                  }
                </li>



                <li>
                  {
                    isAssamese
                    ? "ৰেজিষ্ট্ৰেচন নম্বৰ স্পষ্ট দেখা যাব লাগিব।"
                    : "Vehicle registration number plate must be clearly visible."
                  }
                </li>



                <li>
                  {
                    isAssamese
                    ? "নথিপত্ৰ বৈধ আৰু পঢ়িব পৰা হ'ব লাগিব।"
                    : "Documents must be valid and readable."
                  }
                </li>



                <li>
                  {
                    isAssamese
                    ? "গ্ৰহণযোগ্য ফৰ্মেট JPG PNG PDF।"
                    : "Accepted formats JPG PNG PDF."
                  }
                </li>


              </ul>

            )
          }



        </div>



      </div>


    </FormSection>

  );

});


VehicleImagesSection.displayName="VehicleImagesSection";


export default VehicleImagesSection;
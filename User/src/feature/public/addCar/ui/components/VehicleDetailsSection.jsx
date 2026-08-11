import React from "react";
import {
  Car,
  Hash,
  Calendar,
  Fuel,
  Cog,
  Users,
  Palette,
  Navigation,
} from "lucide-react";

import {
  FormSection,
  InputField,
  SelectField,
} from "../../../../../shared/components/ui/Form";

import vehicleDetailsToken from "../../../../../shared/styles/vehicleDetailsToken";


const VehicleDetailsSection = React.memo(() => {
  return (
    <FormSection
      title="Vehicle Details"
      description="Provide your vehicle specification for platform listing and verification."
    >

      <div className={vehicleDetailsToken.wrapper}>

        <div className={vehicleDetailsToken.grid}>


          <InputField
            name="vehicle.brand"
            label="Vehicle Brand"
            placeholder="e.g. Maruti Suzuki"
            required
            icon={<Car className={vehicleDetailsToken.icon} />}
          />


          <InputField
            name="vehicle.model"
            label="Vehicle Model"
            placeholder="e.g. Swift Dzire"
            required
            icon={<Car className={vehicleDetailsToken.icon} />}
          />



          <InputField
            name="vehicle.registrationNumber"
            label="Registration Number"
            placeholder="AS01AB1234"
            required
            icon={<Hash className={vehicleDetailsToken.icon} />}
          />



          <InputField
            name="vehicle.manufacturingYear"
            label="Manufacturing Year"
            type="number"
            placeholder="e.g. 2022"
            min={1990}
            max={new Date().getFullYear()}
            required
            icon={<Calendar className={vehicleDetailsToken.icon} />}
          />



          <SelectField
            name="vehicle.fuel"
            label="Fuel Type"
            required
            icon={<Fuel className={vehicleDetailsToken.icon} />}
            options={[
              {
                label:"Petrol",
                value:"petrol"
              },
              {
                label:"Diesel",
                value:"diesel"
              },
              {
                label:"CNG",
                value:"cng"
              },
              {
                label:"Electric",
                value:"electric"
              },
              {
                label:"Hybrid",
                value:"hybrid"
              },
            ]}
          />



          <SelectField
            name="vehicle.transmission"
            label="Transmission"
            required
            icon={<Cog className={vehicleDetailsToken.icon} />}
            options={[
              {
                label:"Manual",
                value:"manual"
              },
              {
                label:"Automatic",
                value:"automatic"
              },
            ]}
          />



          <InputField
            name="vehicle.seats"
            label="Seating Capacity"
            type="number"
            placeholder="e.g. 5"
            min={1}
            max={50}
            required
            icon={<Users className={vehicleDetailsToken.icon} />}
          />



          <InputField
            name="vehicle.color"
            label="Vehicle Color"
            placeholder="White"
            required
            icon={<Palette className={vehicleDetailsToken.icon} />}
          />



          <SelectField
            name="vehicle.gpsAvailable"
            label="GPS Available"
            required
            icon={<Navigation className={vehicleDetailsToken.icon} />}
            options={[
              {
                label:"Yes",
                value:"yes"
              },
              {
                label:"No",
                value:"no"
              },
            ]}
          />


        </div>

      </div>

    </FormSection>
  );
});


VehicleDetailsSection.displayName = "VehicleDetailsSection";


export default VehicleDetailsSection;